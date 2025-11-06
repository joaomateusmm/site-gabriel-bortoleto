"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderDesktopProps {
  onMenuClick: () => void;
}

export default function HeaderDesktop({ onMenuClick }: HeaderDesktopProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMenuClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onMenuClick();
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div
      className="flex justify-between items-center w-full px-12"
      style={{
        position: "absolute",
        bottom: "83%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        pointerEvents: "auto",
      }}
    >
      <div>
        <Image
          src="/icons/logo.svg"
          alt="Gabriel Bortoleto Logo"
          width={130}
          height={130}
          priority
          className="opacity-80 hover:scale-115 duration-400 saturate-0 hover:saturate-100 w-32 h-32"
        />
      </div>
      <div className="flex gap-4">
        <Button className="py-8.5 px-4 cursor-pointer group box-shadow bg-black/5 backdrop-blur-lg hover:bg-black/30 border-2 border-green-900/70 transition-all duration-300 overflow-hidden">
          <div className="flex items-center">
            <Image
              src="/icons/helmet.svg"
              alt="Corridas Icon"
              width={24}
              height={24}
              className="inline-block mr-4 group-hover:-rotate-12 transition-transform duration-300"
            />
            <span className="text-2xl font-bold">CORRIDAS</span>
          </div>
        </Button>
        <button
          onClick={handleMenuClick}
          className="group/button cursor-pointer relative inline-flex items-center box-shadow justify-center overflow-hidden rounded-md bg-black/5 backdrop-blur-lg py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-600/50 border-2 border-green-900/70"
          style={{ width: "70px", height: "70px" }}
        >
          <span className="text-lg flex flex-col gap-2 items-center">
            <div
              className={`h-1 bg-white rounded-full transition-all duration-300 ${
                isAnimating ? "w-7 translate-x-2" : "w-5"
              }`}
            ></div>
            <div
              className={`h-1 bg-white rounded-full transition-all duration-300 ${
                isAnimating ? "w-8" : "w-6"
              }`}
            ></div>
            <div
              className={`h-1 bg-white rounded-full transition-all duration-300 ${
                isAnimating ? "w-7 -translate-x-2" : "w-7"
              }`}
            ></div>
          </span>
          <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:transform-[skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/20"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
