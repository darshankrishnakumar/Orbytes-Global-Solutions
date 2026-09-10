import { NextRequest, NextResponse } from "next/server";
import { getDb, isDbConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

interface ContactSubmissionPayload {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  need: string;
  companySize: string;
  challenge: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: Partial<ContactSubmissionPayload> = await req.json();

    const {
      fullName,
      email,
      phone,
      companyName,
      need,
      companySize,
      challenge,
    } = body;

    // 1. Validation
    if (!fullName || !email || !phone || !companyName || !need || !companySize || !challenge) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required. Please fill in all steps.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid work email address.",
        },
        { status: 400 }
      );
    }

    const inquiryId = `inq_${crypto.randomUUID()}`;
    const ipAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    // 2. Check if TiDB Cloud database is configured
    if (isDbConfigured()) {
      const db = getDb();
      await db.execute(
        `INSERT INTO inquiries (
          id,
          full_name,
          work_email,
          phone_number,
          organization_name,
          solution_area,
          company_scale,
          primary_challenge,
          status,
          ip_address,
          user_agent
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new', ?, ?)`,
        [
          inquiryId,
          fullName.trim(),
          email.trim().toLowerCase(),
          phone.trim(),
          companyName.trim(),
          need.trim(),
          companySize.trim(),
          challenge.trim(),
          ipAddress,
          userAgent.substring(0, 500),
        ]
      );

      console.log(`[TiDB Cloud] Successfully stored inquiry ${inquiryId} from ${email}`);
    } else {
      console.warn(
        `[TiDB Cloud] TIDB_DATABASE_URL is not set. Inquiry was validated but not persisted to TiDB. Set TIDB_DATABASE_URL to save leads.`
      );
    }

    // 3. Optional fallback / parallel webhook (Web3Forms if key exists)
    const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || process.env.WEB3FORMS_KEY;
    if (web3FormsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Enterprise Inquiry from ${companyName} (${fullName})`,
            from_name: fullName,
            email,
            phone,
            company: companyName,
            solution_area: need,
            company_scale: companySize,
            challenge,
            inquiry_id: inquiryId,
          }),
        });
      } catch (webhookErr) {
        console.warn("[Notification Webhook] Non-critical notification dispatch error:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        id: inquiryId,
        message: "Enterprise consultation request received successfully.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[API Contact Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to process inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
