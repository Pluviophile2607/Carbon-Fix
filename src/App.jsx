import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ProjectMarketplace from "./pages/ProjectMarketplace";
import EvidenceDashboard from "./pages/EvidenceDashboard";
import ImpactLedger from "./pages/ImpactLedger";
import CoreModels from "./pages/CoreModels";

function App() {
  console.log("App component: rendering");
  const [currentRoute, setCurrentRoute] = useState("landing");

  const handleRouteChange = (route) => {
    setCurrentRoute(route);
    window.scrollTo(0, 0); // Scroll to top when changing route
  };

  const renderCurrentRoute = () => {
    switch (currentRoute) {
      case "landing":
        return <LandingPage onRouteChange={handleRouteChange} />;
      case "marketplace":
        return <ProjectMarketplace onRouteChange={handleRouteChange} />;
      case "dashboard":
        return <EvidenceDashboard onRouteChange={handleRouteChange} />;
      case "ledger":
        return <ImpactLedger onRouteChange={handleRouteChange} />;
      case "models":
        return <CoreModels onRouteChange={handleRouteChange} />;
      default:
        return <LandingPage onRouteChange={handleRouteChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-light">
      <Navbar currentRoute={currentRoute} onRouteChange={handleRouteChange} />
      {renderCurrentRoute()}
    </div>
  );
}

export default App;
