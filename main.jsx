import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/react";
import App from "./src/App.jsx";
import { CLERK_PUBLISHABLE_KEY } from "./src/clerk-config.js";

console.log("main.jsx: started with ClerkProvider");

try {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  console.log("main.jsx: root created");
  root.render(
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>,
  );
  console.log("main.jsx: render called");
} catch (error) {
  console.error("main.jsx: error during render:", error);
}
