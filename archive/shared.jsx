import { useState, useEffect, useRef } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

/* ======= SCROLL REVEAL ======= */
export function useReveal(th) {
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

export function Reveal({ children, delay, style }) {
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
export function Grain({ op }) {
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
export function Ring({ score, size, color }) {
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
export function Header() {
  const [sc, setSc] = useState(false);
  const [mo, setMo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setMo(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { label: "Projects", to: "/projects" },
    { label: "Framework", to: "/framework" },
    { label: "About Us", to: "/about" },
  ];

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
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
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
          </Link>

          {/* Desktop Nav */}
          <nav className="desk-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {links.map(function(l) {
              const active = location.pathname === l.to;
              return (
                <Link key={l.label} to={l.to}
                  style={{ fontFamily: "var(--fb)", fontSize: "var(--fmi)", fontWeight: active ? 700 : 500, color: sc ? (active ? "#2D5A27" : "#52524E") : "rgba(255,255,255,0.65)", textDecoration: "none", padding: "8px 16px", borderRadius: 8, transition: "all 0.2s", background: active && sc ? "rgba(45,90,39,0.07)" : "transparent" }}>
                  {l.label}
                </Link>
              );
            })}
            <Link to="/login" style={{
              fontFamily: "var(--fb)", fontSize: "var(--fmi)", fontWeight: 600,
              color: "#fff", background: sc ? "#2D5A27" : "rgba(255,255,255,0.1)",
              border: sc ? "none" : "1px solid rgba(255,255,255,0.18)",
              textDecoration: "none", padding: "9px 22px", borderRadius: 9, transition: "all 0.3s", marginLeft: 8,
            }}>Login</Link>
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
          {links.map(function(l) {
            return (
              <Link key={l.label} to={l.to}
                onClick={function() { setMo(false); }}
                style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 400, color: "#fff", textDecoration: "none", padding: "12px 0" }}>
                {l.label}
              </Link>
            );
          })}
          <Link to="/login" onClick={function() { setMo(false); }}
            style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 400, color: "#fff", textDecoration: "none", padding: "12px 0" }}>
            Login
          </Link>
        </div>
      )}
    </>
  );
}

/* ======= MARQUEE ======= */
export function Marquee() {
  var txt = "\u201CHonesty over Hype\u201D \u2014 ZED Foundation  \u00B7  \u201CClaim less, deliver more\u201D \u2014 ZCCP Ethics  \u00B7  \u201CEvery tree geotagged\u201D \u2014 CarbonFix  \u00B7  ";
  return (
    <div style={{ overflow: "hidden", padding: "18px 0", borderTop: "1px solid #E6E4DF", borderBottom: "1px solid #E6E4DF", background: "#fff" }}>
      <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
        <span style={{ fontFamily: "var(--fd)", fontSize: "var(--fsm)", fontWeight: 400, fontStyle: "italic", color: "#9C9C96", whiteSpace: "nowrap", paddingRight: 4 }}>{txt}{txt}</span>
      </div>
    </div>
  );
}

/* ======= SITE FOOTER ======= */
export function SiteFooter() {
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

/* ======= GLOBAL STYLES ======= */
export function GlobalStyles() {
  return (
    <style>{[
      "@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Satoshi:wght@400;500;600;700&display=swap');",
      ":root{",
      "--fd:'Fraunces',Georgia,serif;",
      "--fb:'Satoshi',system-ui,sans-serif;",
      "--fmg:clamp(2.5rem,6vw+1rem,4.5rem);",
      "--fhr:clamp(1.75rem,4vw+0.5rem,3rem);",
      "--fh1:clamp(1.5rem,3vw+0.25rem,2.5rem);",
      "--fh2:clamp(1.25rem,2.5vw+0.25rem,2rem);",
      "--fh3:clamp(1rem,1.5vw+0.25rem,1.25rem);",
      "--fbd:clamp(0.875rem,1vw+0.125rem,1.0625rem);",
      "--fsm:clamp(0.8125rem,0.9vw+0.1rem,0.9375rem);",
      "--fmi:clamp(0.6875rem,0.8vw+0.1rem,0.8125rem);",
      "--flb:clamp(0.5625rem,0.65vw+0.1rem,0.6875rem);",
      "--ss:clamp(4rem,8vw,7.5rem);",
      "--sp:clamp(1.25rem,4vw,6rem);",
      "--rd:clamp(0.75rem,1.5vw,1.25rem);",
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
  );
}
