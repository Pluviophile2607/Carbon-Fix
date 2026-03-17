import React, { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/react";

export default function Navbar({ currentRoute, onRouteChange }) {
  const { user, isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "landing", label: "Home", requiresAuth: false },
    { id: "models", label: "Core Models", requiresAuth: false },
    { id: "marketplace", label: "Projects", requiresAuth: false },
    { id: "ledger", label: "Impact", requiresAuth: true },
    { id: "dashboard", label: "Dashboard", requiresAuth: true },
  ];

  // Filter links based on auth status
  const visibleLinks = navLinks.filter(
    (link) => !link.requiresAuth || isSignedIn,
  );

  const isActive = (route) => {
    return currentRoute === route;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onRouteChange("landing")}
          >
            <div className="size-10 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">
                public
              </span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              CarbonFix
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {visibleLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => onRouteChange(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  isActive(link.id)
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side - Auth & Actions */}
          <div className="flex items-center gap-3">
            {/* Auth Buttons */}
            {!isSignedIn && (
              <div className="hidden md:flex items-center gap-3">
                <SignInButton mode="modal">
                  <button className="text-slate-600 text-sm font-semibold hover:text-slate-900 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            )}

            {isSignedIn && (
              <div className="hidden md:block">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4">
            <nav className="flex flex-col gap-1">
              {visibleLinks.map((link) => (
                <a
                  key={link.id}
                  onClick={() => {
                    onRouteChange(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                    isActive(link.id)
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Auth Section */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              {!isSignedIn && (
                <div className="flex flex-col gap-2">
                  <SignInButton mode="modal">
                    <button className="w-full text-center py-2 text-slate-600 font-semibold hover:bg-slate-50 rounded-lg transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:bg-primary/90 transition-all">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              )}
              {isSignedIn && (
                <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-lg">
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">
                      {user?.fullName || user?.firstName || "User"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {user?.primaryEmailAddress?.emailAddress}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
