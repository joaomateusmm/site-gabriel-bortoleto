"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import GlareHover2 from "@/components/GlareHover2";
import AnimatedContent from "@/components/AnimatedContent";
import DecryptedText from "@/components/DecryptedText";

export default function NewsCardDesktop() {
  return (
    <div className="w-auto">
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
        <h1 className="text-white/50 text-md font-bold mb-2">
          <DecryptedText
            text="Última Notícia"
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
              className="flex flex-col backdrop-blur-lg items-start gap-4 rounded-lg justify-between px-4 py-4 custom-scrollbar w-full"
              style={{ maxHeight: "380px", overflowY: "auto" }}
            >
              <div className="bg-white/10 px-4 py-1 rounded-full">
                <h1 className="text-white/50 text-sm font-medium">
                  10 / 11 / 25
                </h1>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  width={228}
                  height={128}
                  src="/news-1.webp"
                  alt="Notícia GP do México"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <p className="text-md text-white/70 font-medium">
                  Bortoleto frustra em estreia no Brasil e promete se reerguer
                  para Las Vegas: Não tem como ser pior
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  Gabriel Bortoleto não teve uma estreia dos sonhos em sua home
                  race, no GP de São Paulo, que aconteceu neste domingo, no
                  Autódromo José Carlos Pace, em Interlagos. Pelo contrário, o
                  brasileiro teve que lidar com dois acidentes e abandnou a
                  corrida logo no início. Após a frustração, o piloto da Sauber
                  prometeu se reerguer em Las Vegas.
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  A etapa, ainda na AMérica do Norte, sucede um fim de semana
                  complicado em Austin, no Texas (EUA), onde Bortoleto terminou
                  a corrida na 18ª posição. O foco agora está totalmente voltado
                  em reagir e retomar o bom ritmo apresentado nas provas
                  anteriores.
                </p>
                <p className="text-sm text-muted-foreground/80 mt-2 font-medium">
                  Estou muito animado para correr no México neste fim de semana.
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
              </div>
              <div>
                <Button className="cursor-pointer px-6 py-2 text-sm rounded-full border-white/30 text-white/70 hover:bg-white/10 hover:border-white/50 hover:text-white transition-all duration-200">
                  ler Mais
                </Button>
              </div>
            </div>
          </GlareHover2>
        </div>
      </AnimatedContent>
    </div>
  );
}
