import { installedApps } from "@/data/mockData";

const Apps = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <h1 className="text-3xl font-semibold mt-6 mb-6">Installed Apps</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {installedApps.map((app) => (
          <div 
            key={app.id}
            className="bg-white rounded-lg aspect-video flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-blue-500 transition overflow-hidden"
          >
            <img 
              src={app.logo} 
              alt={app.name}
              className="max-h-14 max-w-[80%] object-contain" 
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Apps;