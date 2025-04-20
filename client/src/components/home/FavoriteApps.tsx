import { ScrollArea } from "@/components/ui/scroll-area";
import { StreamingApp } from "@/data/mockData";

interface FavoriteAppsProps {
  apps: StreamingApp[];
}

const FavoriteApps = ({ apps }: FavoriteAppsProps) => {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-medium mb-4">Favorite Apps</h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-4">
          {apps.map((app) => (
            <div
              key={app.id}
              className="flex-shrink-0 w-40 h-20 bg-black rounded-lg overflow-hidden flex items-center justify-center hover:ring-2 hover:ring-[#3b82f6] transition cursor-pointer"
            >
              <img
                src={app.logo}
                alt={app.name}
                className="h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default FavoriteApps;
