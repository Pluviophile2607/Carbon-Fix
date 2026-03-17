import { Users, Sprout, Upload, Shield } from "lucide-react";
import { Grain, Reveal, Marquee, SiteFooter } from "../shared.jsx";

function Workflow() {
  var steps = [
    { icon: Users, title: "Digital Onboarding", desc: "Volunteers register, verify identity, select a project, and complete field-safety training through the CarbonFix portal.", n: "01" },
    { icon: Sprout, title: "On-Ground Action", desc: "Physical plantation, trail restoration, or reforestation under field coordinator supervision with GPS-tagged sites.", n: "02" },
    { icon: Upload, title: "Evidence Upload", desc: "Geotagged photos, timestamped video, and sapling ID tags uploaded. Metadata auto-extracted for verification.", n: "03" },
    { icon: Shield, title: "ZED Validation", desc: "AI-driven conservative carbon calculation + independent third-party audit. Only verified estimates become certified.", n: "04" },
  ];

  return (
    <section style={{ padding: "var(--ss) var(--sp)", background: "#F5F2EC", position: "relative", overflow: "hidden" }}>
      <Grain op={0.025} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.02, pointerEvents: "none", backgroundImage: "radial-gradient(circle, #2D5A27 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2D5A27" }}>How It Works</span>
            <h2 style={{ fontFamily: "var(--fd)", fontSize: "var(--fh1)", fontWeight: 400, color: "#1A1A18", lineHeight: 1.15, marginTop: 8, letterSpacing: "-0.02em" }}>
              From registration to <span style={{ color: "#2D5A27", fontWeight: 500 }}>verified</span> impact.
            </h2>
            <p style={{ fontFamily: "var(--fb)", fontSize: "var(--fsm)", color: "#52524E", lineHeight: 1.65, marginTop: 10 }}>Four transparent steps. Every data point auditable. No shortcuts.</p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 235px), 1fr))", gap: "clamp(14px, 2vw, 20px)", marginTop: "clamp(32px, 5vw, 52px)" }}>
          {steps.map(function(s, i) {
            var Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 120}>
                <div className="step-card" style={{
                  background: "#fff", border: "1px solid #E6E4DF", borderRadius: "var(--rd)",
                  padding: "clamp(22px, 3vw, 30px)", position: "relative", transition: "all 0.3s", height: "100%",
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(18px, 2.5vw, 26px)" }}>
                    <div style={{ width: 46, height: 46, borderRadius: 13, background: "rgba(45,90,39,0.07)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(45,90,39,0.05)" }}>
                      <Icon size={19} color="#2D5A27" strokeWidth={1.8} />
                    </div>
                    <span style={{ fontFamily: "var(--fd)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 200, color: "rgba(45,90,39,0.15)", lineHeight: 1, letterSpacing: "-0.04em" }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--fd)", fontSize: "var(--fh3)", fontWeight: 500, color: "#1A1A18", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--fb)", fontSize: "var(--fmi)", color: "#52524E", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Framework() {
  return (
    <div>
      <div style={{ paddingTop: "80px" }}>
        <Workflow />
        <Marquee />
      </div>
      <SiteFooter />
    </div>
  );
}
