import { useState } from "react";
import { useLocation } from "wouter";
import { useTime } from "@/hooks/useTime";
import { 
  Search, Settings, Bell, Home, Tv, Film, HardDrive, 
  Trophy, Grid, User, Menu, X
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [location, navigate] = useLocation();
  const formattedTime = useTime();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string): boolean => {
    return location === path;
  };

  const handleSettingsClick = () => {
    navigate(location === "/settings" ? "/" : "/settings");
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigationLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4 mr-1" /> },
    { name: "Guide", path: "/guide", icon: <Tv className="w-4 h-4 mr-1" /> },
    { name: "On Demand", path: "/on-demand", icon: <Film className="w-4 h-4 mr-1" /> },
    { name: "DVR", path: "/dvr", icon: <HardDrive className="w-4 h-4 mr-1" /> },
    { name: "Sports", path: "/sports", icon: <Trophy className="w-4 h-4 mr-1" /> },
    { name: "Apps", path: "/apps", icon: <Grid className="w-4 h-4 mr-1" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo for mobile */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-md"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              OPTIMUM
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            {navigationLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={cn(
                  "text-white font-medium py-2 px-4 rounded-md flex items-center",
                  isActive(link.path) || 
                  (link.path === "/guide" && (isActive("/guide-options") || location.startsWith("/channel/"))) || 
                  (link.path === "/settings" && (
                    isActive("/device-settings") || 
                    isActive("/accessibility-settings") || 
                    isActive("/account")
                  ))
                  ? "bg-blue-600" 
                  : "hover:bg-blue-700",
                  "transition-all duration-200"
                )}
              >
                {link.icon}
                {link.name}
              </button>
            ))}
            <div className="relative ml-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-300" />
              </div>
              <input 
                type="search" 
                className="block w-full p-2 pl-10 text-sm bg-blue-700 border border-blue-600 rounded-md placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Search..." 
              />
            </div>
          </nav>
          
          {/* Right side items */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSettingsClick}
              className={cn(
                "text-white p-2 rounded-md",
                isActive("/settings") || 
                isActive("/device-settings") || 
                isActive("/accessibility-settings") || 
                isActive("/account") 
                  ? "bg-blue-600" 
                  : "hover:bg-blue-700",
                "transition-all duration-200"
              )}
            >
              <Settings className="w-5 h-5" />
            </button>
            
            <button 
              className="text-white p-2 rounded-md hover:bg-blue-700 transition-all duration-200"
              onClick={() => navigate("/account")}
            >
              <User className="w-5 h-5" />
            </button>
            
            <button className="text-white p-2 rounded-md hover:bg-blue-700 relative transition-all duration-200">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="hidden md:flex items-center ml-4">
              <span className="text-sm font-medium text-blue-100">optimum.tv</span>
              <span className="ml-2 text-sm font-medium text-blue-100">{formattedTime}</span>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-2 pb-4 border-t border-blue-700">
            <div className="space-y-1">
              {navigationLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    navigate(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full text-left text-white font-medium py-3 px-4 flex items-center rounded-md",
                    isActive(link.path) || 
                    (link.path === "/guide" && (isActive("/guide-options") || location.startsWith("/channel/")))
                    ? "bg-blue-600" 
                    : "hover:bg-blue-700",
                    "transition-all duration-200"
                  )}
                >
                  {link.icon}
                  {link.name}
                </button>
              ))}
              <div className="px-4 py-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-4 h-4 text-gray-300" />
                  </div>
                  <input 
                    type="search" 
                    className="block w-full p-2 pl-10 text-sm bg-blue-700 border border-blue-600 rounded-md placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Search..." 
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
