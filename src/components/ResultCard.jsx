import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Confetti from "react-confetti";

const getVerdict = (score) => {
  if (score >= 90) return { label: "🏆 Legendary Match, almost perfect!", color: "#10b981" };
  if (score >= 80) return { label: "🌟 Excellent Match, refer below the suggestions!", color: "#22c55e" };
  if (score >= 60) return { label: "👍 Good Match, study the suggestions for better results!", color: "#eab308" };
  if (score >= 40) return { label: "🤔 Decent Match, quite a work required!", color: "#f97316" };
  return { label: "🔧 Needs Work", color: "#ef4444" };
};

const extractScore = (text) => {
  const match = text.match(/Resume Match Score: (\d+)%/i);
  return match ? parseInt(match[1]) : null;
};

const extractTips = (text) => {
  // Split tips based on dashes or newlines
  const tips = text
    .split("\n")
    .filter((line) => line.trim().startsWith("-"))
    .map((line) => line.trim().replace(/^-\s*/, ""));
  return tips.length > 0 ? tips : [text];
};

const ResultCard = ({ feedback }) => {
  const [score, setScore] = useState(null);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);
const shouldShowSuggestions = feedback?.includes("Needs Work");
  useEffect(() => {
    if (feedback) {
      const parsedScore = extractScore(feedback);
      setScore(parsedScore);
    }
  }, [feedback]);

  useEffect(() => {
    if (score !== null) {
      let start = 0;
      const duration = 1000;
      const increment = score / (duration / 20);
      const interval = setInterval(() => {
        start += increment;
        if (start >= score) {
          setAnimatedScore(score);
          setAnimationDone(true);
          clearInterval(interval);
        } else {
          setAnimatedScore(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [score]);

  if (!feedback) {
    return (
      <div className="bg-white p-6 rounded-xl text-xl shadow-lg border text-center">
        <p className="text-gray-500 italic">
          Upload your resume and job description to see the match score.
        </p>
      </div>
    );
  }

  const { label, color } = getVerdict(score ?? 0);
  const tips = extractTips(feedback);

  return (
    <div className="min-h-[540px] text-xl relative bg-white p-6 rounded-xl shadow-lg border max-w-xl mx-auto animate-fade-in">
      {animationDone && score >= 90 && <Confetti numberOfPieces={150} recycle={false} />}

      <div className="flex flex-col items-center space-y-4 ">
        {score !== null && (
          <div
            className={`w-32 h-32 transition-shadow duration-300 ${
              animationDone ? "shadow-[0_0_25px_4px_rgba(34,197,94,0.4)]" : ""
            } rounded-full`}
          >
            <CircularProgressbar
              value={animatedScore}
              text={`${animatedScore}%`}
              styles={buildStyles({
                pathColor: color,
                textColor: "#000",
                trailColor: "#e5e7eb",
                textSize: "20px",
              })}
            />
          </div>
        )}

        <p className=" font-semibold text-center text-3xl" style={{ color }}>
          {label}
        </p>

        <div className="w-full mt-4 text-left">
          <h3 className="text-md font-semibold mb-2 text-gray-700">💡 Suggestions:</h3>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
           <div className="mt-6 p-4 text-base bg-indigo-50 border-l-4 border-indigo-400 text-indigo-800 rounded">
  💡<strong>Keep going!</strong> Every great resume starts with feedback. Apply the suggestions above and re-upload to track your improvements.
</div>
        </div>  
      </div>
    </div>
  );
};

export default ResultCard;
