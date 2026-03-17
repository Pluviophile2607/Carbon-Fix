import React, { useState, useEffect, useRef } from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
  useAuth,
} from "@clerk/react";
import Footer from "./Footer";

// Project data
const projectsData = [
  {
    id: 1,
    title: "School Plantation Drive",
    type: "School Plantation",
    description: "Educational ecosystem restoration in Thane district schools.",
    impactScore: 88,
    region: "Thane",
    organization: "Green Earth NGO",
    icon: "volunteer_activism",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATh6Hu-FRy9UUWmkILH0JYYLWgp3UVwM652FVN_gGsGqXFkEGThd2QQBlD7D0H9W1NXO3LQCu_eQYltNYNQGzZy3aEnmH7F3GZUoiTVz2BoRWTftAHgAHe-GwdOVRcWc6rHf-Id46d4yCJ5bLE0WQF0GET4bFozHNuRB1cYE_DUAWhTtJdNAYEkii5tK3TYlh1sdMbmQ8jjjQrPpoL1_DQxYn_k3WAXSWaT8d0nBeDBuUgVbh-DNjsoaI9q3z-MuAhMJ_DBaqJTlA",
    trees: 2500,
    co2Offset: 45,
    status: "active",
  },
  {
    id: 2,
    title: "Miyawaki Initiative",
    type: "Urban Forest",
    description: "Dense urban forest micro-zones in the heart of Mumbai city.",
    impactScore: 92,
    region: "Mumbai",
    organization: "Sahyadri Friends",
    icon: "nature",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbyhdF_rOw3F0IPvVqN4YjKfNyzeaOe-7-E_O-fgFeNVdUTUy-f6Y0b2ZsTsInpVx_UKEsfxf8zBUYtym3sRBVFz6Re8euDQDbSB-TMCiw5Q69K_1Ew4XYRFdQX9rowVnK0IP6QDukL-sOYefzT3TX9Q8NnzDZSZwf_XVTH3t8VdRV08FqxE2zryKL-6Alvwt0oX5ED1zmSTfo7E6LI2tugy2_IjWigFKBeuhdVQG5GMpMsRVxKr8J8fGSI0MAXTocmMGo5sboonY",
    trees: 5000,
    co2Offset: 85,
    status: "active",
  },
  {
    id: 3,
    title: "Coastal Shield Project",
    type: "Mangrove Restoration",
    description:
      "Protecting Mumbai's coastline through intensive mangrove planting.",
    impactScore: 95,
    region: "Mumbai",
    organization: "Coastal Watch",
    icon: "water",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSyWvMlyB19tWJZLoo-00MueGQwGlR-Li098-W5Jc09WEc9UkPo65YkAS_Vm8wFAtGDOOs7lq-I1QOsRfLVwXhdGESNIU5cL-SRw0pJQ7mNHvQAuxLojNsMURGgGwfZSXW_nbI2B_1hgWE3jEhXZ3K_CWz9GsXx2jtcFnaAXOMn7DoQCg2Rbr-pyOuq3WMUQYu48DVIFYA4xqRd9KQxyrM__ZCftBT9YuaaOeHIRbUnR9RYvHwa5dzRGi8kntrhkqWN4yfMLxSMhc",
    trees: 8000,
    co2Offset: 120,
    status: "active",
  },
  {
    id: 4,
    title: "Yeoor Hills Revival",
    type: "Hillside Reforestation",
    description:
      "Reforesting degraded slopes to prevent soil erosion and restore biodiversity.",
    impactScore: 84,
    region: "Yeoor Hills",
    organization: "Yeoor Rangers",
    icon: "landscape",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPgUkGfPvDJadRaFt0TbUdrtr_Fq6N20jy2CqYy98rVMMP_snFIl3RCldBu_--eydl01op58Kc4gDT1u31DpsP4Oyl7MN-rk2uu872YZimm6KrAA2R6jibG7c57AH8fGDiOeJM0SHNIfdphEswxvPkZ-ykNqRZ46X-6D5gbr7q95xjyLutVaF2PzkJzTMMitqNqStvTegRGSlZ3EPObOYgFAc2PjH3UY00uaOyhQipyHJeXcpSYH3vdlKGqfjtxp7SEQu4M16ryxE",
    trees: 3500,
    co2Offset: 62,
    status: "active",
  },
  {
    id: 5,
    title: "Parsik Ridge Corridor",
    type: "Native Forest",
    description:
      "Connecting fragmented green patches along the Parsik Hill range.",
    impactScore: 91,
    region: "Parsik Hill",
    organization: "Ridge Watchers",
    icon: "eco",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPQ-6BgskQD0fcWF-Zz7pw07rG8Q2wEUzg0L8p2DWLFslw6uFjaqybe8sDSEcduTgTaCvkz8yDV-XiBHWT06IhJvjcs6Cv6HMbTWZPS_w022HSKwPh7JlBBJdgsQ_FsSQCpuE36SpewlBVGdvckFICi6WsWmP8exWxKb4_9CWIjU8g6vdetn42k90WGMHZEjaUmYqhflxM7PsFHOJMKARO-qxNRhh6XuZO_AIny46YS-hY79x5vtzZIfG4Ts_Hhf1EDdXU5st-dCM",
    trees: 4200,
    co2Offset: 78,
    status: "active",
  },
  {
    id: 6,
    title: "Eco-Tourism Buffer",
    type: "Biodiversity Hub",
    description:
      "Creating sustainable green buffers around protected hilly regions.",
    impactScore: 87,
    region: "Yeoor Hills",
    organization: "Green Community",
    icon: "diversity_2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-oVGKkpBRbqVpRPsseXQvo5GFsCE9I1gVoNhKSu8Ji9A28ttyy8S6CSkTJyOaEd8BAC4RO3er0yqdlwwfQQG_fwYObzeNGs0KZl_b3xtkeju1Z1PfDJbP8AV01uK2oI2Py2jTbDeA5J0q_v_0zDX6M-byAwwonTJNbVF2_504xdIbBv0yCYRbbxVRYOK5YdwvMD3BpbRwx1zMmLoPcksAvVUfK0xihHv9JDSHAovDTkXhoZ5l0_5pqBz0cvYYL4YlZGrmlaB5log",
    trees: 3000,
    co2Offset: 55,
    status: "active",
  },
];

