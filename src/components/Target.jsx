import { Building2, Users } from "lucide-react";

export default function TargetCities() {
  const cities = [
    {
      name: "Sambalpur",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHwwfDB8fHww",
      projects: 12,
      residents: "2500+",
      description:
        "Our flagship city with diverse residential and commercial projects.",
    },
    {
      name: "Bhubaneswar",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHwwfDB8fHww",
      projects: 8,
      residents: "1800+",
      description:
        "Premium developments in the capital of Odisha with modern lifestyle.",
    },
    {
      name: "Burla",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHwwfDB8fHww",
      projects: 5,
      residents: "950+",
      description:
        "Emerging hub with contemporary architectural marvels and amenities.",
    },
  ];

  const stats = [
    { title: "Current Presence", value: "3 Major Cities", desc: "Sambalpur, Bhubaneswar, Burla" },
    { title: "Total Projects", value: "25+", desc: "Residential & Commercial" },
    { title: "Future Plans", value: "Pan-India", desc: "Expanding to new markets" },
  ];

  return (
    <section
      id="target-cities"
      className="pt-24 pb-0 px-4 bg-gradient-to-b from-[#252B34] to-[#1C2129]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-amber-500">Target Cities</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Strategically expanding our presence across India's promising cities.
            Every development blends urban convenience with premium living.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#252B34] to-[#1C2129]">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2129] via-transparent"></div>
              </div>

              <div className="p-6 bg-[#1C2129] border-t border-white/10">
                <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
                  {city.name}
                </h3>
                <p className="text-gray-400 mb-4">{city.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-5 pb-5 border-b border-white/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Building2 className="text-amber-500" size={18} />
                      <span className="text-2xl font-bold text-white">{city.projects}</span>
                    </div>
                    <p className="text-gray-400 text-sm">Projects</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Users className="text-amber-500" size={18} />
                      <span className="text-2xl font-bold text-white">{city.residents}</span>
                    </div>
                    <p className="text-gray-400 text-sm">Residents</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20Koshal%20Builders%20projects%20in%20${city.name}`}
                  target="_blank"
                  className="block w-full text-center px-6 py-3 
                             bg-amber-500/20 border border-amber-500/50 
                             text-amber-500 rounded-lg text-sm
                             hover:bg-amber-500 hover:text-black 
                             transition-all duration-300 font-semibold"
                >
                  Explore Projects
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Stats Box */}
        <div className="max-w-5xl mx-auto mb-0">
          <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(255,199,95,0.08)]">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((item, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-amber-500/80 text-sm font-semibold mb-1 tracking-widest">
                    {item.title}
                  </p>
                  <p className="text-3xl font-bold text-white mb-1 drop-shadow">
                    {item.value}
                  </p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
