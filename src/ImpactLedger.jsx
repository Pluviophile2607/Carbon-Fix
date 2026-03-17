import React, { useState, useEffect } from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
  useAuth,
} from "@clerk/react";
import Footer from "./Footer";

// Mock data for user contributions (in a real app, this would come from your backend)
const mockContributions = [
  {
    id: 1,
    date: "Oct 12, 2023",
    project: "Amazon Basin Reforestation",
    type: "Bio-Carbon",
    offset: 2.4,
    status: "Verified",
  },
  {
    id: 2,
    date: "Sep 28, 2023",
    project: "Danish Offshore Wind Expansion",
    type: "Renewable",
    offset: 1.8,
    status: "Verified",
  },
  {
    id: 3,
    date: "Aug 15, 2023",
    project: "Direct Air Capture - Iceland",
    type: "Technological",
    offset: 0.5,
    status: "Processing",
  },
];

export default function ImpactLedger({ onRouteChange }) {
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const [userStats, setUserStats] = useState({
    totalOffset: 0,
    projectCount: 0,
    memberSince: "2024",
    trend: 0,
  });

  // Calculate user stats when user data is available
  useEffect(() => {
    if (isSignedIn && user) {
      // In a real app, you would fetch this from your backend
      // For now, we'll generate some mock data based on the user
      const mockTotal = Math.round((Math.random() * 15 + 1) * 10) / 10;
      setUserStats({
        totalOffset: mockTotal,
        projectCount: mockContributions.filter((c) => c.status === "Verified")
          .length,
        memberSince: user.createdAt
          ? new Date(user.createdAt).getFullYear().toString()
          : "2024",
        trend: Math.round((Math.random() * 3 + 0.5) * 10) / 10,
      });
    }
  }, [isSignedIn, user]);

  // Get display name and avatar
  const displayName =
    user?.fullName || user?.firstName || user?.username || "User";
  const avatarUrl =
    user?.imageUrl || "https://via.placeholder.com/96?text=User";
  const userEmail = user?.primaryEmailAddress?.emailAddress || "";

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Profile Sidebar */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          {/* Show different content based on auth status */}
          {isSignedIn && (<>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative size-24 mb-4">
                  <img
                    className="rounded-full bg-slate-100 dark:bg-slate-800 h-full w-full object-cover"
                    src={avatarUrl}
                    alt={displayName}
                  />
                  <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full text-[10px] font-bold">
                    PRO
                  </div>
                </div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {displayName}
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  Impact Pioneer since {userStats.memberSince}
                </p>
                {userEmail && (
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">
                    {userEmail}
                  </p>
                )}
                <button className="w-full py-2 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="bg-primary text-white p-6 rounded-xl shadow-lg flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wider font-bold opacity-80">
                  Verified Score
                </p>
                <span className="material-symbols-outlined text-white/80">
                  verified
                </span>
              </div>
              <div>
                <p className="text-4xl font-bold">
                  {userStats.totalOffset}{" "}
                  <span className="text-lg font-normal">Tons</span>
                </p>
                <p className="text-xs text-primary-200 mt-1">
                  CO2e Compensation
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-green-300 text-sm">
                  trending_up
                </span>
                <p className="text-sm font-medium">
                  +{userStats.trend}% from last month
                </p>
              </div>
            </div>
          </>)}

          {!isSignedIn && (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="size-24 mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-slate-400">
                    person
                  </span>
                </div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Join Carbon Fix
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Sign in to track your environmental impact and contributions
                </p>
                <SignInButton mode="modal">
                  <button className="w-full py-2 px-4 bg-primary text-white hover:bg-primary/90 rounded-lg text-sm font-bold transition-colors mb-2">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full py-2 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors">
                    Create Account
                  </button>
                </SignUpButton>
              </div>
            </div>
          )}

          {!isSignedIn && (
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl flex flex-col gap-4 opacity-60">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Verified Score
                </p>
                <span className="material-symbols-outlined text-slate-400">
                  lock
                </span>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-400">
                  -- <span className="text-lg font-normal">Tons</span>
                </p>
                <p className="text-xs text-slate-500 mt-1">Sign in to view</p>
              </div>
            </div>
          )}

          <nav className="flex flex-col gap-1">
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
              onClick={() => onRouteChange("dashboard")}
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Overview</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary"
              href="#"
            >
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-bold">Impact Ledger</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
              href="#"
            >
              <span className="material-symbols-outlined">calculate</span>
              <span className="text-sm font-medium">Logic Hub</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="lg:col-span-9 flex flex-col gap-8">
          {/* Impact Ledger Table */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h2 className="font-bold text-slate-900 dark:text-slate-100">
                Project Contributions
              </h2>
              {isSignedIn && (
                <button className="text-xs font-bold text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    download
                  </span>{" "}
                  Export CSV
                </button>
              )}
            </div>

            {isSignedIn && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-widest font-bold">
                    <tr>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Project Name</th>
                      <th className="px-6 py-3">Type</th>
                      <th className="px-6 py-3 text-right">Offset (CO2e)</th>
                      <th className="px-6 py-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {mockContributions.map((contribution) => (
                      <tr key={contribution.id}>
                        <td className="px-6 py-4 text-slate-500">
                          {contribution.date}
                        </td>
                        <td className="px-6 py-4 font-medium">
                          {contribution.project}
                        </td>
                        <td className="px-6 py-4 text-slate-500">
                          {contribution.type}
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-primary">
                          {contribution.offset} t
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                              contribution.status === "Verified"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                            }`}
                          >
                            {contribution.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {!isSignedIn && (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">
                  lock
                </span>
                <h3 className="text-lg font-bold text-slate-600 dark:text-slate-400 mb-2">
                  Sign in to view your contributions
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Track your environmental impact and see your project history
                </p>
                <SignUpButton mode="modal">
                  <button className="py-2 px-6 bg-primary text-white hover:bg-primary/90 rounded-lg text-sm font-bold transition-colors">
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            )}
          </section>

          {/* Honest Estimation Logic Section */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Honest Estimation Logic
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Our AI-driven carbon calculator uses a multi-layered
                verification protocol to ensure maximum accuracy and zero
                greenwashing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Step 1 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative">
                <div className="absolute -top-3 -left-3 bg-primary text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="text-primary mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    input
                  </span>
                </div>
                <h3 className="font-bold mb-2">Data Ingestion</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Aggregates API data from utility bills, flight logs, and
                  lifestyle inputs.
                </p>
              </div>
              {/* Step 2 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative">
                <div className="absolute -top-3 -left-3 bg-primary text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="text-primary mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    psychology
                  </span>
                </div>
                <h3 className="font-bold mb-2">AI Processing</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Neutral Neural Engine applies regional emission factors and
                  lifecycle analysis.
                </p>
              </div>
              {/* Step 3 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative">
                <div className="absolute -top-3 -left-3 bg-primary text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="text-primary mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    rule
                  </span>
                </div>
                <h3 className="font-bold mb-2">Cross-Ref</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Verified against IPPC guidelines and third-party environmental
                  standards.
                </p>
              </div>
              {/* Step 4 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative">
                <div className="absolute -top-3 -left-3 bg-primary text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div className="text-primary mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    verified_user
                  </span>
                </div>
                <h3 className="font-bold mb-2">Ledger Lock</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Calculated impact is hashed and stored in your immutable
                  impact ledger.
                </p>
              </div>
            </div>

            {/* Visual Breakdown / Chart Simulation */}
            <div className="bg-slate-900 text-slate-300 p-8 rounded-xl border border-slate-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-white text-lg font-bold">
                    Engine Distribution
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1 uppercase tracking-wider font-bold">
                        <span>Direct Emissions (Scope 1)</span>
                        <span className="text-white">42%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[42%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1 uppercase tracking-wider font-bold">
                        <span>Energy Consumption (Scope 2)</span>
                        <span className="text-white">28%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[28%] opacity-80"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1 uppercase tracking-wider font-bold">
                        <span>Indirect Supply Chain (Scope 3)</span>
                        <span className="text-white">30%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[30%] opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-64 aspect-square flex flex-col items-center justify-center border-4 border-slate-800 rounded-full relative">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">98.4%</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      Logic Accuracy
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border-t-4 border-primary"
                    style={{ transform: "rotate(45deg)" }}
                  ></div>
                </div>
              </div>
            </div>
          </section>

          {/* Certificates & Badges */}
          <section>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
              Official Certificates
            </h3>
            {isSignedIn && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <div className="size-12 bg-primary/10 rounded flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      description
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">
                      Q3 2023 Compensation Cert
                    </p>
                    <p className="text-xs text-slate-500">
                      ID: CF-{user?.id?.slice(0, 4) || "9920"}-X12
                    </p>
                  </div>
                  <button className="ml-auto text-primary">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <div className="size-12 bg-primary/10 rounded flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      description
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">
                      Annual Impact Report {userStats.memberSince}
                    </p>
                    <p className="text-xs text-slate-500">
                      ID: CF-{user?.id?.slice(0, 4) || "8812"}-Y04
                    </p>
                  </div>
                  <button className="ml-auto text-primary">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>
            )}
            {!isSignedIn && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-50">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <div className="size-12 bg-slate-100 rounded flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400">
                      Certificate Locked
                    </p>
                    <p className="text-xs text-slate-400">Sign in to access</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <div className="size-12 bg-slate-100 rounded flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400">
                      Report Locked
                    </p>
                    <p className="text-xs text-slate-400">Sign in to access</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer onRouteChange={onRouteChange} />
    </div>
  );
}
