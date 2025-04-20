import { useState } from "react";
import { useLocation } from "wouter";
import { useTime } from "@/hooks/useTime";
import { 
  Search, Settings, Bell, Home, Tv, Film, HardDrive, 
  Trophy, Grid, User
} from "lucide-react";

const Navbar = () => {
  const [location, navigate] = useLocation();
  const formattedTime = useTime();

  const isActive = (path: string): boolean => {
    return location === path;
  };

  const handleSettingsClick = () => {
    navigate(location === "/settings" ? "/" : "/settings");
  };

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Guide", path: "/guide" },
    { name: "On Demand", path: "/on-demand" },
    { name: "Sports", path: "/sports" },
    { name: "DVR", path: "/dvr" },
    { name: "Apps", path: "/apps" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#001133] border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Main Navigation */}
          <nav className="flex space-x-6 items-center">
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

            <button 
              className="text-gray-400 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </nav>
          
          {/* Right side items */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSettingsClick}
              className="p-1 rounded-full bg-white bg-opacity-10"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5 text-white" />
            </button>
            
            <div className="flex items-center">
              <span className="text-sm font-medium text-white mr-1">optimum.tv</span>
              <span className="text-sm font-medium text-white">{formattedTime}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
