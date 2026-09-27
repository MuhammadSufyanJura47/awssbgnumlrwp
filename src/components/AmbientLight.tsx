"use client";

import LightPillar from "@/components/LightPillar";

export function AmbientLight() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#071b10]/20">
      <LightPillar
        topColor="#baf5d0"
        bottomColor="#147a44"
        intensity={0.85}
        glowAmount={0.008}
        pillarWidth={3.8}
        pillarHeight={0.38}
        rotationSpeed={0.12}
        quality="medium"
        mixBlendMode="normal"
        className="opacity-45"
      />
    </div>
  );
}
