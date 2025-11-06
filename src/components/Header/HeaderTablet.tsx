"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeaderTabletProps {
  onMenuClick: () => void;
}

export default function HeaderTablet({ onMenuClick }: HeaderTabletProps) {
  return (
    <div
      className="flex justify-between items-center w-full px-8"
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
          width={110}
          height={110}
          priority
          className="opacity-80 hover:scale-115 duration-400 saturate-0 hover:saturate-100 w-24 h-24"
        />
      </div>
      <div className="flex gap-3">
        <Button className="py-7 px-4 cursor-pointer group box-shadow bg-black/5 backdrop-blur-lg hover:bg-black/30 border-2 border-green-900/70 transition-all duration-300 overflow-hidden">
          <div className="flex items-center">
            <Image
              src="/icons/helmet.svg"
              alt="Corridas Icon"
              width={20}
              height={20}
              className="inline-block mr-3 group-hover:-rotate-12 transition-transform duration-300"
            />
            <span className="text-lg font-bold">CORRIDAS</span>
          </div>
        </Button>
        <Button
          onClick={onMenuClick}
          className="py-8 px-8 group bg-gray-100 cursor-pointer hover:bg-gray-50 transition-all duration-300 overflow-hidden"
          style={{ width: "60px" }}
        >
          <div className="flex flex-col gap-2.5">
            <div className="w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:w-6 group-hover:-translate-x-1.5"></div>
            <div className="w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:w-5.5"></div>
            <div className="w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:w-6 group-hover:translate-x-1.5"></div>
          </div>
        </Button>
      </div>
    </div>
  );
}
