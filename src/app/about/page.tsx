import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Target, Award, Users, Quote } from "lucide-react";
import { companyData } from "@/data/companyData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ChronoTimelineVisual } from "@/components/visuals/about/ChronoTimelineVisual";

export const metadata: Metadata = {
  title: "About Orbytes | Our Story & Technological Journey",
  description: "Learn about Orbytes Global Solutions, founded in 2020. Our journey, mission, values, and global presence across India and Canada.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Hero [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Founded in 2020</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Empowering Digital Transformation. Driving Enterprise Resilience.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Orbytes Global Solutions delivers comprehensive, enterprise-grade IT management, cybersecurity, and cloud solutions that turn technology into a core competitive advantage.
          </p>

          <div className="pt-6">
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl aspect-[21/9] max-w-4xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Orbytes enterprise technology operations and research center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030714] via-transparent to-transparent flex items-end p-6">
                <p className="text-xs text-cyan-300 font-medium">
                  Orbytes Global Operations & Technology Command Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission, Vision, Values [LIGHT] */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-700">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">Our Mission</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                To simplify and elevate enterprise technology operations through proactive management, unbreakable cybersecurity, and cloud elasticity, allowing business leaders to innovate with confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">Our Vision</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the global benchmark for dependable, high-integrity technology partnership, recognized worldwide for zero-compromise security, flawless operational uptime, and client-centric agility.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">Core Values</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Relentless vigilance, total transparency, accountability, continuous technical mastery, and alignment with measurable commercial success for every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Historical Milestones (2020 - 2025) with ChronoTimelineVisual [DARK] */}
      <section className="py-24 bg-[#050814] text-white border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              The Evolution of Orbytes
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              Since our inception in 2020, we have expanded our service offerings and global presence to support organizations across three continents.
            </p>
          </div>

          {/* Interactive Chrono-Scanner */}
          <ChronoTimelineVisual />

          {/* Vertical Sequential Milestone List */}
          <div className="relative border-l-2 border-cyan-500/40 ml-4 md:ml-32 space-y-10">
            {companyData.milestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Year Marker Badge */}
                <div className="absolute -left-[17px] top-1.5 h-8 w-8 rounded-full border-2 border-cyan-500 bg-slate-950 flex items-center justify-center text-cyan-300 shadow-md">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#081024] p-6 md:p-8 space-y-2 hover:border-cyan-500/40 transition-colors shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Testimonials [LIGHT] */}
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

      {/* 5. Quick Navigation into Leadership & Partners [LIGHT] */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:border-cyan-500/40 transition-all hover:shadow-xl group">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                  alt="Orbytes Executive Leadership Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                  The Minds Behind Our Success
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Meet Our Leadership Team
                </h3>
                <p className="text-sm text-slate-600">
                  Dedicated executive leaders directing enterprise delivery, cybersecurity research, and international operations.
                </p>
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

            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:border-cyan-500/40 transition-all hover:shadow-xl group">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                  alt="Global Technology Cloud Partnerships"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                  Enterprise Alliances
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Strategic Technology Partners
                </h3>
                <p className="text-sm text-slate-600">
                  Premier verified partnerships with Microsoft, AWS, GoDaddy, Hostinger, and NXT GEN.
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/about/partners"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
                  >
                    <span>Explore Ecosystem</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
