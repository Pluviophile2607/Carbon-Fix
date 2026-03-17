import { Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Grain, Reveal, Marquee, SiteFooter } from "../shared.jsx";

function Hero() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      background: "linear-gradient(175deg, #0F2A0C 0%, #1B3B18 35%, #2D5A27 70%, #3E7A35 100%)",
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end",
      padding: "0 var(--sp) clamp(3.5rem, 8vw, 6rem)",
    }}>
      <Grain op={0.045} />
      <div style={{ position: "absolute", top: "10%", right: "-10%", width: "clamp(300px, 45vw, 700px)", height: "clamp(300px, 45vw, 700px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", top: "35%", right: "15%", width: "clamp(200px, 30vw, 450px)", height: "clamp(200px, 30vw, 450px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(134, 239, 172, 0.1) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(40px)" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "clamp(250px, 40vw, 600px)", height: "clamp(250px, 40vw, 600px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(80px)" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 50, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "clamp(18px, 3vw, 28px)" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80" }} />
          <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 600, color: "rgba(255,255,255,0.65)", letterSpacing: "0.08em", textTransform: "uppercase" }}>5 Pilots Active in Maharashtra</span>
        </div>

        <h1 style={{ fontFamily: "var(--fd)", fontSize: "var(--fmg)", fontWeight: 400, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "14ch" }}>
          Local Impact.{" "}
          <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>Honest</em>{" "}
          Compensation.
        </h1>

        <p style={{ fontFamily: "var(--fb)", fontSize: "var(--fbd)", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "48ch", marginTop: "clamp(14px, 2vw, 22px)", fontWeight: 400 }}>
          CarbonFix is the ZED Foundation's evidence-based platform for verifiable, locally-driven carbon compensation. Every tree geotagged. Every number conservative. Every claim auditable.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: "clamp(22px, 3vw, 34px)" }}>
          <Link to="/projects" style={{
            fontFamily: "var(--fb)", fontSize: "var(--fsm)", fontWeight: 600,
            color: "#1B3B18", background: "#fff",
            padding: "13px 26px", borderRadius: 11, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "all 0.25s", boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}>Explore Projects <ArrowRight size={15} /></Link>
          <Link to="/framework" style={{
            fontFamily: "var(--fb)", fontSize: "var(--fsm)", fontWeight: 500,
            color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "13px 26px", borderRadius: 11, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.25s",
          }}>See How It Works</Link>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px, 3vw, 32px)", marginTop: "clamp(32px, 5vw, 52px)", paddingTop: "clamp(18px, 3vw, 26px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {[["100%", "Evidence-Based"], ["\u221222%", "Conservative Math"], ["5", "Active Pilots"], ["0", "Inflated Claims"]].map(function(item) {
            return (
              <div key={item[1]} style={{ minWidth: 85 }}>
                <span style={{ fontFamily: "var(--fd)", fontSize: "var(--fh3)", fontWeight: 500, color: "#fff", letterSpacing: "-0.02em" }}>{item[0]}</span>
                <span style={{ display: "block", fontFamily: "var(--fb)", fontSize: "var(--flb)", color: "rgba(255,255,255,0.35)", fontWeight: 500, marginTop: 2 }}>{item[1]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ padding: "var(--ss) var(--sp)", background: "#FAF9F6", position: "relative" }}>
      <Grain op={0.02} />
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <Reveal>
          <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2D5A27" }}>Join the Movement</span>
          <h2 style={{ fontFamily: "var(--fd)", fontSize: "var(--fhr)", fontWeight: 400, color: "#1A1A18", lineHeight: 1.08, marginTop: 12, letterSpacing: "-0.03em" }}>
            Plant with proof.<br /><span style={{ color: "#2D5A27", fontWeight: 500 }}>Not promises.</span>
          </h2>
          <p style={{ fontFamily: "var(--fb)", fontSize: "var(--fbd)", color: "#52524E", lineHeight: 1.65, marginTop: 14, maxWidth: 460, margin: "14px auto 0" }}>
            Whether you are a student, institution, or corporate partner, start your verified carbon compensation journey today.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 30 }}>
            <a href="#" style={{
              fontFamily: "var(--fb)", fontSize: "var(--fsm)", fontWeight: 600, color: "#fff", background: "#2D5A27",
              padding: "14px 30px", borderRadius: 11, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
              transition: "all 0.25s", boxShadow: "0 4px 16px rgba(45,90,39,0.2)",
            }}>Get Started <ArrowRight size={15} /></a>
            <a href="#" style={{
              fontFamily: "var(--fb)", fontSize: "var(--fsm)", fontWeight: 500, color: "#52524E", background: "#fff",
              border: "1px solid #E6E4DF", padding: "14px 30px", borderRadius: 11, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.25s",
            }}>Read Documentation</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <CTA />
      <SiteFooter />
    </div>
  );
}
