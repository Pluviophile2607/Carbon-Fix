import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./LandingPage";
import ProjectMarketplace from "./ProjectMarketplace";
import EvidenceDashboard from "./EvidenceDashboard";
import ImpactLedger from "./ImpactLedger";
import CoreModels from "./CoreModels";

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
