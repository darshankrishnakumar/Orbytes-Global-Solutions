import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Target,
  Award,
  Users,
  Quote,
  CheckCircle2,
  Building2,
  Phone,
  Mail,
  MapPin,
  Lock,
  Globe,
  Zap,
} from "lucide-react";
import { companyData } from "@/data/companyData";
import { leadershipData } from "@/data/leadershipData";
import { partnersData } from "@/data/partnersData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ModernFoundationsVisual } from "@/components/visuals/about/ModernFoundationsVisual";

export const metadata: Metadata = {
  title: "About Orbytes | Modern Enterprise IT & Managed Cybersecurity",
  description:
    "Learn about Orbytes Global Solutions. Born cloud-native with zero legacy technical debt, delivering 24/7 SOC defense and global IT management across India and Canada.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Hero [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Next-Gen Enterprise Technology & Cybersecurity</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Empowering Digital Transformation. Driving Enterprise Resilience.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {companyData.tagline} We engineer mission-critical digital foundations for forward-thinking organizations, delivering zero-compromise security, proactive 24/7 SOC defense, and high-uptime cloud operations.
          </p>

          {/* Key Metric Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4">
            {companyData.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#070d1e]/80 p-4 text-center backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-display">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  {m.label}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Facility Image */}
          <div className="pt-6">
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl aspect-[21/9] max-w-4xl mx-auto bg-slate-900">
              <img
                src="/images/about/company2.webp"
                alt="Orbytes Global Operations & Technology Command Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030714] via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-xs text-cyan-300 font-medium">
                    Orbytes Global Operations Center — Chennai Headquarters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission, Vision, Strategic Philosophy [LIGHT] */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Core Purpose & Orientation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Built on Uncompromising Principles
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              &ldquo;{companyData.philosophy}&rdquo; We take care of your technology layer completely so your leadership can focus on market expansion and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-700">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To simplify and elevate enterprise technology operations through proactive management, unbreakable cybersecurity, and cloud elasticity, allowing business leaders to innovate with confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the global benchmark for dependable, high-integrity technology partnership, recognized worldwide for zero-compromise security, flawless operational uptime, and client-centric agility.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Core Values</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Relentless vigilance, total transparency, accountability, continuous technical mastery, and alignment with measurable commercial success for every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Modern Architectural Foundations [DARK] */}
      <section className="py-24 bg-[#050814] text-white border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
              Enterprise Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Engineered For The Modern Era
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              Created without legacy baggage or obsolete tech stacks. Every tier of Orbytes is architected with modern cloud-native frameworks, active telemetry, and guaranteed SLAs.
            </p>
          </div>

          {/* Interactive Foundations Visual */}
          <ModernFoundationsVisual />

          {/* 4 Foundational Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.foundationalPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#081024] p-6 md:p-8 space-y-4 hover:border-cyan-500/40 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    Pillar 0{idx + 1}
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300">
                    {pillar.tagline}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-slate-300">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 10 Principles of Corporate Governance & Data Privacy [LIGHT] */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Trust & Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              10 Principles of Governance & Data Privacy
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our enterprise commitment to data confidentiality, fiduciary stewardship, and continuous compliance across all customer systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {companyData.governancePrinciples.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3 hover:border-cyan-500/50 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold font-mono text-cyan-600">
                    {item.number}
                  </span>
                  <Lock className="h-4 w-4 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Global Facilities & Operations Centers [LIGHT / SLATE] */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Global Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Our Operations & Delivery Hubs
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Strategically positioned across India and North America to support cross-border operations and 24/7 follow-the-sun technical continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyData.offices.map((office, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={office.imageUrl}
                      alt={`${office.city} Office`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      {office.isHeadquarter ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-900 bg-cyan-100/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-300 shadow-sm">
                          Global Headquarters
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                          Operations Hub
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-cyan-600" />
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        {office.city}, {office.country}
                      </h3>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-600">
                      <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    {office.phone && (
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-cyan-600 font-medium transition-colors pt-1"
                      >
                        <Phone className="h-3.5 w-3.5 text-cyan-600 shrink-0" />
                        <span>{office.phone}</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <span className="text-[11px] font-medium text-cyan-700 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    Verified Facility
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client Testimonials [LIGHT] */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              What Enterprise Leaders Say
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Real feedback from operations executives, managing partners, and technology directors partnering with us for proactive IT and cybersecurity excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-600">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;Partnering with the team has transformed our IT infrastructure completely. Their comprehensive IT management services have streamlined our operations, improved plant efficiency, and provided us with reliable technology solutions that grow with our business. Their proactive approach and expert support have made a significant difference in our daily operations.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900">Alex M.</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">VP of Operations, Manufacturing Firm</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;As a law firm handling complex client matters, efficient IT systems and strict confidentiality are crucial. The team has provided us with seamless technology solutions that enhance our productivity. Their managed IT services ensure our systems are always optimized, allowing us to focus on serving our clients effectively.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900">Jessica K.</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Managing Partner, Commercial Law Firm</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;Our e-commerce business demands reliable and efficient IT systems. The team delivers exactly that. Their comprehensive IT management ensures our operations run smoothly 24/7. Their solutions have significantly improved our system reliability and business efficiency during peak seasonal flash sales.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900">Taylor R.</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Operations Director, Online Retailer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Leadership & Partners Preview [LIGHT] */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Leadership Card */}
            <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:border-cyan-500/40 transition-all hover:shadow-xl group">
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                    The Minds Behind Orbytes
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {leadershipData.length} Executive Leaders
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Meet Our Leadership Team
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Dedicated executive leaders directing enterprise delivery, cybersecurity research, and international operations across India, North America, and Europe.
                </p>

                {/* Thumbnail Avatars of Real Leadership */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex -space-x-3 overflow-hidden">
                    {leadershipData.slice(0, 5).map((l, i) => (
                      <div
                        key={i}
                        className="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden bg-slate-200 shadow-sm"
                      >
                        {l.image ? (
                          <img
                            src={l.image}
                            alt={l.name}
                            className="h-full w-full object-cover object-top"
                          />
                        ) : (
                          <div className={`h-full w-full bg-gradient-to-br ${l.gradient} flex items-center justify-center text-white font-bold text-xs`}>
                            {l.initials}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-600">
                    +3 more executives
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/about/leadership"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
                  >
                    <span>View Executive Profiles</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Partners Card */}
            <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:border-cyan-500/40 transition-all hover:shadow-xl group">
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                    Enterprise Alliances
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {partnersData.length} Verified Partners
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Strategic Technology Partners
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Certified alliances with premier cloud and data center providers ensuring resilient infrastructure and high performance.
                </p>

                {/* Partner Logo Badges Preview */}
                <div className="grid grid-cols-5 gap-2 pt-2">
                  {partnersData.map((p, i) => (
                    <div
                      key={i}
                      className="h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2 hover:border-cyan-500/40 transition-colors"
                      title={p.name}
                    >
                      {p.imageUrl ? (
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="text-[10px] font-bold text-slate-700 truncate">
                          {p.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/about/partners"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
                  >
                    <span>Explore Partner Ecosystem</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
