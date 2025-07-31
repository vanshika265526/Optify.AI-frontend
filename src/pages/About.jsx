import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#e6f0ff] px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border animate-fade-in">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            About <span className="text-indigo-600 italic">Optify.AI</span>
          </h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong>Optify.AI</strong> is an AI-powered resume analyzer designed to help job seekers
            craft optimized resumes tailored to specific job descriptions. My mission is to
            eliminate the guesswork from resume building by providing real-time feedback, match
            scores, and actionable suggestions based on your uploaded resume and target job profile.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I have used advanced natural language processing and machine learning techniques to analyze
            your resume content against the requirements of your desired role. Whether you’re a
            student, a fresh graduate, or a working professional looking to switch careers,
            <strong> Optify.AI</strong> gives you a competitive edge by helping you align your skills,
            keywords, and experience with what employers are looking for.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The platform evaluates your resume in seconds and offers you <strong>Suggestions</strong>,
            a performance verdict (like “Needs Work” or “Excellent Match”), and specific feedback
            you can act on — from skill mismatches to missing keywords. Our goal is to empower
            applicants with smart, data-driven insights for better career outcomes.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Designed with a modern, minimal, and accessible interface, Optify.AI ensures a smooth
            and intuitive user experience across all devices. I'm committed to continuous
            improvement and always open to feedback — because helping you succeed is what drives me.
          </p>

          <div className="mt-8 text-center">
            <p className="text-indigo-600 font-semibold">
              💬 Have questions or ideas? Reach out to me — I’d love to hear from you!
              </p><br></br>
              <a href="https://www.linkedin.com/in/vanshika--/" target="_blank" className="text-indigo-600 font-semibold">
              Click here to see my Linkedin Profile and connect with me now
            </a>
          </div>
        </div>
        <Footer />
      </div>
      
    </>
  );
};

export default AboutPage;
