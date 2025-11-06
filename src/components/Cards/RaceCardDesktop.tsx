"use client";

import Interlagos3D from "@/components/Interlagos3D";
import CountUp from "@/components/CountUp";
import GlareHover from "@/components/GlareHover";
import ShinyText from "@/components/ShinyText";
import ShinyText2 from "@/components/ShinyText2";
import AnimatedContent from "@/components/AnimatedContent";
import DecryptedText from "@/components/DecryptedText";

export default function RaceCardDesktop() {
  return (
    <div className="w-auto">
      <AnimatedContent
        distance={250}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <h1 className="text-white/50 text-md font-bold mb-2">
          <DecryptedText
            text="Próxima Corrida"
            speed={150}
            maxIterations={20}
            characters="ABCD1234!?"
            className="string"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            sequential
            animateOn="view"
          />
        </h1>
        <div className="flex flex-col gap-3 items-center md:items-end backdrop-blur-md">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4 py-3 sm:py-4 rounded-lg">
              <div
                className="cursor-pointer -mt-4 sm:-mt-8"
                style={{ width: "150px", height: "150px" }}
              >
                <Interlagos3D />
              </div>
              <ShinyText2
                text="MÔNACO GP"
                disabled={false}
                speed={2}
                className="text-white/70 text-sm sm:text-md font-medium"
              />
              <div className="border-t border-[#ffffff31] h-1 w-[70%]"></div>
              <ShinyText
                text="PONTOS 2025"
                disabled={false}
                speed={4}
                className="text-white/70 text-sm sm:text-md font-medium"
              />
              <CountUp
                from={0}
                to={19}
                separator=","
                direction="up"
                duration={2}
                className="text-white/80 text-4xl sm:text-5xl md:text-6xl font-bold"
              />
            </div>
          </GlareHover>
        </div>
      </AnimatedContent>
    </div>
  );
}
