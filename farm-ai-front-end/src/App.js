// Main App (App.js)
import React from "react";
import SoilMoistureChart from "./components/SoilMoistureChart";
import WeatherPanel from "./components/WeatherPanel";
import RecommendationPanel from "./components/RecommendationPanel";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>🌾 Smart Water Management Dashboard</h1>
      <div className="dashboard-grid">
        <WeatherPanel />
        <SoilMoistureChart />
        <RecommendationPanel />
      </div>
      <Footer />
    </div>
  );
}
