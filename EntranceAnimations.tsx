import { useState, useEffect } from "react";

// ========================================
// ANIMATION VARIANT 1: TORN PAPER OPENING
// ========================================
export function EntranceAnimation_TornPaper({ onComplete }: { onComplete: () => void }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(onComplete, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Torn Paper Overlay - Animates outward when clicked */}
      <div
        className={`absolute inset-0 transition-all duration-1500 ease-out ${
          clicked ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{
          backgroundImage: "url('/assets/images/torn-paper-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Center hole that tears open */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
            clicked ? "w-[200%] h-[200%]" : "w-32 h-32"
          }`}
          style={{
            background: "transparent",
            borderRadius: "50%",
            boxShadow: clicked
              ? "inset 0 0 0 0 rgba(0,0,0,0)"
              : "inset 0 0 80px 40px rgba(255,255,255,0.5)",
          }}
        />
      </div>

      {/* Logo - Scales up and forward as paper tears */}
      <div
        className="relative cursor-pointer transform transition-all duration-1000"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        style={{
          transform: clicked
            ? "scale(1.5) translateZ(100px)"
            : hovered
              ? "scale(1.05)"
              : "scale(1)",
        }}
      >
        {/* Golden Glow */}
        <div
          className={`absolute inset-0 rounded-full bg-[#D4AF37] blur-[100px] transition-opacity duration-700 ${
            hovered || clicked ? "opacity-40" : "opacity-0"
          }`}
        />

        {/* Logo */}
        <img
          src="/xceptional-logo-hero.png"
          alt="Xceptional Design Lab"
          className="relative z-10 w-[300px] sm:w-[400px] md:w-[600px] h-auto object-contain"
        />

        {/* Click Prompt */}
        {!clicked && (
          <div
            className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm tracking-[0.3em] uppercase transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Click to Enter
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// ANIMATION VARIANT 2: VAULT DOOR OPENING
// ========================================
export function EntranceAnimation_VaultDoor({ onComplete }: { onComplete: () => void }) {
  const [hovered, setHovered] = useState(false);
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    setOpening(true);
    setTimeout(onComplete, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Vault Door - Two halves that swing open */}
      <div className="absolute inset-0 flex">
        {/* Left Door Half */}
        <div
          className={`w-1/2 h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 transition-transform duration-2000 ease-in-out origin-left ${
            opening ? "-translate-x-full rotate-y-90" : ""
          }`}
          style={{
            boxShadow: "inset -20px 0 60px rgba(0,0,0,0.5)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Door Details */}
          <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
            <div className="w-32 h-32 border-4 border-[#D4AF37] rounded-full flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Door Half */}
        <div
          className={`w-1/2 h-full bg-gradient-to-l from-gray-900 via-gray-800 to-gray-700 transition-transform duration-2000 ease-in-out origin-right ${
            opening ? "translate-x-full rotate-y-90" : ""
          }`}
          style={{
            boxShadow: "inset 20px 0 60px rgba(0,0,0,0.5)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Door Details */}
          <div className="absolute top-1/2 left-12 transform -translate-y-1/2">
            <div className="w-32 h-32 border-4 border-[#D4AF37] rounded-full flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo - Fades in as vault opens */}
      <div
        className={`relative cursor-pointer z-10 transition-all duration-1500 ${
          opening ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        {/* Golden Glow */}
        <div
          className={`absolute inset-0 rounded-full bg-[#D4AF37] blur-[120px] transition-opacity duration-700 ${
            hovered ? "opacity-60" : "opacity-30"
          }`}
        />

        {/* Logo */}
        <img
          src="/xceptional-logo-hero.png"
          alt="Xceptional Design Lab"
          className="relative z-10 w-[300px] sm:w-[400px] md:w-[600px] h-auto object-contain"
        />

        {/* Click Prompt */}
        {!opening && (
          <div
            className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-[#D4AF37] text-sm tracking-[0.3em] uppercase transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-60"
            }`}
          >
            Click to Open
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// ANIMATION VARIANT 3: GOLD CURTAIN REVEAL
// ========================================
export function EntranceAnimation_Curtains({ onComplete }: { onComplete: () => void }) {
  const [hovered, setHovered] = useState(false);
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    setOpening(true);
    setTimeout(onComplete, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Left Curtain */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-2000 ease-out ${
          opening ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          background: "linear-gradient(90deg, #B8941E 0%, #D4AF37 50%, #F2D06B 100%)",
          boxShadow: "inset -40px 0 80px rgba(0,0,0,0.3)",
        }}
      >
        {/* Curtain Folds */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-[12.5%]"
            style={{
              left: `${i * 12.5}%`,
              background:
                i % 2 === 0
                  ? "linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)"
                  : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-2000 ease-out ${
          opening ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          background: "linear-gradient(270deg, #B8941E 0%, #D4AF37 50%, #F2D06B 100%)",
          boxShadow: "inset 40px 0 80px rgba(0,0,0,0.3)",
        }}
      >
        {/* Curtain Folds */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-[12.5%]"
            style={{
              left: `${i * 12.5}%`,
              background:
                i % 2 === 0
                  ? "linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)"
                  : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* Curtain Rod */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-800 to-gray-700 z-10 shadow-lg" />

      {/* Logo - Visible behind curtains, scales up as they open */}
      <div
        className={`relative cursor-pointer z-0 transition-all duration-2000 ${
          opening ? "scale-110 opacity-100" : "scale-100 opacity-80"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        {/* Golden Spotlight */}
        <div
          className={`absolute inset-0 rounded-full bg-[#D4AF37] blur-[150px] transition-opacity duration-700 ${
            hovered || opening ? "opacity-40" : "opacity-20"
          }`}
        />

        {/* Logo */}
        <img
          src="/xceptional-logo-hero.png"
          alt="Xceptional Design Lab"
          className="relative z-10 w-[300px] sm:w-[400px] md:w-[600px] h-auto object-contain"
        />

        {/* Click Prompt */}
        {!opening && (
          <div
            className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-[#D4AF37] text-sm tracking-[0.3em] uppercase transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-60"
            }`}
          >
            Click to Reveal
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// HOW TO USE IN Home.tsx
// ========================================
/*

Replace your current entrance overlay section with one of these:

// Option 1: Torn Paper
<EntranceAnimation_TornPaper onComplete={() => setEntered(true)} />

// Option 2: Vault Door
<EntranceAnimation_VaultDoor onComplete={() => setEntered(true)} />

// Option 3: Curtains
<EntranceAnimation_Curtains onComplete={() => setEntered(true)} />

Full example:

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-x-hidden">
      {!entered && <EntranceAnimation_VaultDoor onComplete={() => setEntered(true)} />}
      
      <div className={`transition-opacity duration-1000 ${entered ? "opacity-100" : "opacity-0"}`}>
        <Navigation />
        <main>
          ... rest of site ...
        </main>
      </div>
    </div>
  );
}

*/
