import { Button } from "@/components/ui/button";
import { formatTimeRange } from "@/lib/utils";
import { Channel } from "@/data/mockData";

interface CurrentChannelProps {
  channel: Channel;
}

const CurrentChannel = ({ channel }: CurrentChannelProps) => {
  return (
    <section className="mt-6">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{channel.name}</h2>
        {channel.currentShow && (
          <div className="flex items-center text-gray-400 text-sm">
            <img src={channel.logo} alt={channel.name} className="h-8 w-auto mr-2" />
            <span>
              {formatTimeRange(
                channel.currentShow.startTime,
                channel.currentShow.endTime
              )}
            </span>
          </div>
        )}
        <div className="flex mt-4 space-x-3">
          <Button 
            variant="default" 
            className="bg-[#3b82f6] hover:bg-blue-600 text-white px-6 py-2 rounded-full"
          >
            Watch Now
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:bg-opacity-10"
          >
            More Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CurrentChannel;
