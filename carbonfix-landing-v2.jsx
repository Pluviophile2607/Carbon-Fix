import { useState, useEffect, useRef } from "react";
import {
  Leaf, TreePine, Mountain, GraduationCap, Waves, ArrowRight,
  Search, Upload, Shield, Check, ChevronRight, Menu, X,
  MapPin, Users, Globe, Ban, Sprout, Activity, Award,
  TrendingUp, Zap, Building2, FileCheck, Eye
} from "lucide-react";

/* ======= SCROLL REVEAL ======= */
function useReveal(th) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); ob.unobserve(el); } },
      { threshold: th || 0.12 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [th]);
  return [ref, v];
}

function Reveal({ children, delay, style }) {
  const [ref, vis] = useReveal(0.1);
  const d = delay || 0;
  return (
    <div ref={ref} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1) " + d + "ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) " + d + "ms",
    }}>
      {children}
    </div>
  );
}

/* ======= GRAIN ======= */
function Grain({ op }) {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
      opacity: op || 0.03, mixBlendMode: "multiply",
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      backgroundSize: "100px 100px",
    }} />
  );
}

/* ======= IMPACT RING ======= */
function Ring({ score, size, color }) {
  const s = size || 64;
  const r = (s / 2) - 6;
  const c = 2 * Math.PI * r;
  const off = c - (score / 100) * c;
  return (
    <div style={{ position: "relative", width: s, height: s, flexShrink: 0 }}>
      <svg width={s} height={s} viewBox={"0 0 " + s + " " + s} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={s/2} cy={s/2} r={r} fill="none" stroke="#E6E4DF" strokeWidth="3" />
        <circle cx={s/2} cy={s/2} r={r} fill="none" stroke={color} strokeWidth="3"
          strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.16,1,0.3,1)" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "var(--fd)", fontSize: Math.round(s * 0.3), fontWeight: 500, color: color }}>{score}</span>
        <span style={{ fontFamily: "var(--fb)", fontSize: 7, fontWeight: 600, color: "#9C9C96", letterSpacing: "0.06em", textTransform: "uppercase" }}>Score</span>
      </div>
    </div>
  );
}

