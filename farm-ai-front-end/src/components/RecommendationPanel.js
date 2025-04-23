// RecommendationPanel.js
import React from "react";

export default function RecommendationPanel() {
  return (
    <div className="card">
      <h2>💧 Water Recommendation</h2>
      <p>
        Based on analysis, irrigate with <strong>1.8 inches</strong> of water
        today.
      </p>
      <button className="button">Send to Irrigation System</button>
    </div>
  );
}
