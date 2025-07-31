// src/components/Header.jsx
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-4xl font-bold tracking-tight">Optify.AI</h1>
      <nav className="space-x-6 text-gray-700 font-bold text-l">
        <a href="/About">ABOUT US</a>
        
      </nav>
      
    </header>
  );
};

export default Header;