const regions = [
  "All Regions",
  "Thane",
  "Mumbai",
  "Yeoor Hills",
  "Parsik Hill",
];

// Dropdown Component
function DropdownMenu({ label, options, selected, onSelect, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex h-10 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-semibold transition-all ${
          selected === "All Regions"
            ? "bg-primary text-white shadow-md shadow-primary/10"
            : "bg-white border border-slate-200 hover:border-primary/40 text-slate-700"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected === "All Regions" ? "All Regions" : selected}</span>
        <span
          className={`material-symbols-outlined !text-lg transition-transform ${isOpen ? "rotate-180" : ""} ${selected === "All Regions" ? "text-white" : "text-slate-400"}`}
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((option) => (
            <button
              key={option}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/5 transition-colors flex items-center justify-between ${
                selected === option
                  ? "text-primary font-semibold bg-primary/5"
                  : "text-slate-700"
              }`}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              <span>{option}</span>
              {selected === option && (
                <span className="material-symbols-outlined !text-lg text-primary">
                  check
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, onRouteChange, isSignedIn, user }) {
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);

  const handleJoinProject = (e) => {
    e.stopPropagation();
    if (!isSignedIn) return;
    setIsJoining(true);
    // Simulate API call
    setTimeout(() => {
      setHasJoined(true);
      setIsJoining(false);
    }, 1000);
  };

  return (
    <div
      className="flex flex-col group bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => onRouteChange("dashboard")}
    >
      <div className="relative w-full aspect-[4/3] bg-slate-200 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url("${project.image}")` }}
        ></div>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-primary uppercase tracking-wider">
          {project.type}
        </div>
        {hasJoined && (
          <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
            <span className="material-symbols-outlined !text-sm">
              check_circle
            </span>
            Joined
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-slate-900 font-bold text-lg leading-tight">
            {project.title}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-primary font-black text-xl">
              {project.impactScore}
            </span>
            <span className="text-[8px] text-slate-400 uppercase font-bold">
              Impact Score
            </span>
          </div>
        </div>
        <p className="text-slate-500 text-sm mb-3">{project.description}</p>

        {/* Project Stats */}
        <div className="flex gap-4 mb-3 text-xs">
          <div className="flex items-center gap-1 text-slate-500">
            <span className="material-symbols-outlined !text-sm text-primary">
              park
            </span>
            <span>{project.trees.toLocaleString()} trees</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span className="material-symbols-outlined !text-sm text-primary">
              co2
            </span>
            <span>{project.co2Offset}t CO₂/yr</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined !text-sm text-primary">
                {project.icon}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-600">
              {project.organization}
            </span>
          </div>
          <span className="text-xs font-bold text-slate-400">
            {project.region}
          </span>
        </div>

        {/* Join Button - Only show for signed in users */}
        {isSignedIn && (
          <button
            onClick={handleJoinProject}
            disabled={isJoining || hasJoined}
            className={`mt-4 w-full py-2 rounded-lg text-sm font-bold transition-all ${
              hasJoined
                ? "bg-primary/10 text-primary"
                : "bg-primary text-white hover:bg-primary/90"
            } ${isJoining ? "opacity-70 cursor-wait" : ""}`}
          >
            {isJoining
              ? "Joining..."
              : hasJoined
                ? "✓ Joined Project"
                : "Join Project"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function ProjectMarketplace({ onRouteChange }) {
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [sortBy, setSortBy] = useState("impact");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // Filter and sort projects
  useEffect(() => {
    let result = [...projectsData];

    // Filter by region
    if (selectedRegion !== "All Regions") {
      result = result.filter((p) => p.region === selectedRegion);
    }

    // Sort
    if (sortBy === "impact") {
      result.sort((a, b) => b.impactScore - a.impactScore);
    } else if (sortBy === "trees") {
      result.sort((a, b) => b.trees - a.trees);
    } else if (sortBy === "co2") {
      result.sort((a, b) => b.co2Offset - a.co2Offset);
    }

    setFilteredProjects(result);
  }, [selectedRegion, sortBy]);

  // Calculate stats
  const totalTrees = projectsData.reduce((sum, p) => sum + p.trees, 0);
  const totalCo2 = projectsData.reduce((sum, p) => sum + p.co2Offset, 0);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <main className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-[1200px] px-6 py-10 lg:py-16 mx-auto">
          {/* Page Header & Filters */}
          <div className="flex flex-col gap-8 mb-12">
            <div className="flex flex-col gap-2">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Maharashtra Pilot Projects
              </span>
              <h1 className="text-slate-900 text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Project Marketplace
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl">
                Discover and fund verified reforestation initiatives across
                Maharashtra's most critical ecological zones.
              </p>

              {/* Show personalized greeting for signed in users */}
              {isSignedIn && (
                <div className="mt-2 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-sm text-slate-700">
                    Welcome back,{" "}
                    <span className="font-bold text-primary">
                      {user?.firstName || user?.fullName || "User"}
                    </span>
                    ! You're ready to make an impact. Browse projects and join
                    the ones that resonate with you.
                  </p>
                </div>
              )}
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-slate-500 font-medium text-sm mr-2 flex items-center gap-1">
                <span className="material-symbols-outlined !text-lg">
                  filter_list
                </span>{" "}
                Filter by Region:
              </div>

              {/* Region Dropdown */}
              <DropdownMenu
                options={regions}
                selected={selectedRegion}
                onSelect={setSelectedRegion}
              />

              {/* Sort Dropdown */}
              <div className="ml-4 flex items-center gap-2">
                <span className="text-slate-500 font-medium text-sm">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-10 px-4 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 focus:outline-none focus:border-primary/40 cursor-pointer"
                >
                  <option value="impact">Impact Score</option>
                  <option value="trees">Most Trees</option>
                  <option value="co2">CO₂ Offset</option>
                </select>
              </div>

              {/* Results count */}
              <div className="ml-auto text-sm text-slate-500">
                Showing{" "}
                <span className="font-bold text-slate-700">
                  {filteredProjects.length}
                </span>{" "}
                projects
              </div>
            </div>
          </div>

          {/* Discovery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onRouteChange={onRouteChange}
                isSignedIn={isSignedIn}
                user={user}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">
                search_off
              </span>
              <h3 className="text-xl font-bold text-slate-600 mb-2">
                No projects found
              </h3>
              <p className="text-slate-500 mb-4">
                Try selecting a different region filter
              </p>
              <button
                onClick={() => setSelectedRegion("All Regions")}
                className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Map/Data Preview Section */}
          <div className="mt-20 p-8 rounded-2xl bg-primary/5 border border-primary/10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-slate-900 text-3xl font-black tracking-tight leading-tight">
                Interactive Impact Map
              </h2>
              <p className="text-slate-600 leading-relaxed">
                View all pilot projects in real-time. Our spatial data
                visualization provides transparent tracking of carbon
                sequestration and biodiversity gains across Maharashtra.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-primary/10">
                  <div className="text-primary text-2xl font-black">
                    {totalTrees.toLocaleString()}+
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Trees Planted
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-primary/10">
                  <div className="text-primary text-2xl font-black">
                    {totalCo2}k
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Tons CO₂/yr
                  </div>
                </div>
              </div>
              {isSignedIn && (
                <button className="bg-primary text-white w-fit px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">map</span>
                  Explore Map View
                </button>
              )}
              {!isSignedIn && (
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="text-sm text-slate-600 mb-3">
                    Sign in to access the interactive map and track your
                    contributions
                  </p>
                  <SignUpButton mode="modal">
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/90 transition-all">
                      Sign Up to Explore
                    </button>
                  </SignUpButton>
                </div>
              )}
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb35b9_2AeJY67_0Slj9uwGBhGYIO541XiNhglxLysCKPHeIpxHDTBNMEZNEdGwcEnqo0zWoS4SPe-_KdGtSlE4cNsrO7redeRoZPWP0W65y_nUOBsYcEas27MQQEabyWVNsx9a38KHx_xkuxsxki_TEIvHStrdR6Xzk9H3dGFA-Ltn0MOhpSYcTMbzlQrHXcGQ4sC5UlSQxfMznwHhcw-7zR4_Ptx36uabWu2xx022SrTUkbcqjIZhW6E6iaTMpUfCMuhUiaJGTU")',
                }}
              ></div>
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center group pointer-events-none">
                <div className="bg-white/90 backdrop-blur size-16 rounded-full flex items-center justify-center text-primary shadow-xl scale-100 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined !text-4xl">
                    location_on
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onRouteChange={onRouteChange} />
    </div>
  );
}
