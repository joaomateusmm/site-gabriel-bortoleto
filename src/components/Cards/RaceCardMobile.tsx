"use client";

import Interlagos3D from "@/components/Interlagos3D";
import CountUp from "@/components/CountUp";
import GlareHover from "@/components/GlareHoverMobile";
import ShinyText from "@/components/ShinyText";
import ShinyText2 from "@/components/ShinyText2";
import AnimatedContent from "@/components/AnimatedContent";
import DecryptedText from "@/components/DecryptedText";

export default function RaceCardMobile() {
  return (
    <div className="w-full flex justify-center mb-8">
      <AnimatedContent
        distance={250}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <h1 className="text-white/50 text-md font-bold mb-2 text-center">
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
        <div className="flex flex-col gap-3 items-center w-[80vw] rounded-md backdrop-blur-lg">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div className="flex flex-row items-center justify-between gap-4 py-4 rounded-lg">
              <div className="flex flex-col items-center">
                <div
                  className="cursor-pointer -mt-12"
                  style={{ width: "150px", height: "150px" }}
                >
                  <Interlagos3D />
                </div>
                <ShinyText2
                  text="MÔNACO GP"
                  disabled={false}
                  speed={2}
                  className="text-white/70 text-md font-medium"
                />
              </div>
              <div className="border-r border-[rgba(255,255,255,0.19)] h-32 w-1"></div>
              <div className="flex flex-col items-center gap-6">
                <CountUp
                  from={0}
                  to={19}
                  separator=","
                  direction="up"
                  duration={2}
                  className="text-white/80 text-6xl font-bold"
                />
                <ShinyText
                  text="PONTOS 2025"
                  disabled={false}
                  speed={4}
                  className="text-white/70 text-md font-medium"
                />
              </div>
            </div>
          </GlareHover>
        </div>
      </AnimatedContent>
    </div>
  );
}
