import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Theme variables
 * - brandGreen: #0C3E31
 * - brandGold:  #D4A947
 *
 * Recommended: load fonts in index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
 *
 * Headings use Playfair Display (serif) and body uses Montserrat (sans).
 */

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const titleRef = useRef(null);

  const brandGreen = "#0C3E31";
  const brandGold = "#D4A947";

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
            ? "backdrop-blur-xl bg-white/10 border-b border-yellow-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "backdrop-blur-xl bg-white/5 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(212,169,71,0.7)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  style={{
                    color: "#D4A947",
                    fontWeight: 800,
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                  }}
                >
                  K
                </span>
              </div>

              <span
                className="text-white font-semibold hidden sm:inline"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textShadow: "0px 2px 6px rgba(0,0,0,0.4)",
                }}
              >
                Fortune Elements
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition-colors duration-300"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                className="px-4 py-2 rounded-md transition-colors"
                style={{
                  color: "white",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(6px)",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Chat
              </button>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-lg transition-transform transform hover:scale-[1.02] shadow-sm"
                style={{
                  background: "#D4A947",
                  color: "white",
                  fontWeight: 700,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Enquire
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.98 }}
                animate={{ opacity: 1, height: "auto", scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.98 }}
                transition={{ duration: 0.28 }}
                className="md:hidden mt-2 rounded-lg overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(14px)",
                }}
              >
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-3"
                    onClick={() => setIsOpen(false)}
                    style={{
                      color: "rgba(255,255,255,0.95)",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </a>
                ))}

                <div className="px-4 py-3 border-t border-white/10">
                  <div className="flex gap-3">
                    <button
                      className="flex-1 px-4 py-2 rounded-md"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.2)",
                        backdropFilter: "blur(6px)",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      Chat
                    </button>

                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-4 py-2 rounded-md text-center font-semibold"
                      style={{
                        background: "#D4A947",
                        color: "white",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        id="home"
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-85">
          <img
            src="/placeholder.jpg"
            alt="Luxury building"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.85) saturate(1.05)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(12,62,49,0.12) 0%, rgba(12,62,49,0.35) 45%, rgba(2,6,23,0.8) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="mb-6 leading-tight"
            style={{
              // fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#fff",
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              lineHeight: 1.02,
              textShadow: "0 8px 24px rgba(0,0,0,0.6)",
            }}
          >
            Fortune{" "}
            <span
              style={{
                color: brandGold,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
              }}
            >
              Elements
            </span>
            <br />
            <span
              style={{
                display: "inline-block",
                marginTop: 6,
                color: brandGold,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.2rem, 2.8vw, 2.2rem)",
                letterSpacing: "0.6px",
                textShadow: "0 6px 18px rgba(0,0,0,0.45)",
              }}
            >
              Pvt. Ltd
            </span>
          </h1>

          <p
            className="mb-8 mx-auto"
            style={{
              color: "rgba(255,255,255,0.9)",
              maxWidth: 720,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)",
              lineHeight: 1.6,
            }}
          >
            Trusted name in premium real estate — blending nature, luxury and
            modern living.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#our-projects"
              className="inline-block px-8 py-3 rounded-lg transition-transform transform hover:scale-[1.02]"
              style={{
                background: brandGold,
                color: brandGreen,
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
                boxShadow: "0 10px 30px rgba(12,62,49,0.08)",
              }}
            >
              Explore Projects →
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 rounded-lg border-2 transition-all"
              style={{
                borderColor: brandGold,
                color: brandGold,
                background: "transparent",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
              }}
            >
              Enquire Now
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown
              size={34}
              style={{
                color: brandGold,
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.45))",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
