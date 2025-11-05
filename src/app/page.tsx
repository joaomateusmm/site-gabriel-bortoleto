"use client";

import Interlagos3D from "@/components/Interlagos3D";
import CountUp from "@/components/CountUp";
import GlareHover from "@/components/GlareHover";
import GlareHover2 from "@/components/GlareHover2";
import ShinyText from "@/components/ShinyText";
import ShinyText2 from "@/components/ShinyText2";
import Aurora from "@/components/Aurora";
import AnimatedContent from "@/components/AnimatedContent";
import { Button } from "@/components/ui/button";
import LiquidEther from "@/components/LiquidEther";
import CenterModel3D from "@/components/CenterModel3D";

export default function Home() {
  return (
    <div
      className="bg-[#000a03] "
      style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      {/* Background Ether - Z-index 0 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "auto",
        }}
      >
        <LiquidEther
          colors={["#4dff29", "#22b44e", "#b0f0a3"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={true}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Modelo 3D Central - Z-index 5 (acima do Ether, abaixo dos cards) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        <CenterModel3D />
      </div>

      {/* Header - Z-index 10 */}
      <div
        className="flex justify-between items-center w-full px-12"
        style={{
          position: "absolute",
          bottom: "85%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        <div className="flex flex-col bg-white/20 px-4 py-1 rounded-md backdrop-blur-md">
          <h1 className="text-lime-300 text-3xl -mb-2">Gabriel</h1>
          <h1 className="text-gray-900 text-3xl font-bold">BORTOLETO</h1>
        </div>
        <div className="flex gap-4">
          <Button className="py-9.5 px-auto group bg-white/0 hover:bg-white/10 border-3 border-green-800 transition-all duration-300 overflow-hidden">
            <h1 className="text-2xl font-bold">CORRIDAS</h1>
          </Button>
          <Button
            className="py-10 px-8 group bg-gray-200 hover:bg-gray-300 transition-all duration-300 overflow-hidden"
            style={{ width: "80px" }}
          >
            <div className="flex flex-col gap-3">
              <div className="w-6 h-1 -translate-x-1 bg-gray-800 rounded-full transition-all duration-300 group-hover:w-8 group-hover:-translate-x-2"></div>
              <div className="w-6 h-1 bg-gray-800 rounded-full transition-all duration-300 group-hover:w-7"></div>
              <div className="w-6 translate-x-1 h-1 bg-gray-800 rounded-full transition-all duration-300 group-hover:w-8 group-hover:translate-x-2"></div>
            </div>
          </Button>
        </div>
      </div>

      <div
        className="flex justify-between items-end px-12 pb-12"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        {/* Card Esquerdo */}

        <div>
          <AnimatedContent
            distance={250}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <h1 className="text-white/50 text-md font-bold">Última Notícia</h1>
            <div className="flex flex-col gap-3 items-start">
              <GlareHover2
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div
                  className="flex flex-col items-start gap-4 rounded-lg justify-between px-4 custom-scrollbar"
                  style={{ maxHeight: "350px", overflowY: "auto" }}
                >
                  <div className="bg-white/10 px-4 py-1 rounded-full">
                    <h1 className="text-white/50 text-sm font-medium">
                      23 / 10 / 25
                    </h1>
                  </div>
                  <div>
                    <p className="text-md text-white/70 font-medium">
                      Gabriel Bortoleto estreia no GP do México de F1
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">
                      O piloto brasileiro Gabriel Bortoleto, natural de Osasco
                      (SP), encara neste fim de semana mais um desafio em sua
                      temporada de estreia na Fórmula 1. O jovem competidor
                      disputará pela primeira vez o Grande Prêmio do México, 20ª
                      etapa do Campeonato Mundial, que será realizado no
                      tradicional Autódromo Hermanos Rodríguez, na capital
                      mexicana.
                      <p className="text-sm text-muted-foreground mt-2 font-medium">
                        A etapa, ainda na AMérica do Norte, sucede um fim de
                        semana complicado em Austin, no Texas (EUA), onde
                        Bortoleto terminou a corrida na 18ª posição. O foco
                        agora está totalmente voltado em reagir e retomar o bom
                        ritmo apresentado nas provas anteriores.
                      </p>
                      <p className="text-sm text-muted-foreground/80 mt-2 font-medium">
                        “Estou muito animado para correr no México neste fim de
                        semana.
                      </p>
                      <p className="text-sm text-muted-foreground/50 font-medium">
                        Ouvi muito sobre a atmosfera e a energia dos fãs,
                      </p>
                      <p className="text-sm text-muted-foreground/30 font-medium">
                        e é empolgante finalmente poder viver isso pessoalmente.
                      </p>
                      <p className="text-sm text-muted-foreground/10 font-medium">
                        É uma pista cheia de história, por onde passaram
                      </p>
                    </p>
                  </div>
                  <div>
                    <Button className="cursor-pointer px-6 py-2 rounded-full border-white/30 text-white/70 hover:bg-white/10 hover:border-white/50 hover:text-white transition-all duration-200">
                      ler Mais
                    </Button>
                  </div>
                </div>
              </GlareHover2>
            </div>
          </AnimatedContent>
        </div>

        {/* Card Direito */}
        <div>
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
            <h1 className="text-white/50 text-md font-bold">Próx. Corrida</h1>
            <div className="flex flex-col gap-3 items-end">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div className="flex flex-col items-center gap-4 py-4 rounded-lg">
                  <div
                    className="cursor-pointer -mt-8"
                    style={{ width: "200px", height: "200px" }}
                  >
                    <Interlagos3D />
                  </div>
                  <ShinyText2
                    text="MÔNACO GP"
                    disabled={false}
                    speed={2}
                    className="text-white/70 text-md font-medium"
                  />
                  <div className=" border-t border-[#ffffff31] h-1 w-[70%]"></div>
                  <ShinyText
                    text="PONTOS 2025"
                    disabled={false}
                    speed={4}
                    className="text-white/70 text-md font-medium"
                  />
                  <CountUp
                    from={0}
                    to={19}
                    separator=","
                    direction="up"
                    duration={2}
                    className="text-white/80 text-6xl font-bold"
                  />
                </div>
              </GlareHover>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}
