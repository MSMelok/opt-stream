import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Settings from "@/pages/Settings";
import DeviceSettings from "@/pages/DeviceSettings";
import AccessibilitySettings from "@/pages/AccessibilitySettings";
import Account from "@/pages/Account";
import Guide from "@/pages/Guide";
import GuideOptions from "@/pages/GuideOptions";
import ChannelInfo from "@/pages/ChannelInfo";
import Apps from "@/pages/Apps";
import Sports from "@/pages/Sports";
import DVR from "@/pages/DVR";
import OnDemand from "@/pages/OnDemand";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";

function Router() {
  return (
    <div className="min-h-screen bg-[#001133] text-white">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/device-settings" component={DeviceSettings} />
        <Route path="/accessibility-settings" component={AccessibilitySettings} />
        <Route path="/account" component={Account} />
        <Route path="/guide" component={Guide} />
        <Route path="/guide-options" component={GuideOptions} />
        <Route path="/channel/:id" component={ChannelInfo} />
        <Route path="/apps" component={Apps} />
        <Route path="/sports" component={Sports} />
        <Route path="/dvr" component={DVR} />
        <Route path="/on-demand" component={OnDemand} />
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
