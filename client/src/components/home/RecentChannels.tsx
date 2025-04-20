import { ScrollArea } from "@/components/ui/scroll-area";
import { Channel } from "@/data/mockData";

interface RecentChannelsProps {
  channels: Channel[];
}

const RecentChannels = ({ channels }: RecentChannelsProps) => {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-medium mb-4">Recent Channels</h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-4">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="flex-shrink-0 w-48 rounded-lg overflow-hidden bg-[#0a1e42] hover:ring-2 hover:ring-[#3b82f6] transition cursor-pointer"
            >
              <img
                src={channel.logo}
                alt={channel.name}
                className="h-28 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default RecentChannels;
