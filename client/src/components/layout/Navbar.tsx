import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useTime } from "@/hooks/useTime";
import { Search, Settings } from "lucide-react";

const Navbar = () => {
  const [location, navigate] = useLocation();
  const formattedTime = useTime();

  // Ensure Home page is active when the site initially loads
  useEffect(() => {
    if (location === "") {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  const isActive = (path: string): boolean => {
    return location === path;
  };

  const handleSettingsClick = () => {
    navigate(location === "/settings" ? "/" : "/settings");
  };

  const navigationLinks = [
    { name: "Home", path: "https://msmelok.github.io/opt-stream" },
    { name: "Guide", path: "/guide" },
    { name: "On Demand", path: "/on-demand" },
    { name: "Sports", path: "/sports" },
    { name: "DVR", path: "/dvr" },
    { name: "Apps", path: "/apps" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#001133]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          {/* Left Navigation */}
          <nav className="flex space-x-8 items-center">
            {navigationLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`text-sm font-medium ${
                  isActive(link.path) || 
                  (link.path === "/guide" && (isActive("/guide-options") || location.startsWith("/channel/")))
                    ? "text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
            
            {/* Search icon */}
            <button 
              className="text-gray-400 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            {/* Settings icon */}
            <button 
              onClick={handleSettingsClick}
              className="flex items-center justify-center w-7 h-7 rounded-full bg-white"
              aria-label="Settings"
            >
              <Settings className="w-4 h-4 text-[#001133]" />
            </button>
          </nav>
          
          {/* Right side - Time & Brand */}
          <div className="flex items-center">
            <span className="text-sm font-medium text-white flex items-center">
              <span className="mr-1">Optimum.tv</span>
              <span className="ml-1">{formattedTime}</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
