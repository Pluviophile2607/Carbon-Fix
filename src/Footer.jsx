import React from "react";

export default function Footer({ onRouteChange }) {
  return (
    <footer className="bg-[#0F141D] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & Mission */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">
                public
              </span>
            </div>
            <span className="text-xl font-bold">CarbonFix</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Join us in our mission to create a sustainable future through
            innovative carbon compensation solutions.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-2">
            <a
              onClick={() => onRouteChange("landing")}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => onRouteChange("models")}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Core Models
            </a>
            <a
              onClick={() => onRouteChange("marketplace")}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </a>
          </nav>
        </div>

        {/* Stay Updated & Contact */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
              Stay Updated
            </h3>
            <p className="text-slate-400 text-sm">
              Connect with CarbonFix and stay tuned with the latest updates on
              environmental initiatives.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:ZedAid.org@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                ZedAid.org@gmail.com
              </a>
              <a
                href="tel:+917208701981"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                +91 72087 01981
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © 2026 CarbonFix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
