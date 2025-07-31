// src/components/pages/HomePage.jsx
import { useState } from "react";
import { Upload } from "lucide-react";
import UploadBox from "../components/UploadBox";
import ResultCard from "../components/ResultCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


const HomePage = () => {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (resumeFile, jobDescription) => {
    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_description", jobDescription);

    try {
      setLoading(true);
      const response = await fetch("https://optify-ai-backend.onrender.com/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setAnalysisResult(data);
    } catch (error) {
      console.error("Error analyzing resume:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#e6f0ff] px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
              Optimize Your <span className="italic text-indigo-600">Resume</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Upload your resume and job description. Our AI will match, rate, and suggest improvements.
            </p>
            <UploadBox onAnalyze={handleAnalyze} loading={loading} />
          </div>

          <div>
            <ResultCard
  score={null} // or remove score entirely for now
  feedback={analysisResult?.message ?? ""}
/>



          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
