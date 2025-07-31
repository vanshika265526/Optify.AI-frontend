// components/ScoreMeter.jsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const getVerdict = (score) => {
  if (score >= 80) return { label: "Excellent Match 🎯", color: "#4ade80" }; // green
  if (score >= 60) return { label: "Good Match 😎", color: "#facc15" }; // yellow
  if (score >= 40) return { label: "Decent Match 🧐", color: "#fb923c" }; // orange
  return { label: "Needs Work 😬", color: "#f87171" }; // red
};

const ScoreMeter = ({ score }) => {
  const { label, color } = getVerdict(score);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-4">
      <div className="w-40 h-40">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            textColor: "#ffffff",
            pathColor: color,
            trailColor: "#1f2937",
            textSize: "18px",
          })}
        />
      </div>
      <div className="text-lg font-semibold text-center" style={{ color }}>
        {label}
      </div>
    </div>
  );
};

export default ScoreMeter;
