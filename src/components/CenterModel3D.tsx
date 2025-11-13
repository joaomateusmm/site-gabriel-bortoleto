"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";
import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import Noise from "@/components/Noise";

const springConfig = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface ModelProps {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  isMobile: boolean;
}

function Model({ rotateX, rotateY, isMobile }: ModelProps) {
  const gltf = useGLTF("/models/helmet.glb");
  const groupRef = useRef<THREE.Group>(null);
  const materializedRef = useRef(false);

  // Define escala baseada no tamanho da tela
  const modelScale = isMobile ? 1.0 : 1.7;
  const modelPositionY = isMobile ? 0.2 : 0.3;

  // Aplica material ao modelo - APENAS UMA VEZ
  if (!materializedRef.current) {
    gltf.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        // Propriedades para brilho e reflexão
        material.metalness = 5; // Aumenta reflexão metálica
        material.roughness = 0.001; // Diminui rugosidade = mais brilhante
        material.envMapIntensity = 5; // Aumenta intensidade de reflexão do ambiente
        material.emissiveIntensity = 0.05; // Leve brilho próprio
        material.emissive = new THREE.Color("#0a1f15"); // Tom verde escuro
        material.side = THREE.FrontSide; // Renderiza apenas a frente
        material.transparent = false; // Desabilita transparência
        material.opacity = 1; // Opacidade total
        material.depthWrite = true; // Habilita escrita de profundidade
        material.depthTest = true; // Habilita teste de profundidade
        material.needsUpdate = true;
      }
    });
    materializedRef.current = true;
  }

  // Atualiza apenas a rotação do modelo baseado nos motion values
  useFrame(() => {
    if (groupRef.current) {
      // Converte graus para radianos e aplica à rotação base
      const rotXRad = (rotateX.get() * Math.PI) / 180;
      const rotYRad = (rotateY.get() * Math.PI) / 180;

      groupRef.current.rotation.x = 0.4 + rotXRad;
      groupRef.current.rotation.y = Math.PI + rotYRad;

      // Posição fixa no centro - sem movimento
      groupRef.current.position.x = 0;
      groupRef.current.position.y = 0;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={gltf.scene}
        scale={modelScale}
        position={[0, modelPositionY, 0]}
      />
    </group>
  );
}

export default function CenterModel3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  // Motion values apenas para rotação
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const rotateAmplitude = 14; // Amplitude da rotação em graus

  useEffect(() => {
    // APENAS NO MOBILE: Função para capturar toque/clique na tela e aplicar rotação
    function handleTouchOrClick(e: MouseEvent | TouchEvent) {
      if (!isMobile) return; // Ignora no desktop

      let clientX: number, clientY: number;

      if (e instanceof TouchEvent && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      // Calcula offset do centro da tela
      const offsetX = clientX - window.innerWidth / 2;
      const offsetY = clientY - window.innerHeight / 2;

      // Calcula rotação baseada na posição do toque
      const rotationX = (offsetY / (window.innerHeight / 2)) * rotateAmplitude;
      const rotationY = (offsetX / (window.innerWidth / 2)) * rotateAmplitude;

      // Aplica apenas os valores de rotação
      rotateX.set(rotationX);
      rotateY.set(rotationY);
    }

    // Função para resetar rotação
    function handleResetRotation() {
      if (!isMobile) return;
      rotateX.set(0);
      rotateY.set(0);
    }

    if (isMobile) {
      // Apenas no mobile: adiciona listeners de toque
      window.addEventListener("touchstart", handleTouchOrClick);
      window.addEventListener("touchmove", handleTouchOrClick);
      window.addEventListener("touchend", handleResetRotation);
    }

    // Cleanup
    return () => {
      if (isMobile) {
        window.removeEventListener("touchstart", handleTouchOrClick);
        window.removeEventListener("touchmove", handleTouchOrClick);
        window.removeEventListener("touchend", handleResetRotation);
      }
    };
  }, [rotateX, rotateY, isMobile]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "transparent",
        perspective: "800px",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      {/* Efeito de Noise sobre o modelo 3D */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <Noise
          patternSize={150}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={14}
        />
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          preserveDrawingBuffer: false,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          depth: true, // Habilita depth buffer
        }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "none" }}
      >
        {/* Luz ambiente esverdeada e escura para integrar com o background */}
        <ambientLight intensity={0.08} color="#BAFFC7" />

        {/* Luz direcional principal com tom verde */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.6}
          color="#0FFF1B"
        />

        {/* Luz de preenchimento verde mais suave */}
        <directionalLight
          position={[-5, -5, -5]}
          intensity={0.6}
          color="#B30000"
        />

        {/* Luz de destaque sutil de cima */}
        <directionalLight position={[0, 10, 0]} intensity={0.3} color="#fff" />

        <Model rotateX={rotateX} rotateY={rotateY} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
