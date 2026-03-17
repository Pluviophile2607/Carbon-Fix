import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function CoreModels({ onRouteChange }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Card stack animation
      cardRefs.current.forEach((card) => {
        if (!card) return;

        // Simple entrance animation for each entire model section
        gsap.fromTo(
          card,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );

        // Stagger inner content cleanly
        const contentElements = card.querySelectorAll(
          ".model-badge, .model-title, .model-desc, .model-card, .model-lifecycle, .bg-white"
        );
        
        if(contentElements.length > 0) {
          gsap.fromTo(
            contentElements,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };


  return (
    <>
    <div
      ref={containerRef}
      className="bg-[#f8f9fa] min-h-screen font-display text-slate-900"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className="py-16 md:py-24 text-center max-w-[800px] mx-auto"
        >
          <h1 className="text-slate-900 text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Our Core <span className="text-[#2c5926]">Restoration</span> Models
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every environment requires a unique approach. We've designed
            scientifically backed, community-driven models tailored to the
            Sahyadri ecosystem.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {/* Model 1: School & College */}
          <section
            ref={addToCardRefs}
            id="school-college"
            className="model-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-8">
              <div className="model-badge inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-[#2c5926] rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">
                  school
                </span>
                Educational Model
              </div>
              <h2 className="model-title text-4xl font-bold text-slate-900">
                School & College Plantation
              </h2>
              <p className="model-desc text-slate-600 text-lg leading-relaxed">
                Transforming underutilized campus land into biodiversity
                pockets. This model provides hands-on climate action for
                students while creating a permanent green asset.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="model-card p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      target
                    </span>
                    Purpose
                  </h4>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li>• Local nature-based actions</li>
                    <li>• Student hands-on exposure</li>
                    <li>• Permanent campus assets</li>
                  </ul>
                </div>
                <div className="model-card p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      diversity_3
                    </span>
                    Guardianship
                  </h4>
                  <p className="text-sm text-slate-500">
                    Students act as primary "Guardians", managing weekly health
                    monitoring and reporting survival data.
                  </p>
                </div>
              </div>

              <div className="model-lifecycle space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Project Lifecycle
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      step: "1",
                      title: "Pre-Assessment",
                      desc: "Site survey, soil health check, and water mapping.",
                    },
                    {
                      step: "2",
                      title: "Onboarding",
                      desc: "Formalizing partnership and Student Green Team.",
                    },
                    {
                      step: "3",
                      title: "Execution",
                      desc: "Plantation drive following established SOPs.",
                    },
                    {
                      step: "4",
                      title: "Handover",
                      desc: "Transfer responsibility to designated Guardians.",
                    },
                    {
                      step: "5",
                      title: "Monitoring",
                      desc: "Periodic survival checks and impact reporting.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#2c5926] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">
                          {item.title}
                        </h5>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-24">
              <img
src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrp0sA4TkQcWUsVLLWix96ZLUjubekyouKwJbVhn3Al4521yWh-5Dq3oAozTZCfX-mZ_HS_i6oesZmQeV8a4Jnin3t2hjXfibqaWob6FW3hxf9vzqfE58U4vEKFMMveWMhQ2MX5KYSErMG_Cn066xyvYhDrSHj50O5SXtp74QTEX4IfwdaPM3qTI7fkxUuWGieEWdi70ivxPlU6UUjzRhBjRnw5cBZILr_qvg73EJOSVhN0x4ovtCZrwHj6DUB6y-h7vSzYcSZBd8"
                alt="School plantation"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </section>

          {/* Model 2: Trail & Fort */}
          <section
            ref={addToCardRefs}
            id="trail-fort"
            className="model-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-12 border-t border-slate-200"
          >
            <div className="lg:order-2 space-y-8">
              <div className="model-badge inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">
                  hiking
                </span>
                Restoration Model
              </div>
              <h2 className="model-title text-4xl font-bold text-slate-900">
                Trail & Fort Restoration
              </h2>
              <p className="model-desc text-slate-600 text-lg leading-relaxed">
                Restoring native vegetation along trekking trails and historical
                fort precincts. These models use hardy species to stabilize soil
                on hilly terrain and prevent erosion.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-[#2c5926] text-white rounded-3xl space-y-4">
                  <h3 className="text-xl font-bold">Maintenance Chart</h3>
                  <div className="space-y-4 text-white/90">
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <div>
                        <p className="font-bold">Initial Care (0-3m)</p>
                        <p className="text-xs opacity-70">
                          Watering & Mulching
                        </p>
                      </div>
                      <span className="text-sm font-medium">Local Vasti</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <div>
                        <p className="font-bold">Protection</p>
                        <p className="text-xs opacity-70">
                          Fire lines & Grazing patrol
                        </p>
                      </div>
                      <span className="text-sm font-medium">Trek Clubs</span>
                    </div>
                    <div className="flex justify-between items-center pb-1">
                      <div>
                        <p className="font-bold">Growth Check</p>
                        <p className="text-xs opacity-70">Quarterly Audits</p>
                      </div>
                      <span className="text-sm font-medium">
                        Student Guardians
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Hardy Native Species
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Hirda", "Behada", "Arjun", "Anjan", "Kadamba"].map(
                      (s) => (
                        <span
                          key={s}
                          className="px-4 py-2 bg-[#f8f9fa] rounded-full text-sm font-medium border border-slate-100"
                        >
                          {s}
                        </span>
                      ),
                    )}
                  </div>
                  <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                    Targeted species selection ensures these ecosystems become
                    "Self-Sustaining" after the first year, surviving solely on
                    natural rain.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:order-1 rounded-3xl overflow-hidden shadow-2xl sticky top-24">
              <img
src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOQuShBfDIoHBBthIltSuJSeI2ziJbEDDW9KcM2BeS1yQbJe8Ske7l-DWsCPzgSzcFHWXE9XeuNSLAvlqQV4QktgF0i_uO8RhDm91lza1EPfE09MW2HNmstBQoWOyj-qo9Xa7XJJ7eIrr77dF7LcZz0eTZHafHo1fzO_bxT_ODVqVWie8S0yZ3iFmuSTW1eBqG_e950IDTO4wC42DM6pxMrhG7F3zXLGPfwlQ9rondYEGO1sKGx3bh1vav4IxzhBkJwIv_4Rtt6FQ"
                alt="Trail restoration"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </section>

          {/* Model 3: Large-Scale Forest */}
          <section
            ref={addToCardRefs}
            id="large-scale"
            className="model-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-12 border-t border-slate-200"
          >
            <div className="space-y-8">
              <div className="model-badge inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">
                  forest
                </span>
                Conservation Model
              </div>
              <h2 className="model-title text-4xl font-bold text-slate-900">
                Large-Scale Forest Project
              </h2>
              <p className="model-desc text-slate-600 text-lg leading-relaxed">
                A "Forestry" approach for big tracts of degraded land.
                High-density planting using native species to mimic natural
                forest structures for significant regional carbon soak.
              </p>

              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      security
                    </span>
                    Security & Monitoring
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Hiring local "Forest Guards" to prevent illegal grazing and
                    woodcutting. Creating seasonal "Fire Lines" to protect the
                    growing ecosystem.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      analytics
                    </span>
                    Impact Logic
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    ZED uses a "Conservative Estimation" model. If a tree does
                    not survive, it is immediately removed from the digital
                    ledger to ensure real trust.
                  </p>
                </div>
                <div className="pt-4 flex gap-4">
                  <div className="flex-1 text-center">
                    <p className="text-3xl font-black text-[#2c5926]">3-5Y</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Active Care
                    </p>
                  </div>
                  <div className="flex-1 text-center border-x border-slate-100">
                    <p className="text-3xl font-black text-[#2c5926]">100%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Native Species
                    </p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-3xl font-black text-[#2c5926]">CSR</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Act Sched VII
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-24">
              <img
src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9gQV-B5jgFQwL_M8jzdJCqiSSgj7gd_FuoC7hvamdICvgOC39gmWxQfg4x2UNba07g2LGVIvt5yB0EpPfuHrCBjaTQPnmBdEb8bYjKpV-Fr4nrSTM4iPocvBAfo0i2ZvnrHkdL3HBDxyu5zMBHOGcfiWoSGEfRqs6FyidVyw_6sI5SvSBg_zmOmWkFO9-RaiBiNN6iqOIjfFRO8Wq4qgvi5gYeZvgzLO3y9SwhlCtu5_XSWtnlnL01b8UONR3VL3hSaytIvCOYFw"
                alt="Large scale forest"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </section>
        </div>

        {/* Closing Quote */}
        <div className="closing-quote mt-16 p-12 bg-white rounded-[3rem] text-center border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-[#2c5926]">
            <span className="material-symbols-outlined text-9xl">
              format_quote
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 italic">
            "ZED prioritizes survival over numbers."
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Honest, transparent, and conservative estimation is at the heart of
            our mission. This is direct ecological action for a sustainable
            future.
          </p>
        </div>

        {/* CTA */}
        <div className="cta-button mt-16 mb-24 text-center">
          <button
            className="inline-flex items-center justify-center rounded-xl h-14 px-10 bg-[#2c5926] text-white text-lg font-bold hover:bg-[#23471e] transition-all shadow-lg hover:translate-y-[-2px]"
            onClick={() => onRouteChange("marketplace")}
          >
            Explore Projects Using These Models
          </button>
        </div>

      </div>
    </div>

    <Footer onRouteChange={onRouteChange} />
    </>
  );
}
