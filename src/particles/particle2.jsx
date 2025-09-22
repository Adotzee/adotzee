import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import { loadImageShape } from "@tsparticles/shape-image"; // ✅ Ensure correct import

const ParticlesBackground2 = () => {
  const [init, setInit] = useState(false);

  const emojiUrls = [
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f52c.png", // 🔬 Microscope
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f9ea.png", // 🧪 Test tube
    // "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f9eb.png", // 🧫 Petri dish
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f9ec.png", // 🧬 DNA
    // "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f680.png", // 🚀 Rocket
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f321.png", // 🌡 Thermometer
    "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f4a1.png", // 💡 Light bulb
  ];
  

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadImageShape(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 120, links: { opacity: 0 } }, // No lines when grabbing
          push: { quantity: 2 },
          repulse: { distance: 200 },
        },
      },
      particles: {
        number: { value: 70, density: { enable: true, area: 800 } },
        move: { enable: true, speed: 1.2, outModes: { default: "out" } },
        opacity: { value: 1 },
        size: { value: { min: 5, max: 10 } },
        links: { enable: false }, // ✅ Disable connecting lines
        shape: {
          type: "image",
          options: {
            image: emojiUrls.map((url) => ({ src: url, width: 32, height: 32 })),
          },
        },
      },
      detectRetina: true,
    }),
    []
  );
  

  return init ? <Particles id="tsparticles" className="h-full" options={options} /> : null;
};

export default ParticlesBackground2;
