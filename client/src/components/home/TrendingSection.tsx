import { ScrollArea } from "@/components/ui/scroll-area";
import { ContentItem } from "@/data/mockData";

interface TrendingSectionProps {
  title: string;
  items: ContentItem[];
}

const TrendingSection = ({ title, items }: TrendingSectionProps) => {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
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
                <div className="flex justify-between items-center">
                  <p className="font-medium">{item.title}</p>
                  {item.isNew && (
                    <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded">
                      NEW
                    </span>
                  )}
                </div>
                {item.subtitle && (
                  <p className="text-xs text-gray-400">{item.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default TrendingSection;
