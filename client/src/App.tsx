import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Settings from "@/pages/Settings";
import DeviceSettings from "@/pages/DeviceSettings";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";

function Router() {
  return (
    <div className="min-h-screen bg-[#001133]">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/device-settings" component={DeviceSettings} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
