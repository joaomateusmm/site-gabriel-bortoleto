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
import { useScreenSize } from "@/hooks/useMediaQuery";
import ScrollVelocity from "@/components/ScrollVelocity";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAnimations, setShowAnimations] = useState(false);
  const { isMobile, isTablet, isDesktop } = useScreenSize();

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

      <div
        className="bg-[#000a03]"
        style={{
          width: "100vw",
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

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