/* ======= HEADER ======= */
function Header() {
  const [sc, setSc] = useState(false);
  const [mo, setMo] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Projects", "Framework", "About Us"];

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: sc ? "12px var(--sp)" : "18px var(--sp)",
        background: sc ? "rgba(250,249,246,0.92)" : "transparent",
        backdropFilter: sc ? "blur(20px)" : "none",
        WebkitBackdropFilter: sc ? "blur(20px)" : "none",
        borderBottom: sc ? "1px solid #E6E4DF" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: sc ? "#2D5A27" : "rgba(255,255,255,0.1)",
              border: sc ? "none" : "1px solid rgba(255,255,255,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.4s",
            }}>
              <Leaf size={16} color="#fff" strokeWidth={2} />
            </div>
            <div>
              <span style={{ fontFamily: "var(--fd)", fontSize: "var(--fbd)", fontWeight: 600, color: sc ? "#1A1A18" : "#fff", transition: "color 0.4s", letterSpacing: "-0.01em" }}>CarbonFix</span>
              <span style={{ display: "block", fontFamily: "var(--fb)", fontSize: 9, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: sc ? "#9C9C96" : "rgba(255,255,255,0.45)", transition: "color 0.4s", marginTop: -1 }}>ZED Foundation</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desk-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {links.map(function(l) {
              return (
                <a key={l} href={"#" + l.toLowerCase().replace(/\s/g, "")}
                  style={{ fontFamily: "var(--fb)", fontSize: "var(--fmi)", fontWeight: 500, color: sc ? "#52524E" : "rgba(255,255,255,0.65)", textDecoration: "none", padding: "8px 16px", borderRadius: 8, transition: "all 0.2s" }}>
                  {l}
                </a>
              );
            })}
            <a href="#login" style={{
              fontFamily: "var(--fb)", fontSize: "var(--fmi)", fontWeight: 600,
              color: "#fff", background: sc ? "#2D5A27" : "rgba(255,255,255,0.1)",
              border: sc ? "none" : "1px solid rgba(255,255,255,0.18)",
              textDecoration: "none", padding: "9px 22px", borderRadius: 9, transition: "all 0.3s", marginLeft: 8,
            }}>Login</a>
          </nav>

          <button className="mob-toggle" onClick={function() { setMo(!mo); }}
            style={{ display: "none", width: 42, height: 42, borderRadius: "50%", border: "none", background: sc ? "rgba(45,90,39,0.08)" : "rgba(255,255,255,0.12)", cursor: "pointer", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}>
            {mo ? <X size={20} color={sc ? "#1A1A18" : "#fff"} /> : <Menu size={20} color={sc ? "#1A1A18" : "#fff"} />}
          </button>
        </div>
      </header>

      {mo && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(15,42,12,0.97)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <button onClick={function() { setMo(false); }} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer" }}>
            <X size={24} color="rgba(255,255,255,0.7)" />
          </button>
          {links.concat(["Login"]).map(function(l) {
            return (
              <a key={l} href={"#" + l.toLowerCase().replace(/\s/g, "")}
                onClick={function() { setMo(false); }}
                style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 400, color: "#fff", textDecoration: "none", padding: "12px 0" }}>
                {l}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}

/* ======= HERO ======= */
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

      <div style={{ position: "absolute", top: "45%", right: "10%", transform: "translateY(-50%)", zIndex: 1, pointerEvents: "none", display: "none" }} className="hero-graphic">
        <div style={{ position: "relative" }}>
          <TreePine size="clamp(240px, 32vw, 380px)" color="rgba(74, 222, 128, 0.6)" strokeWidth={1} style={{ filter: "drop-shadow(0 0 40px rgba(74, 222, 128, 0.5))", opacity: 0.8 }} />
          <TreePine size="clamp(160px, 22vw, 260px)" color="rgba(16, 185, 129, 0.5)" strokeWidth={1.5} style={{ position: "absolute", bottom: "-10%", left: "-25%", filter: "blur(1px) drop-shadow(0 0 20px rgba(16, 185, 129, 0.4))", opacity: 0.7 }} />
          <div style={{ position: "absolute", top: "10%", right: "-15%", animation: "float 6s ease-in-out infinite" }}>
            <Leaf size={70} color="rgba(134, 239, 172, 0.8)" strokeWidth={1} style={{ filter: "drop-shadow(0 0 15px rgba(134, 239, 172, 0.4))", transform: "rotate(45deg)" }} />
          </div>
        </div>
      </div>

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
          <a href="#projects" style={{
            fontFamily: "var(--fb)", fontSize: "var(--fsm)", fontWeight: 600,
            color: "#1B3B18", background: "#fff",
            padding: "13px 26px", borderRadius: 11, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "all 0.25s", boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}>Explore Projects <ArrowRight size={15} /></a>
          <a href="#framework" style={{
            fontFamily: "var(--fb)", fontSize: "var(--fsm)", fontWeight: 500,
            color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "13px 26px", borderRadius: 11, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.25s",
          }}>See How It Works</a>
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

/* ======= MARQUEE ======= */
function Marquee() {
  var txt = "\u201CHonesty over Hype\u201D \u2014 ZED Foundation  \u00B7  \u201CClaim less, deliver more\u201D \u2014 ZCCP Ethics  \u00B7  \u201CEvery tree geotagged\u201D \u2014 CarbonFix  \u00B7  ";
  return (
    <div style={{ overflow: "hidden", padding: "18px 0", borderTop: "1px solid #E6E4DF", borderBottom: "1px solid #E6E4DF", background: "#fff" }}>
      <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
        <span style={{ fontFamily: "var(--fd)", fontSize: "var(--fsm)", fontWeight: 400, fontStyle: "italic", color: "#9C9C96", whiteSpace: "nowrap", paddingRight: 4 }}>{txt}{txt}</span>
      </div>
    </div>
  );
}

/* ======= THREE MODELS ======= */
function Pillars() {
  var models = [
    { icon: GraduationCap, title: "School / College", tag: "Campus Model", color: "#2563EB", bg: "#EFF6FF",
      desc: "Transforming campuses into verified green zones. Students lead plantation drives integrated with coursework, building sustainability culture from the ground up.",
      s1: ["10\u2013500", "trees/campus"], s2: ["6\u201312", "months"], s3: ["Student-led", "maintenance"] },
    { icon: Mountain, title: "Trail / Fort", tag: "Restoration Model", color: "#C2850C", bg: "#FEF7E6",
      desc: "Restoring ecological balance along Western Ghats trekking routes and fort trails. Native species, seasonal planting, and community-driven eco-tourism income.",
      s1: ["500\u20135K", "trees/trail"], s2: ["12\u201324", "months"], s3: ["Community", "income model"] },
    { icon: TreePine, title: "Large-Scale Forest", tag: "Reforestation", color: "#2D5A27", bg: "#E8F5E4",
      desc: "Systematic reforestation of degraded forest land with native seed banks, plot-based carbon sampling, and 5\u201310 year biomass monitoring cycles.",
      s1: ["5,000+", "trees/zone"], s2: ["24\u201360", "months"], s3: ["Plot-based", "sampling"] },
  ];

  return (
    <section id="projects" style={{ padding: "var(--ss) var(--sp)", position: "relative", background: "#FAF9F6" }}>
      <Grain op={0.02} />
      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal>
          <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2D5A27" }}>Three Models</span>
          <h2 style={{ fontFamily: "var(--fd)", fontSize: "var(--fh1)", fontWeight: 400, color: "#1A1A18", lineHeight: 1.15, marginTop: 8, letterSpacing: "-0.02em", maxWidth: "22ch" }}>
            Each ecosystem demands <em>its own</em> approach.
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 310px), 1fr))", gap: "clamp(14px, 2vw, 20px)", marginTop: "clamp(28px, 4vw, 44px)" }}>
          {models.map(function(m, i) {
            var Icon = m.icon;
            var stats = [m.s1, m.s2, m.s3];
            return (
              <Reveal key={m.title} delay={i * 100} style={{ height: "100%" }}>
                <div className="pillar-card" style={{
                  background: "#fff", border: "1px solid rgba(0,0,0,0.04)", borderRadius: "var(--rd)",
                  padding: "clamp(22px, 3vw, 34px)", position: "relative", overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", cursor: "default", height: "100%",
                  display: "flex", flexDirection: "column", boxShadow: "0 4px 24px rgba(0,0,0,0.02)"
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${m.color}88, ${m.color})` }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(14px, 2vw, 22px)" }}>
                    <div style={{ width: 46, height: 46, borderRadius: 13, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={21} color={m.color} strokeWidth={1.8} />
                    </div>
                    <div>
                      <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 700, color: m.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>{m.tag}</span>
                      <h3 style={{ fontFamily: "var(--fd)", fontSize: "var(--fh3)", fontWeight: 500, color: "#1A1A18", marginTop: 2 }}>{m.title}</h3>
                    </div>
                  </div>
                  <p style={{ fontFamily: "var(--fb)", fontSize: "var(--fsm)", color: "#52524E", lineHeight: 1.7, marginBottom: "clamp(18px, 2.5vw, 26px)", flex: 1 }}>{m.desc}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, paddingTop: "clamp(14px, 2vw, 18px)", borderTop: "1px solid #E6E4DF" }}>
                    {stats.map(function(st) {
                      return (
                        <div key={st[1]}>
                          <span style={{ fontFamily: "var(--fd)", fontSize: "var(--fbd)", fontWeight: 500, color: "#1A1A18" }}>{st[0]}</span>
                          <span style={{ display: "block", fontFamily: "var(--fb)", fontSize: 9, color: "#9C9C96", fontWeight: 500, marginTop: 2 }}>{st[1]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ======= WORKFLOW ======= */
function Workflow() {
  var steps = [
    { icon: Users, title: "Digital Onboarding", desc: "Volunteers register, verify identity, select a project, and complete field-safety training through the CarbonFix portal.", n: "01" },
    { icon: Sprout, title: "On-Ground Action", desc: "Physical plantation, trail restoration, or reforestation under field coordinator supervision with GPS-tagged sites.", n: "02" },
    { icon: Upload, title: "Evidence Upload", desc: "Geotagged photos, timestamped video, and sapling ID tags uploaded. Metadata auto-extracted for verification.", n: "03" },
    { icon: Shield, title: "ZED Validation", desc: "AI-driven conservative carbon calculation + independent third-party audit. Only verified estimates become certified.", n: "04" },
  ];

  return (
    <section id="framework" style={{ padding: "var(--ss) var(--sp)", background: "#F5F2EC", position: "relative", overflow: "hidden" }}>
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

/* ======= FEATURED PILOTS ======= */
function FeaturedPilots() {
  var pilots = [
    { title: "Yeoor Hills Restoration", model: "Trail Model", loc: "Thane, Maharashtra", icon: Mountain, color: "#059669", trees: "4,500", area: "12 hectares", impact: 87, ngo: "Sahyadri Nisarga Mitra",
      desc: "Restoring native biodiversity corridors across degraded trail networks in the Yeoor Hills range. Community-led monitoring with seasonal planting aligned to monsoon cycles." },
    { title: "Parsik Hill Reforestation", model: "Forest Model", loc: "Navi Mumbai, MH", icon: TreePine, color: "#2D5A27", trees: "15,000", area: "28 hectares", impact: 94, ngo: "Hariyali Earth Trust",
      desc: "Large-scale reforestation of fire-damaged slopes using native species seed banks. Plot-based carbon sampling with annual biomass surveys over a 10-year cycle." },
  ];

  return (
    <section style={{ padding: "var(--ss) var(--sp)", background: "#FAF9F6", position: "relative" }}>
      <Grain op={0.02} />
      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal>
          <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2D5A27" }}>Featured Pilots</span>
          <h2 style={{ fontFamily: "var(--fd)", fontSize: "var(--fh1)", fontWeight: 400, color: "#1A1A18", lineHeight: 1.15, marginTop: 8, letterSpacing: "-0.02em" }}>
            Where the work <span style={{ color: "#2D5A27", fontWeight: 500 }}>actually</span> happens.
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "clamp(14px, 2vw, 22px)", marginTop: "clamp(28px, 4vw, 44px)" }}>
          {pilots.map(function(p, i) {
            var Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 120}>
                <div className="pilot-card" style={{
                  background: "#fff", border: "1px solid rgba(0,0,0,0.04)", borderRadius: "var(--rd)",
                  overflow: "hidden", transition: "all 0.35s", boxShadow: "0 8px 32px rgba(0,0,0,0.03)",
                }}>
                  <div style={{ height: 4, background: `linear-gradient(90deg, ${p.color}88, ${p.color})` }} />
                  <div style={{ padding: "clamp(22px, 3vw, 30px)" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14, marginBottom: 18 }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                          <div style={{ width: 38, height: 38, borderRadius: 11, background: p.color + "0C", border: "1px solid " + p.color + "18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Icon size={17} color={p.color} strokeWidth={1.8} />
                          </div>
                          <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 700, color: p.color, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 5, background: p.color + "0A" }}>{p.model}</span>
                        </div>
                        <h3 style={{ fontFamily: "var(--fd)", fontSize: "var(--fh2)", fontWeight: 500, color: "#1A1A18", lineHeight: 1.2 }}>{p.title}</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 5 }}>
                          <MapPin size={11} color="#9C9C96" />
                          <span style={{ fontFamily: "var(--fb)", fontSize: "var(--fmi)", color: "#9C9C96" }}>{p.loc}</span>
                        </div>
                      </div>
                      <Ring score={p.impact} size={64} color={p.color} />
                    </div>

                    <p style={{ fontFamily: "var(--fb)", fontSize: "var(--fsm)", color: "#52524E", lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, paddingTop: 16, borderTop: "1px solid #E6E4DF" }}>
                      {[[TreePine, p.trees + " trees", "Target"], [Globe, p.area, "Coverage"], [Shield, p.ngo, "NGO Partner"]].map(function(item) {
                        var Ic = item[0];
                        return (
                          <div key={item[2]}>
                            <Ic size={12} color="#9C9C96" style={{ marginBottom: 3 }} />
                            <span style={{ display: "block", fontFamily: "var(--fb)", fontSize: "var(--fmi)", fontWeight: 600, color: "#1A1A18" }}>{item[1]}</span>
                            <span style={{ fontFamily: "var(--fb)", fontSize: 9, color: "#9C9C96", fontWeight: 500 }}>{item[2]}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ======= ETHICS ("What We Are Not") ======= */
function Ethics() {
  var nots = [
    { title: "Not a Trading Platform", desc: "We don't speculate on carbon prices. Credits are compensation for real work, not commodities for financial markets." },
    { title: "Not International Certification", desc: "We operate locally in Maharashtra with ground-level verification. No distant claims, no unverifiable offsets." },
    { title: "Not Instant Net-Zero", desc: "Trees take years to sequester meaningful carbon. We don't promise overnight results or magic numbers." },
  ];

  return (
    <section id="aboutus" style={{ padding: "var(--ss) var(--sp)", background: "#0F2A0C", position: "relative", overflow: "hidden" }}>
      <Grain op={0.06} />
      <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(60px)" }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal>
          <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Transparency</span>
          <h2 style={{ fontFamily: "var(--fd)", fontSize: "var(--fh1)", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginTop: 8, letterSpacing: "-0.02em", maxWidth: "20ch" }}>
            What we are <span style={{ color: "#EF4444", fontWeight: 500 }}>not.</span>
          </h2>
          <p style={{ fontFamily: "var(--fb)", fontSize: "var(--fbd)", color: "rgba(255,255,255,0.38)", lineHeight: 1.65, marginTop: 10, maxWidth: "50ch" }}>
            Honesty starts with clarity about our boundaries. Credibility comes from what you refuse to claim.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px), 1fr))", gap: "clamp(14px, 2vw, 20px)", marginTop: "clamp(32px, 5vw, 48px)" }}>
          {nots.map(function(n, i) {
            return (
              <Reveal key={n.title} delay={i * 100}>
                <div className="ethics-card" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "var(--rd)", padding: "clamp(22px, 3vw, 30px)", transition: "all 0.3s", height: "100%",
                  backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <Ban size={17} color="#EF4444" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: "var(--fd)", fontSize: "var(--fh3)", fontWeight: 500, color: "#fff", marginBottom: 8 }}>{n.title}</h3>
                  <p style={{ fontFamily: "var(--fb)", fontSize: "var(--fmi)", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>{n.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={300}>
          <div style={{ marginTop: "clamp(36px, 6vw, 60px)", paddingTop: "clamp(22px, 3vw, 32px)", borderTop: "1px solid rgba(255,255,255,0.06)", maxWidth: 520 }}>
            <p style={{ fontFamily: "var(--fd)", fontSize: "var(--fh3)", fontWeight: 400, fontStyle: "italic", color: "rgba(255,255,255,0.55)", lineHeight: 1.55 }}>
              {"\u201CWe would rather claim less and deliver more than inflate numbers to look impressive.\u201D"}
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 600, color: "rgba(255,255,255,0.25)", marginTop: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {"\u2014 ZCCP Core Principle"}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ======= CTA ======= */
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

/* ======= FOOTER ======= */
function SiteFooter() {
  var cols = [
    { t: "Platform", l: ["Dashboard", "Marketplace", "Evidence Vault", "Calculator"] },
    { t: "Program", l: ["School Model", "Trail Model", "Forest Model", "Pilots"] },
    { t: "About", l: ["ZED Foundation", "Methodology", "Ethics", "Contact"] },
  ];

  return (
    <footer style={{ padding: "clamp(28px, 4vw, 44px) var(--sp) clamp(20px, 3vw, 28px)", borderTop: "1px solid #E6E4DF", background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "clamp(20px, 3vw, 36px)" }}>
          <div style={{ maxWidth: 260 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "#2D5A27", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Leaf size={14} color="#fff" />
              </div>
              <span style={{ fontFamily: "var(--fd)", fontSize: "var(--fbd)", fontWeight: 600, color: "#1A1A18" }}>CarbonFix</span>
            </div>
            <p style={{ fontFamily: "var(--fb)", fontSize: "var(--fmi)", color: "#9C9C96", lineHeight: 1.6 }}>
              Evidence-based carbon compensation by the ZED Foundation. Local. Measurable. Honest.
            </p>
          </div>
          {cols.map(function(c) {
            return (
              <div key={c.t}>
                <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9C9C96" }}>{c.t}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 10 }}>
                  {c.l.map(function(lnk) {
                    return <a key={lnk} href="#" style={{ fontFamily: "var(--fb)", fontSize: "var(--fmi)", color: "#52524E", textDecoration: "none" }}>{lnk}</a>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10, marginTop: "clamp(24px, 3vw, 36px)", paddingTop: "clamp(14px, 2vw, 20px)", borderTop: "1px solid #E6E4DF" }}>
          <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", color: "#9C9C96" }}>{"\u00A9 2026 ZED Foundation. All rights reserved."}</span>
          <span style={{ fontFamily: "var(--fb)", fontSize: "var(--flb)", color: "#9C9C96" }}>Founder: Tushar Gangurde {"\u00B7"} Lead: Prithvi Singh</span>
        </div>
      </div>
    </footer>
  );
}

/* ======= MAIN APP ======= */
export default function CarbonFixLanding() {
  return (
    <div style={{ fontFamily: "var(--fb)", background: "#FAF9F6", overflow: "hidden" }}>
      <style>{[
        "@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Satoshi:wght@400;500;600;700&display=swap');",
        ":root{",
        "--fd:'Fraunces',Georgia,serif;",
        "--fb:'Satoshi',system-ui,sans-serif;",
        "--fmg:clamp(2.5rem, 6vw + 1rem, 4.5rem);",
        "--fhr:clamp(1.75rem, 4vw + 0.5rem, 3rem);",
        "--fh1:clamp(1.5rem, 3vw + 0.25rem, 2.5rem);",
        "--fh2:clamp(1.25rem, 2.5vw + 0.25rem, 2rem);",
        "--fh3:clamp(1rem, 1.5vw + 0.25rem, 1.25rem);",
        "--fbd:clamp(0.875rem, 1vw + 0.125rem, 1.0625rem);",
        "--fsm:clamp(0.8125rem, 0.9vw + 0.1rem, 0.9375rem);",
        "--fmi:clamp(0.6875rem, 0.8vw + 0.1rem, 0.8125rem);",
        "--flb:clamp(0.5625rem, 0.65vw + 0.1rem, 0.6875rem);",
        "--ss:clamp(4rem, 8vw, 7.5rem);",
        "--sp:clamp(1.25rem, 4vw, 6rem);",
        "--rd:clamp(0.75rem, 1.5vw, 1.25rem);",
        "}",
        "*{box-sizing:border-box;margin:0;padding:0;}",
        "html{scroll-behavior:smooth;}",
        "::selection{background:rgba(45,90,39,0.2);}",
        "::-webkit-scrollbar{width:4px;}",
        "::-webkit-scrollbar-track{background:transparent;}",
        "::-webkit-scrollbar-thumb{background:#E6E4DF;border-radius:2px;}",
        "@keyframes marquee-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}",
        "@keyframes float{0%{transform:translateY(0px)}50%{transform:translateY(-20px)}100%{transform:translateY(0px)}}",
        ".marquee-track{animation:marquee-scroll 35s linear infinite;}",
        ".pillar-card:hover{box-shadow:0 20px 48px rgba(0,0,0,0.07);transform:translateY(-5px);border-color:rgba(45,90,39,0.15)!important;}",
        ".step-card:hover{box-shadow:0 12px 32px rgba(45,90,39,0.06);border-color:#E8F5E4!important;}",
        ".pilot-card:hover{box-shadow:0 16px 44px rgba(0,0,0,0.06);transform:translateY(-3px);}",
        ".ethics-card:hover{background:rgba(255,255,255,0.06)!important;border-color:rgba(255,255,255,0.12)!important;}",
        "@media(min-width:1024px){.hero-graphic{display:flex!important;}}",
        "@media(max-width:768px){.desk-nav{display:none!important;}.mob-toggle{display:flex!important;}}",
      ].join("\n")}</style>

      <Header />
      <Hero />
      <Marquee />
      <Pillars />
      <Workflow />
      <FeaturedPilots />
      <Marquee />
      <Ethics />
      <CTA />
      <SiteFooter />
    </div>
  );
}
