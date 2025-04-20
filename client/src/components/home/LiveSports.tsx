import { ScrollArea } from "@/components/ui/scroll-area";
import { SportEvent } from "@/data/mockData";

interface LiveSportsProps {
  events: SportEvent[];
}

const LiveSports = ({ events }: LiveSportsProps) => {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-medium mb-4">Live and Upcoming Sports</h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-48 h-28 rounded-lg overflow-hidden bg-[#0a1e42] hover:ring-2 hover:ring-[#3b82f6] relative cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-3">
                <div className="flex items-center">
                  {event.isLive ? (
                    <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                      LIVE
                    </span>
                  ) : event.logo ? (
                    <img src={event.logo} alt={`${event.title} Logo`} className="h-4" />
                  ) : null}
                </div>
                <div>
                  {event.teams ? (
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{event.teams.home}</span>
                      <span className="text-sm">{event.teams.away}</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span className="text-sm">{event.title}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default LiveSports;
