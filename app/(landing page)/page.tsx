import React from "react";
import Component from "./pages/components";
import NavbarComponent from "./pages/navbar";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-blue-900 min-h-screen  w-min-screen">
      <NavbarComponent />
      <Component />
      <Footer />
    </div>
  );
}

export default LandingPage;
