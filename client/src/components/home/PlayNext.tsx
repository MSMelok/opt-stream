import { ScrollArea } from "@/components/ui/scroll-area";
import { ContentItem } from "@/data/mockData";

interface PlayNextProps {
  items: ContentItem[];
}

const PlayNext = ({ items }: PlayNextProps) => {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-medium mb-4">Play Next</h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-56 rounded-lg overflow-hidden bg-[#0a1e42] hover:ring-2 hover:ring-[#3b82f6] transition cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-32 w-full object-cover"
              />
              <div className="p-3">
                <p className="font-medium">{item.title}</p>
                {item.subtitle && (
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default PlayNext;
