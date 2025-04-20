import { ScrollArea } from "@/components/ui/scroll-area";
import { onDemandCategories, onDemandContent } from "@/data/mockData";

const OnDemand = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      {/* Category sidebar */}
      <div className="mt-6 flex">
        <div className="w-1/4 pr-6">
          <ul className="space-y-4">
            {onDemandCategories.map((category) => (
              <li 
                key={category.id} 
                className={`${
                  category.active 
                    ? "text-white font-medium" 
                    : "text-gray-400 hover:text-white cursor-pointer"
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Content grid */}
        <div className="w-3/4 pl-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {onDemandContent.map((content) => (
              <div 
                key={content.id}
                className="rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
              >
                <img 
                  src={content.image} 
                  alt={content.title}
                  className="w-full aspect-[2/3] object-cover"
                />
                {content.subtitle && (
                  <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                    ${content.subtitle}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OnDemand;