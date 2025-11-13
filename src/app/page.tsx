"use client";

import LiquidEther from "@/components/LiquidEther";
import CenterModel3D from "@/components/CenterModel3D";
import LoadingScreen from "@/components/LoadingScreen";
import MenuOverlay from "@/components/MenuOverlay";
import HeaderDesktop from "@/components/Header/HeaderDesktop";
import HeaderTablet from "@/components/Header/HeaderTablet";
import HeaderMobile from "@/components/Header/HeaderMobile";
import NewsCardDesktop from "@/components/Cards/NewsCardDesktop";
import RaceCardDesktop from "@/components/Cards/RaceCardDesktop";
import RaceCardMobile from "@/components/Cards/RaceCardMobile";
import TrackInfoDesktop from "@/components/Cards/TrackInfoDesktop";
import TrackInfoMobile from "@/components/Cards/TrackInfoMobile";
import { useScreenSize } from "@/hooks/useMediaQuery";
import ScrollVelocity from "@/components/ScrollVelocity";
import DotGrid from "@/components/DotGrid";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAnimations, setShowAnimations] = useState(false);
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const races = [
    {
      round: "01",
      location: "Austrália",
      date: "16 Mar 2025",
      position: "DNF",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "02",
      location: "China",
      date: "23 Mar 2025",
      position: "14º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "03",
      location: "Japão",
      date: "06 Abr 2025",
      position: "19º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "04",
      location: "Bahrein",
      date: "13 Abr 2025",
      position: "18º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "05",
      location: "Arábia Saudita",
      date: "20 Abr 2025",
      position: "18º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "06",
      location: "Miami",
      date: "04 Mai 2025",
      position: "DNF",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "07",
      location: "Emilia Romagna",
      date: "18 Mai 2025",
      position: "18º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "08",
      location: "Mônaco",
      date: "25 Mai 2025",
      position: "14º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "09",
      location: "Espanha",
      date: "01 Jun 2025",
      position: "12º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "10",
      location: "Canadá",
      date: "15 Jun 2025",
      position: "14º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "11",
      location: "Áustria",
      date: "29 Jun 2025",
      position: "8º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "12",
      location: "Grã-Bretanha",
      date: "06 Jul 2025",
      position: "DNF",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "13",
      location: "Bélgica",
      date: "27 Jul 2025",
      position: "9º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "14",
      location: "Hungria",
      date: "03 Ago 2025",
      position: "6º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "15",
      location: "Holanda",
      date: "31 Ago 2025",
      position: "15º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "16",
      location: "Itália",
      date: "07 Set 2025",
      position: "8º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "17",
      location: "Azerbaijão",
      date: "21 Set 2025",
      position: "11º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "18",
      location: "Singapura",
      date: "05 Out 2025",
      position: "17º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "19",
      location: "Estados Unidos",
      date: "19 Out 2025",
      position: "18º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "20",
      location: "México",
      date: "26 Out 2025",
      position: "10º",
      fastestLap: "-",
      status: "completed",
    },
    {
      round: "21",
      location: "Brasil",
      date: "09 Nov 2025",
      position: "DNF",
      fastestLap: "",
      status: "completed",
    },
    {
      round: "22",
      location: "Las Vegas",
      date: "22 Nov 2025",
      position: "",
      fastestLap: "",
      status: "current",
    },
    {
      round: "23",
      location: "Qatar",
      date: "30 Nov 2025",
      position: "",
      fastestLap: "",
      status: "upcoming",
    },
    {
      round: "24",
      location: "Abu Dhabi",
      date: "07 Dez 2025",
      position: "",
      fastestLap: "",
      status: "upcoming",
    },
  ];

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Pequeno delay para garantir que a tela de loading saiu completamente
    setTimeout(() => {
      setShowAnimations(true);
    }, 100);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      </AnimatePresence>
      <section>
        <div
          className="bg-[#000a03] w-full"
          style={{
            minHeight: "100vh",
            position: "relative",
            overflow: isDesktop ? "hidden" : "auto",
          }}
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
              cursorSize={80}
              isViscous={true}
              viscous={20}
              iterationsViscous={16}
              iterationsPoisson={16}
              resolution={0.25}
              isBounce={true}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
              zIndex: 5,
              pointerEvents: "none",
            }}
          >
            <ScrollVelocity
              texts={["Grabriel Sauber", "Kick Bortoleto"]}
              velocity={100}
              className="font-clash-display font-bold custom-scroll-text text-white/5 text-4xl md:text-9xl"
            />
          </div>

          {/* Modelo 3D Central - Z-index 5 (acima do Ether, abaixo dos cards) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 5,
              pointerEvents: "none",
            }}
          >
            <CenterModel3D />
          </div>

          {/* Header - Z-index 10 */}
          {showAnimations && (
            <>
              {isDesktop && (
                <HeaderDesktop onMenuClick={() => setIsMenuOpen(true)} />
              )}
              {isTablet && (
                <HeaderTablet onMenuClick={() => setIsMenuOpen(true)} />
              )}
              {isMobile && (
                <HeaderMobile onMenuClick={() => setIsMenuOpen(true)} />
              )}
            </>
          )}

          {showAnimations && (
            <>
              {/* Cards Desktop */}
              {isDesktop && (
                <div
                  className="flex flex-row justify-between items-end px-12 pb-12 gap-0"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    pointerEvents: "auto",
                  }}
                >
                  <NewsCardDesktop />
                  <RaceCardDesktop />
                </div>
              )}

              {/* Card Mobile */}
              {!isDesktop && (
                <div
                  className="px-4"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    pointerEvents: "auto",
                  }}
                >
                  <RaceCardMobile />
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <section className="bg-[#0c0c0c] w-full min-h-[100vh] overflow-hidden py-12 relative">
        {/* Background DotGrid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            willChange: "transform",
          }}
        >
          <DotGrid
            dotSize={2}
            gap={20}
            baseColor="#1a1a1a"
            activeColor="#217510"
            proximity={100}
            shockRadius={150}
            shockStrength={5}
            resistance={500}
            returnDuration={1.5}
          />
        </div>

        {/* Conteúdo da Section - Z-index 10 */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <div className="mb-8 px-8 md:px-16">
            <h1 className="text-6xl font-bold font-clash-display text-gray-200">
              Minhas Corridas
            </h1>
          </div>
          <div className="flex flex-col items-center gap-8 w-full px-8 md:px-16">
            {/* Cards Desktop */}
            {isDesktop && <TrackInfoDesktop />}

            {/* Cards Mobile/Tablet */}
            {!isDesktop && <TrackInfoMobile />}

            <div className="w-full px-6">
              <Table>
                <TableCaption>
                  Temporada 2025 - Resultados até agora
                </TableCaption>
                <TableHeader>
                  <TableRow className=" border-white/10 hover:bg-white/5">
                    <TableHead className="text-lime-200 font-bold text-xs">
                      Round
                    </TableHead>
                    <TableHead className="text-lime-200 font-bold text-xs">
                      Localização
                    </TableHead>
                    <TableHead className="text-lime-200 font-bold text-xs ">
                      Data
                    </TableHead>
                    <TableHead className="text-lime-200 font-bold text-xs ">
                      Colocação
                    </TableHead>
                    <TableHead className="text-lime-200 font-bold text-xs text-right">
                      Volta Rápida
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {races.map((race) => (
                    <TableRow
                      key={race.round}
                      className={`border-white/10 ${
                        race.status === "current"
                          ? "bg-lime-500/10 hover:bg-lime-500/40"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <TableCell
                        className={`font-bold font-clash-display text-4xl py-6 ${
                          race.status === "completed"
                            ? "text-white/60"
                            : "text-white"
                        }`}
                      >
                        {race.round}
                      </TableCell>
                      <TableCell
                        className={`font-bold font-clash-display text-4xl py-6 ${
                          race.status === "completed"
                            ? "text-white/60"
                            : "text-white"
                        }`}
                      >
                        {race.location}
                      </TableCell>
                      <TableCell
                        className={`font-bold font-clash-display text-4xl py-6 ${
                          race.status === "completed"
                            ? "text-white/60"
                            : "text-white"
                        }`}
                      >
                        {race.date}
                      </TableCell>
                      <TableCell
                        className={`font-bold font-clash-display text-4xl py-6 ${
                          race.status === "completed"
                            ? "text-white/60"
                            : "text-white"
                        }`}
                      >
                        {race.position}
                      </TableCell>
                      <TableCell
                        className={`font-bold font-clash-display text-4xl text-right py-6 ${
                          race.status === "completed"
                            ? "text-white/60"
                            : "text-white"
                        }`}
                      >
                        {race.fastestLap}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
