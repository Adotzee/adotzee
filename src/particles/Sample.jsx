import React from "react";
import ParticlesBackground2 from "./particle2";

function Sample() {
  return (
    <div className="absolute top-0 left-0 w-full h-full min-h-screen bg-gray z-0">
      {/* ✅ Ensure particles are in the background */}
      <ParticlesBackground2 />
    </div>
  );
}

export default Sample;
