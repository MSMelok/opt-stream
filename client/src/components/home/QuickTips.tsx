import { ScrollArea } from "@/components/ui/scroll-area";
import { QuickTip } from "@/data/mockData";
import { Wifi, List, Home, Video } from "lucide-react";

interface QuickTipsProps {
  tips: QuickTip[];
}

const QuickTips = ({ tips }: QuickTipsProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "wifi":
        return <Wifi className="w-6 h-6 mb-2" />;
      case "list":
        return <List className="w-6 h-6 mb-2" />;
      case "home":
        return <Home className="w-6 h-6 mb-2" />;
      case "video":
        return <Video className="w-6 h-6 mb-2" />;
      default:
        return null;
    }
  };

  return (
    <section className="mt-8">
      <h3 className="text-lg font-medium mb-4">Quick Tips</h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-4">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="flex-shrink-0 w-48 h-24 rounded-lg bg-blue-700 hover:bg-blue-600 transition p-4 flex flex-col justify-center cursor-pointer"
            >
              {getIcon(tip.icon)}
              <p className="font-medium">{tip.title}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
      <p className="text-sm text-gray-400 mt-2">
        Learn to Pair & Program your Optimum Stream Remote
      </p>
      <p className="text-xs text-gray-500">
        Optimum Quick Tips · 70.7k views (2 min)
      </p>
    </section>
  );
};

export default QuickTips;
