"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function TestCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotação automática suave
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#00ff00"
        emissive="#00ff00"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function CenterModel3D() {
  return (
    <div style={{ width: "100%", height: "100%", background: "transparent" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          preserveDrawingBuffer: false,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />

        <TestCube />

        {/* OrbitControls para você testar a posição e rotação */}
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
}
