import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const titleRef = useRef(null);

  // Scroll navbar effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero heading animation
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.animation = "fadeInUp 1s ease-out";
    }
  }, []);

  const menuItems = ["Home", "Our Story", "Contact", "Our Projects"];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-lg bg-black/30 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">K</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:inline">
                Koshal
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Chat
              </button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all duration-300 font-semibold"
              >
                Enquire
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 backdrop-blur-lg bg-black/40 border border-white/10 rounded-lg mt-2">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-3 text-gray-300 hover:text-yellow-500 hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <div className="px-4 py-3 border-t border-white/10 flex gap-2">
                <button className="flex-1 px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm">
                  Chat
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="flex-1 px-4 py-2 bg-yellow-500 text-black rounded font-semibold text-sm hover:bg-yellow-600"
                >
                  Enquire
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        id="home"
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="/placeholder.jpg"
            alt="Luxury building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Koshal Builder <br />
            <span className="text-yellow-500">Pvt. Ltd</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Trusted name in the real estate industry for over a decade
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#our-projects"
              className="px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all duration-300 font-semibold hover:scale-105 inline-block"
            >
              Explore Projects →
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-all duration-300 font-semibold hover:scale-105 inline-block"
            >
              Enquire Now
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-yellow-500" />
          </div>
        </div>
      </section>
    </>
  );
}
