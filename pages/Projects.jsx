import { GraduationCap, TreePine, Mountain, Waves, MapPin, Globe, Shield } from "lucide-react";
import { Grain, Reveal, Ring, Marquee, SiteFooter } from "../shared.jsx";

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
    <section style={{ padding: "var(--ss) var(--sp)", position: "relative", background: "#FAF9F6" }}>
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

export default function Projects() {
  return (
    <div>
      <div style={{ paddingTop: "80px" }}>
        <Pillars />
        <Marquee />
        <FeaturedPilots />
      </div>
      <SiteFooter />
    </div>
  );
}
