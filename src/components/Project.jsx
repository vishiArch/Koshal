import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

// Copyright-free Images (Unsplash)
const projects = [
  {
    id: 1,
    name: "Royal Residency Phase 1",
    category: "Residential",
    location: "Saria, Sambalpur",
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
    status: "Ready to Move",
  },
  {
    id: 2,
    name: "Koshal Prestige",
    category: "Residential",
    location: "Sourav Vihar, Burla",
    image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393",
    status: "Ready to Move",
  },
  {
    id: 3,
    name: "Koshal Residency",
    category: "Residential",
    location: "Sambalpur",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    status: "Ready to Move",
  },
  {
    id: 4,
    name: "Koshal Homes",
    category: "Residential",
    location: "Shanti Nagar, Sambalpur",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    status: "Ready to Move",
  },
  {
    id: 5,
    name: "Koshal Imperial",
    category: "Commercial",
    location: "Sambalpur",
    image: "https://images.unsplash.com/photo-1505692794403-34cb84dbe37f",
    status: "Upcoming",
  },
  {
    id: 6,
    name: "Koshal Spaces",
    category: "Commercial",
    location: "Various Locations",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    status: "Upcoming",
  },
  {
    id: 7,
    name: "Koshal Prime",
    category: "Residential",
    location: "Sahednagar, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    status: "Launching Soon",
  },
  {
    id: 8,
    name: "Koshal Luxotica",
    category: "Residential",
    location: "Sahednagar, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    status: "Launching Soon",
  },
];

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 shadow-xl hover:shadow-amber-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container (Increased Size) */}
      <div className="relative overflow-hidden h-[420px] w-[600px] rounded-2xl">
        <img
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-90" : "opacity-60"
          }`}
        ></div>
      </div>

      {/* Status Badge */}
      <div className="absolute top-4 left-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
            project.status === "Ready to Move"
              ? "bg-green-500/80 text-white"
              : "bg-yellow-500/80 text-black"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
          {project.name}
        </h3>

        <div className="flex items-center gap-2 text-gray-300 mb-4">
          <MapPin size={16} />
          <span className="text-sm">{project.location}</span>
        </div>

        <a
          href={`https://wa.me/919876543210?text=I am interested in ${project.name}`}
          target="_blank"
          className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
        >
          View Details
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-slate-900/40 to-slate-950"
      id="our-projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-500">Premium Projects</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore world-class developments built with precision, luxury, and
            modern architecture.
          </p>
        </div>

        {/* Bigger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all duration-300 font-semibold hover:scale-105 shadow-lg">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
