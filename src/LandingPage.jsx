import React from "react";
import Footer from "./components/Footer";

export default function LandingPage({ onRouteChange }) {
  return (
    <>
    <div className="bg-[#f8f9fa] min-h-screen font-display text-slate-900">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-20">
          <div className="flex flex-col gap-6 pr-0 md:pr-10">
            <h1 className="text-slate-900 text-5xl md:text-[64px] font-black leading-[1.1] tracking-tight">
              Measurable <br />
              Local Action for <br />a{" "}
              <span className="text-[#2c5926]">Sustainable</span> <br />
              <span className="text-[#2c5926]">Future</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-[480px]">
              Focusing on real local impact and ecosystem restoration in the
              Sahyadri region, not carbon credit trading. We plant native
              species to build resilient forests.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <button
                className="flex cursor-pointer items-center justify-center rounded-md h-12 px-6 bg-[#2c5926] text-white text-sm font-bold hover:bg-[#23471e] transition-colors"
                onClick={() => onRouteChange("marketplace")}
              >
                Take Action Today
              </button>
              <button
                className="flex cursor-pointer items-center justify-center rounded-md h-12 px-6 border border-[#2c5926] bg-transparent text-[#2c5926] text-sm font-bold hover:bg-[#2c5926]/5 transition-colors"
                onClick={() => onRouteChange("ledger")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-full w-full min-h-[400px]">
            <img
              alt="Forest path"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNfjy-ssGgNZ1pwK8Xs5f0X4o-dfAoSixniYvB4IwPvSSVL0Qfdx72zdPnWcRTU7DvPetWeeHJfa4WV1JPFDZFz8iq2xYy8IeHH1qbJnxM4DFxOnkImMcEIviLnsZHRbCmSoKWhZQnY6KA9_p1gpMPJheUXu8U5x85jcuN_UQZkbi3MTREQ5NUGOWaCis6TmGRQ7MoihCyOI-nI3J0ICACoNYxRjZP17G1Go6ECqj96TKsY0T-0vommvPqr9CCpkW87tzOMpJQPD4"
            />
          </div>
        </section>

        {/* What We Are NOT Section */}
        <section className="bg-white rounded-[2rem] py-16 px-8 md:px-16 my-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              What We Are <span className="text-red-500">NOT</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Carbon Fix is dedicated to genuine ecological restoration. We are
              completely independent of the carbon credit trading markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#f8f9fa] border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 mb-2">
                <span className="material-symbols-outlined text-[20px]">
                  block
                </span>
              </div>
              <h3 className="text-slate-900 text-lg font-bold">
                Not a Trading Platform
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We do not buy, sell, or trade carbon credits. Our focus is
                entirely on measurable ecological impact.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#f8f9fa] border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[#2c5926] mb-2">
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
              </div>
              <h3 className="text-slate-900 text-lg font-bold">
                No Greenwashing
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every project is transparent, rigorously monitored, and strictly
                for local ecological benefit.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#f8f9fa] border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[#2c5926] mb-2">
                <span className="material-symbols-outlined text-[20px]">
                  eco
                </span>
              </div>
              <h3 className="text-slate-900 text-lg font-bold">
                Not a Temporary Fix
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We focus on long-term sustainability, employing native species
                to build ecosystems that thrive for generations.
              </p>
            </div>
          </div>
        </section>

        {/* Core Models Section */}
        <section className="py-12 my-8">
          <div className="mb-10 text-left">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Our Core Models
            </h2>
            <p className="text-slate-600 text-lg">
              Targeted approaches for maximum ecological impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* School & College */}
            <div
              className="flex flex-col group cursor-pointer"
              onClick={() => onRouteChange("marketplace")}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <img
                  alt="School & College"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrp0sA4TkQcWUsVLLWix96ZLUjubekyouKwJbVhn3Al4521yWh-5Dq3oAozTZCfX-mZ_HS_i6oesZmQeV8a4Jnin3t2hjXfibqaWob6FW3hxf9vzqfE58U4vEKFMMveWMhQ2MX5KYSErMG_Cn066xyvYhDrSHj50O5SXtp74QTEX4IfwdaPM3qTI7fkxUuWGieEWdi70ivxPlU6UUjzRhBjRnw5cBZILr_qvg73EJOSVhN0x4ovtCZrwHj6DUB6y-h7vSzYcSZBd8"
                />
              </div>
              <h3 className="text-slate-900 text-xl font-bold mb-2">
                School &amp; College
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed pr-4">
                Engaging youth in campus micro-forests, fostering environmental
                stewardship from a young age.
              </p>
            </div>

            {/* Trail & Fort */}
            <div
              className="flex flex-col group cursor-pointer"
              onClick={() => onRouteChange("marketplace")}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <img
                  alt="Trail & Fort"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOQuShBfDIoHBBthIltSuJSeI2ziJbEDDW9KcM2BeS1yQbJe8Ske7l-DWsCPzgSzcFHWXE9XeuNSLAvlqQV4QktgF0i_uO8RhDm91lza1EPfE09MW2HNmstBQoWOyj-qo9Xa7XJJ7eIrr77dF7LcZz0eTZHafHo1fzO_bxT_ODVqVWie8S0yZ3iFmuSTW1eBqG_e950IDTO4wC42DM6pxMrhG7F3zXLGPfwlQ9rondYEGO1sKGx3bh1vav4IxzhBkJwIv_4Rtt6FQ"
                />
              </div>
              <h3 className="text-slate-900 text-xl font-bold mb-2">
                Trail &amp; Fort
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed pr-4">
                Restoring heritage ecosystems along historical Sahyadri trails
                and forts, preserving both nature and history.
              </p>
            </div>

            {/* Large-Scale Forest */}
            <div
              className="flex flex-col group cursor-pointer"
              onClick={() => onRouteChange("marketplace")}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <img
                  alt="Large-Scale Forest"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9gQV-B5jgFQwL_M8jzdJCqiSSgj7gd_FuoC7hvamdICvgOC39gmWxQfg4x2UNba07g2LGVIvt5yB0EpPfuHrCBjaTQPnmBdEb8bYjKpV-Fr4nrSTM4iPocvBAfo0i2ZvnrHkdL3HBDxyu5zMBHOGcfiWoSGEfRqs6FyidVyw_6sI5SvSBg_zmOmWkFO9-RaiBiNN6iqOIjfFRO8Wq4qgvi5gYeZvgzLO3y9SwhlCtu5_XSWtnlnL01b8UONR3VL3hSaytIvCOYFw"
                />
              </div>
              <h3 className="text-slate-900 text-xl font-bold mb-2">
                Large-Scale Forest
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed pr-4">
                Massive native plantation projects designed for significant
                regional biodiversity impact.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="bg-[#2c5926] rounded-[2rem] p-10 md:p-14 my-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* subtle background pattern could go here, for now it's solid */}
          <div className="relative z-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to make a real impact?
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Join our community of volunteers and supporters restoring the
              Sahyadri ecosystems.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button
              className="flex items-center justify-center rounded-md h-12 px-8 bg-white text-[#2c5926] text-[15px] font-bold hover:bg-slate-50 transition-colors shadow-sm"
              onClick={() => onRouteChange("marketplace")}
            >
              Join the Movement
            </button>
          </div>
        </section>

      </div>
    </div>
    <Footer onRouteChange={onRouteChange} />
    </>
  );
}
