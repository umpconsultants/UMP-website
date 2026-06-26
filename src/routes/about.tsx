import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  Compass,
  Eye,
  Heart,
  Megaphone,
  MessagesSquare,
  Pill,
  Target,
  UsersRound,
} from "lucide-react";
import { PageBanner, Section, SectionTitle } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { COMPANY } from "@/lib/site-data";
import { Link } from "@/lib/navigation";

export function AboutPage() {
  return (
    <>
      <PageBanner
        title="About UMP Consultants"
        subtitle="Towards Growth - strategic consulting and business solutions for stronger brands, meaningful market presence and sustainable growth."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
        crumbs={[{ label: "About Us" }]}
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Who we are"
              title="Strategic consulting built around insight, presence and growth."
            />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {COMPANY.name} is a strategic consulting and business solutions firm dedicated to
              helping organizations build stronger brands, create meaningful market presence, and
              achieve sustainable growth. We partner with clients across the healthcare and
              pharmaceutical, construction, and social development sectors, delivering customized
              solutions that combine market intelligence, innovative marketing, and impactful
              stakeholder engagement.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With expertise spanning market research, marketing strategy, brand promotions, event
              management, business development, and communication programs, we help organizations
              understand their markets, connect with their audiences, and maximize the effectiveness
              of their initiatives.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              By working closely with our clients, we design and execute tailored programs that
              support product launches, awareness campaigns, professional conferences, promotional
              activities, community outreach initiatives, and growth strategies.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="UMP team"
              className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-accent font-semibold tracking-wider uppercase text-xs text-center">
            Our core services
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-secondary leading-tight">
            Focused support across strategy, promotion and engagement
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg text-center">
            Every program is shaped around the client's market, audience, sector and growth goals.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: BarChart3,
              title: "Market Research & Business Intelligence",
            },
            {
              icon: Target,
              title: "Marketing & Brand Strategy",
            },
            {
              icon: Megaphone,
              title: "Promotional Campaigns & Activations",
            },
            {
              icon: CalendarDays,
              title: "Event Planning & Management",
            },
            {
              icon: Pill,
              title: "Healthcare & Pharma Marketing Support",
            },
            {
              icon: Building2,
              title: "Construction Sector Market Development",
            },
            {
              icon: UsersRound,
              title: "Social Impact & Community Engagement Programs",
            },
            {
              icon: MessagesSquare,
              title: "Corporate Communications & Stakeholder Outreach",
            },
          ].map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <div className="group card-soft h-full overflow-hidden p-6 hover:[&]:card-soft-hover">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <service.icon size={22} />
                  </div>
                  <CheckCircle2 className="text-accent" size={20} />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-secondary">
                  {service.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <p
            className="text-accent font-semibold tracking-wider uppercase text-xs"
            style={{ textAlign: "center" }}
          >
            Foundations
          </p>
          <h2
            className="mt-2 text-2xl md:text-4xl font-bold text-secondary"
            style={{ textAlign: "center" }}
          >
            Mission, vision & values
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              t: "Mission",
              d: "To empower organizations with actionable insights, strategic solutions, and impactful engagement programs that drive growth, strengthen brands, and create lasting value.",
            },
            {
              icon: Eye,
              t: "Vision",
              d: "To be a trusted consulting partner recognized for delivering innovative, research-driven, and result-oriented solutions across diverse industries.",
            },
            {
              icon: Heart,
              t: "Values",
              d: "Excellence, innovation, accountability, confidentiality, and a long-term commitment to measurable client success.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-soft p-7 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                  <c.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-secondary">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=1200&q=80"
              alt="Approach"
              className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle
              eyebrow="Our approach"
              title="Customized programs for real sector outcomes."
            />
            <ul className="mt-6 space-y-4">
              {[
                "Every engagement starts with each organization's unique goals and challenges.",
                "We combine market intelligence, industry knowledge and stakeholder insight.",
                "We connect research, brand strategy, promotion and communication as one workflow.",
                "We focus on measurable results across launches, campaigns, outreach and growth programs.",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <Compass className="text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors"
            >
              Start a conversation <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-[#061b35] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,27,53,1)_0%,rgba(9,41,75,1)_52%,rgba(0,94,112,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,166,166,0.20),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(30,91,255,0.16),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p
              className="text-accent font-semibold uppercase tracking-widest text-xs"
              style={{ textAlign: "left" }}
            >
              Towards Growth
            </p>
            <h2
              className="mt-4 max-w-3xl text-3xl md:text-5xl font-bold leading-tight"
              style={{ textAlign: "left" }}
            >
              A trusted partner for excellence, innovation and long-term success.
            </h2>
            <p
              className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed"
              style={{ textAlign: "left" }}
            >
              Whether supporting a healthcare organization in expanding its reach, assisting a
              construction company in strengthening its market position, or helping social sector
              organizations engage stakeholders more effectively, UMP Consultants stays focused on
              practical impact.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-white hover:text-secondary"
            >
              Discuss your goals <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              "Healthcare & pharma growth support",
              "Construction market development",
              "Social impact stakeholder outreach",
            ].map((point, i) => (
              <Reveal key={point} delay={i * 80}>
                <div className="rounded-xl border border-white/12 bg-white/10 p-5 shadow-xl shadow-black/10 backdrop-blur">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-accent text-white">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-left font-semibold leading-snug text-white">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
