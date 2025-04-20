import { ScrollArea } from "@/components/ui/scroll-area";
import { sportsCategories, sportsEvents } from "@/data/mockData";

const Sports = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      {/* Sports Categories Horizontal Menu */}
      <div className="mt-4 mb-6">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-8 pb-2">
            {sportsCategories.map((category) => (
              <button
                key={category.id}
                className={`text-lg font-medium py-2 ${
                  category.active 
                    ? "text-white border-b-2 border-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Live and Upcoming Section */}
      <section>
        <h2 className="text-xl font-medium mb-4">Live and Upcoming</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {sportsEvents.map((event) => (
            <div
              key={event.id}
              className="relative rounded-lg overflow-hidden cursor-pointer aspect-video hover:ring-2 hover:ring-blue-500 transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-between p-3">
                <div>
                  {event.isLive && (
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                      LIVE
                    </span>
                  )}
                  {!event.isLive && event.logo && (
                    <img 
                      src={event.logo}
                      alt={`${event.title} logo`}
                      className="h-8 w-auto"
                    />
                  )}
                </div>
                
                <div>
                  {event.teams ? (
                    <div className="flex items-center justify-center bg-black/60 py-1">
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="flex justify-center">
                            {event.teams.home === "CAN" && (
                              <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" 
                                alt="Canada" 
                                className="h-4 w-6 object-cover"
                              />
                            )}
                          </div>
                          <span className="text-xs font-bold mt-1">{event.teams.home}</span>
                        </div>
                        <span className="text-xs font-bold">vs.</span>
                        <div className="text-center">
                          <div className="flex justify-center">
                            {event.teams.away === "NED" && (
                              <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png" 
                                alt="Netherlands" 
                                className="h-4 w-6 object-cover"
                              />
                            )}
                          </div>
                          <span className="text-xs font-bold mt-1">{event.teams.away}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center font-medium">
                      {event.title}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Fox Sports Shows */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <div className="rounded-lg overflow-hidden cursor-pointer">
            <img 
              src="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/08.14.23_FOX-Sports-Talent-Headshots_16x9.jpg" 
              alt="Skip and Shannon" 
              className="w-full h-48 object-cover"
            />
            <div className="p-2 relative">
              <div className="absolute top-2 right-2">
                <img 
                  src="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2020/10/fox-sports-logo.png" 
                  alt="FOX Sports" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden cursor-pointer">
            <img 
              src="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/09/1408/814/09.01.22_FOX-CFB-Rules-Analyst_16x9.jpg" 
              alt="Football" 
              className="w-full h-48 object-cover"
            />
            <div className="p-2 relative">
              <div className="absolute top-2 right-2">
                <img 
                  src="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2020/10/fox-sports-logo.png" 
                  alt="FOX Sports" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden cursor-pointer">
            <img 
              src="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/01/1408/814/Jason-McIntyre.jpg" 
              alt="The Carton Show" 
              className="w-full h-48 object-cover"
            />
            <div className="p-2 relative">
              <div className="absolute top-2 right-2">
                <img 
                  src="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2020/10/fox-sports-logo.png" 
                  alt="FOX Sports" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden cursor-pointer">
            <img 
              src="https://s.yimg.com/ny/api/res/1.2/TGHzr_U2MGDkCTBnWGsCDQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://media.zenfs.com/en/mlb.com/ead653d0aa0b6ac8d817a4955462c24c" 
              alt="MLB" 
              className="w-full h-48 object-cover"
            />
            <div className="p-2 relative">
              <div className="absolute top-2 right-2">
                <img 
                  src="https://1000logos.net/wp-content/uploads/2017/04/MLB-Logo-500x281.png" 
                  alt="MLB" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sports;