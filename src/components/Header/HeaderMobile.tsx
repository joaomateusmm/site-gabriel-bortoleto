"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderMobileProps {
  onMenuClick: () => void;
}

export default function HeaderMobile({ onMenuClick }: HeaderMobileProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMenuClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onMenuClick();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div
      className="flex justify-between flex-col items-center w-full px-4"
      style={{
        position: "absolute",
        top: "20px",
        left: "0",
        right: "0",
        zIndex: 10,
        pointerEvents: "auto",
      }}
    >
      <div>
        <Image
          src="/icons/logo.svg"
          alt="Gabriel Bortoleto Logo"
          width={80}
          height={80}
          priority
          className="opacity-80 w-22 h-22"
        />
      </div>
      <div className="flex gap-2">
        <Button className="py-6 px-3 cursor-pointer group bg-black/5 backdrop-blur-lg border-2 border-green-900/70 transition-all duration-300">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/helmet.svg"
              alt="Corridas Icon"
              width={18}
              height={18}
              className="inline-block"
            />
            <span className="text-sm font-bold">CORRIDAS</span>
          </div>
        </Button>
        <Button
          onClick={handleMenuClick}
          className="py-6 px-4 group bg-black/5 cursor-pointer border-2 backdrop-blur-lg border-green-900/70 transition-all duration-400"
        >
          <div className="flex flex-col items-end gap-1.5">
            <div
              className={`w-5 h-1 duration-300 bg-gray-100 rounded-full transition-transform ${
                isAnimating ? "translate-x-1" : ""
              }`}
            ></div>
            <div
              className={`w-4 h-1 duration-300 bg-gray-100 rounded-full transition-transform ${
                isAnimating ? "-translate-x-1" : ""
              }`}
            ></div>
          </div>
        </Button>
      </div>
    </div>
  );
}
