import { statsData } from "@/data/stats";


const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-primary text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <p className="text-neutral-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
