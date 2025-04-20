import { useLocation } from "wouter";
import { useTime } from "@/hooks/useTime";
import { Search, Settings, Bell } from "lucide-react";

const Navbar = () => {
  const [location, navigate] = useLocation();
  const formattedTime = useTime();

  const isActive = (path: string): boolean => {
    return location === path;
  };

  const handleSettingsClick = () => {
    navigate(location === "/settings" ? "/" : "/settings");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#001133] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <nav className="flex space-x-6 items-center">
            <button
              onClick={() => navigate("/")}
              className={`text-white font-medium py-2 px-3 rounded-full ${
                isActive("/") ? "bg-white bg-opacity-10" : "hover:bg-white hover:bg-opacity-10"
              } transition`}
            >
              Home
            </button>
            <button
              onClick={() => navigate("/guide")}
              className={`text-white font-medium py-2 px-3 rounded-full ${
                isActive("/guide") || isActive("/guide-options") || location.startsWith("/channel/")
                  ? "bg-white bg-opacity-10" 
                  : "hover:bg-white hover:bg-opacity-10"
              } transition`}
            >
              Guide
            </button>
            <button
              onClick={() => navigate("/on-demand")}
              className={`text-white font-medium py-2 px-3 rounded-full ${
                isActive("/on-demand") ? "bg-white bg-opacity-10" : "hover:bg-white hover:bg-opacity-10"
              } transition`}
            >
              On Demand
            </button>
            <button
              onClick={() => navigate("/dvr")}
              className={`text-white font-medium py-2 px-3 rounded-full ${
                isActive("/dvr") ? "bg-white bg-opacity-10" : "hover:bg-white hover:bg-opacity-10"
              } transition`}
            >
              DVR
            </button>
            <button
              onClick={() => navigate("/sports")}
              className={`text-white font-medium py-2 px-3 rounded-full ${
                isActive("/sports") ? "bg-white bg-opacity-10" : "hover:bg-white hover:bg-opacity-10"
              } transition`}
            >
              Sports
            </button>
            <button
              onClick={() => navigate("/apps")}
              className={`text-white font-medium py-2 px-3 rounded-full ${
                isActive("/apps") ? "bg-white bg-opacity-10" : "hover:bg-white hover:bg-opacity-10"
              } transition`}
            >
              Apps
            </button>
            <button className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition">
              <Search className="w-5 h-5" />
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleSettingsClick}
              className={`text-white p-2 rounded-full ${
                isActive("/settings") || 
                isActive("/device-settings") || 
                isActive("/accessibility") || 
                isActive("/account") 
                  ? "bg-white bg-opacity-10" 
                  : "hover:bg-white hover:bg-opacity-10"
              } transition`}
            >
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center ml-4">
              <span className="font-medium">optimum.tv</span>
              <span className="ml-2 font-medium">{formattedTime}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
