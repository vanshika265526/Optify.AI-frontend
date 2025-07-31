// src/components/ui/UploadBox.jsx
import { useState } from "react";
import { Upload } from "lucide-react";

const UploadBox = ({ onAnalyze, loading }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleAnalyzeClick = () => {
    if (!resumeFile || !jobDescription) {
      alert("Please upload resume and paste job description!");
      return;
    }
    onAnalyze(resumeFile, jobDescription);
  };

  return (
    <div className="p-6 border border-dashed border-gray-400 rounded-xl bg-white shadow-md flex flex-col gap-4">
      <label className="text-md font-semibold">Resume PDF</label>
      <input
        type="file"
        accept=".pdf"
        className="p-2 border rounded"
        onChange={(e) => setResumeFile(e.target.files[0])}
      />

      <label className="text-md font-semibold">Job Description</label>
      <textarea
        className="p-2 border rounded resize-none h-32"
        placeholder="Paste job description..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      ></textarea>

      <button
        onClick={handleAnalyzeClick}
        className={`mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        <Upload size={18} />
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
};
export default UploadBox;
