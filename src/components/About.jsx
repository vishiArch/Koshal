import React from "react";
import { Award, Leaf, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      subtitle: "Quality & Craftsmanship",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop", // building image
      description:
        "We maintain the highest standards of construction and design, ensuring every property exceeds expectations. Our commitment to quality is reflected in every project we undertake.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      subtitle: "Environmental Responsibility",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop", // green / eco image
      description:
        "We believe in building for tomorrow. Our eco-friendly practices and green initiatives ensure minimal environmental impact while creating sustainable communities.",
    },
    {
      icon: Users,
      title: "Community",
      subtitle: "People First Approach",
      img: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHwwfDB8fHww", // community image
      description:
        "Building homes that foster meaningful connections. We create spaces where communities thrive with modern amenities and shared experiences.",
    },
  ];

  return (
    <section
      id="our-story"
      className="px-4 pt-24 pb-10 bg-gradient-to-b from-[#1C2129] to-[#252B34]"
    >
      <div className="max-w-7xl mx-auto">

        {/* About Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-wider">
              Our Legacy
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building <span className="text-amber-500">Dreams</span> for 18 Years
            </h2>

            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Since 2006, Koshal Builders has been at the forefront of real
              estate innovation in Odisha. What began as a vision to create
              premium homes has evolved into a legacy of trust, quality, and
              excellence.
            </p>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Our journey is marked by countless happy families, successful
              businesses, and thriving communities. We don't just build
              properties; we create living experiences that enrich lives and
              foster lasting memories.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: "18+", label: "Years of Excellence" },
                { number: "2000+", label: "Happy Families" },
                { number: "50+", label: "Completed Projects" },
                { number: "5000+", label: "Satisfied Customers" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-amber-500/50 transition-colors"
                >
                  <p className="text-3xl font-bold text-amber-500 mb-1">
                    {stat.number}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition-all duration-300 font-bold text-lg hover:scale-105"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right Image (Koshal Builders Projects) */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHwyfDB8fHww"
              alt="Koshal Builders Projects"
              className="w-full rounded-[10px] shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/20 object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="text-center mb-14">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core <span className="text-amber-500">Values</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every property
              we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Image for each value (including Community) */}
                  <img
                    src={value.img}
                    alt={`${value.title} image`}
                    className="w-full h-40 object-cover rounded-xl mb-6"
                  />

                  {/* Icon */}
                  <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="text-amber-500" size={32} />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2">
                    {value.title}
                  </h4>

                  <p className="text-amber-500/80 text-sm font-semibold mb-4">
                    {value.subtitle}
                  </p>

                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
