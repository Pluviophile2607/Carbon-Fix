import { SignInButton, SignUpButton, UserButton } from "@clerk/react";
import Footer from "../components/Footer";

export default function EvidenceDashboard({ onRouteChange }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <nav
            aria-label="Breadcrumb"
            className="flex text-sm text-slate-500 mb-2"
          >
            <ol className="flex items-center space-x-2">
              <li>
                <a
                  className="hover:text-primary transition-colors cursor-pointer"
                  onClick={() => onRouteChange("marketplace")}
                >
                  Projects
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
                <span className="text-slate-900 font-medium">
                  Urban Reforestation Site A-12
                </span>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Student Evidence Dashboard
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                Portland Metropolitan District · Phase 3: Execution
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-all text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Export Log
              </button>
              <button className="px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  add_a_photo
                </span>
                Submit Evidence
              </button>
            </div>
          </div>
        </div>

        {/* Lifecycle Tracker */}
        <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl p-6 mb-8 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
            Project Lifecycle
          </h3>
          <div className="relative">
            <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800"></div>
            <div className="relative flex justify-between">
              {/* Site Survey */}
              <div className="flex flex-col items-center gap-3 bg-white dark:bg-background-dark px-2">
                <div className="z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Site Survey
                  </p>
                  <p className="text-xs text-slate-400">Oct 12, 2023</p>
                </div>
              </div>
              {/* Onboarding */}
              <div className="flex flex-col items-center gap-3 bg-white dark:bg-background-dark px-2">
                <div className="z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Onboarding
                  </p>
                  <p className="text-xs text-slate-400">Oct 15, 2023</p>
                </div>
              </div>
              {/* Execution */}
              <div className="flex flex-col items-center gap-3 bg-white dark:bg-background-dark px-2">
                <div className="z-10 w-10 h-10 rounded-full border-4 border-primary bg-white flex items-center justify-center text-primary animate-pulse">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-primary">Execution</p>
                  <p className="text-xs text-primary font-medium italic">
                    In Progress
                  </p>
                </div>
              </div>
              {/* Handover */}
              <div className="flex flex-col items-center gap-3 bg-white dark:bg-background-dark px-2">
                <div className="z-10 w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex items-center justify-center text-slate-300">
                  <span className="material-symbols-outlined text-lg">
                    circle
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-slate-400">Handover</p>
                  <p className="text-xs text-slate-400">Upcoming</p>
                </div>
              </div>
              {/* Monitoring */}
              <div className="flex flex-col items-center gap-3 bg-white dark:bg-background-dark px-2">
                <div className="z-10 w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex items-center justify-center text-slate-300">
                  <span className="material-symbols-outlined text-lg">
                    circle
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-slate-400">
                    Monitoring
                  </p>
                  <p className="text-xs text-slate-400">Future</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar: Metadata & Guidelines */}
          <div className="lg:col-span-1 space-y-6">
            {/* Student Guardian Badge */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 relative overflow-hidden shadow-sm">
              <div className="absolute -top-4 -right-4 p-4 opacity-10 pointer-events-none text-primary">
                <span className="material-symbols-outlined text-8xl">
                  shield_person
                </span>
              </div>
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30">
                  JS
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                    Jordan Smith
                  </h3>
                  <div className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider mt-1">
                    <span className="material-symbols-outlined text-sm">
                      verified
                    </span>
                    Student Guardian
                  </div>
                </div>
              </div>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Assigned Plot
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    A-12 Central
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Primary Species
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    Douglas Fir
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Survival Status
                  </span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      sentiment_very_satisfied
                    </span>
                    Thriving
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-bold text-primary flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined">info</span>
                Submission Guidelines
              </h3>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex gap-2">
                  <span className="material-symbols-outlined text-primary text-base">
                    check_circle
                  </span>
                  Ensure GPS is enabled on your device.
                </li>
                <li className="flex gap-2">
                  <span className="material-symbols-outlined text-primary text-base">
                    check_circle
                  </span>
                  Photos must show clear tree identification.
                </li>
                <li className="flex gap-2">
                  <span className="material-symbols-outlined text-primary text-base">
                    check_circle
                  </span>
                  Include scale reference where possible.
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                Project Map
              </h3>
              <div
                className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative"
                data-location="Portland, Oregon"
                style={{}}
              >
                {/* Simulated Map Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-primary/30"></div>
                </div>
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-slate-600">
                  45.523062, -122.676482
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Total Plots</span>
                  <span className="font-bold">14 / 20</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content: Evidence Log */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Evidence Log
              </h2>
              <div className="flex gap-2">
                <button className="p-1.5 text-slate-400 border border-slate-200 rounded hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="p-1.5 text-primary border border-primary/20 bg-primary/10 rounded">
                  <span className="material-symbols-outlined">list</span>
                </button>
              </div>
            </div>

            {/* Evidence Card 1 */}
            <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:border-primary/30 transition-all">
              <div className="p-4 flex gap-4">
                <div className="w-32 h-32 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-200"></div>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Sapling Installation - Plot A-1
                      </h4>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">
                        Verified
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">
                      Douglas Fir sapling planted in central quadrant. Soil
                      preparation complete with organic mulch layer.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-sm">
                        location_on
                      </span>
                      45.523° N, 122.676° W
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>
                      Oct 18, 2023 · 14:22
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-sm">
                        devices
                      </span>
                      iPhone 14 Pro
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Evidence Card 2 */}
            <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:border-primary/30 transition-all">
              <div className="p-4 flex gap-4">
                <div className="w-32 h-32 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0 relative">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-blue-100"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/80">
                    <span className="material-symbols-outlined text-3xl">
                      play_circle
                    </span>
                  </div>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Irrigation Test Video
                      </h4>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded uppercase">
                        Pending Review
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">
                      Video demonstrating the drip irrigation flow for Plot A-1
                      to A-5. Pressure is within nominal range.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-sm">
                        location_on
                      </span>
                      45.524° N, 122.675° W
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>
                      Oct 19, 2023 · 09:15
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-sm">
                        videocam
                      </span>
                      00:45s · MP4
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty State / Add New */}
            <button className="w-full py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  cloud_upload
                </span>
              </div>
              <div className="text-center">
                <p className="font-bold text-slate-900 dark:text-white">
                  Upload New Evidence
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Drag and drop images or videos here
                </p>
              </div>
            </button>
          </div>
        </div>
      </main>

      <Footer onRouteChange={onRouteChange} />
    </div>
  );
}
