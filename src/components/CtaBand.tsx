import { Link } from "@/lib/navigation";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[#071f3b]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,31,59,1)_0%,rgba(10,51,88,1)_55%,rgba(0,129,137,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,166,166,0.22),transparent_32%)]" />
      <div className="relative container-x py-14 md:py-20 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center text-white">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold">Ready to grow with evidence?</h3>
          <p className="mt-3 text-white/85 max-w-xl">
            Tell us about your goals. We will respond within one business day with a sharp,
            practical proposal.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow-lg shadow-accent/20 hover:bg-white hover:text-secondary transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            About UMP
          </Link>
        </div>
      </div>
    </section>
  );
}
