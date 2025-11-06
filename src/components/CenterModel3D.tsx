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
  moveX: MotionValue<number>;
  moveY: MotionValue<number>;
  isMobile: boolean;
}

function Model({ rotateX, rotateY, moveX, moveY, isMobile }: ModelProps) {
  const gltf = useGLTF("/models/helmet.glb");
  const groupRef = useRef<THREE.Group>(null);

  // Define escala baseada no tamanho da tela
  const modelScale = isMobile ? 1.0 : 1.7;
  const modelPositionY = isMobile ? 0.2 : 0.3;

  // Aplica material ao modelo
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

  // Atualiza a rotação e posição do modelo baseado nos motion values
  useFrame(() => {
    if (groupRef.current) {
      // Converte graus para radianos e aplica à rotação base
      const rotXRad = (rotateX.get() * Math.PI) / 180;
      const rotYRad = (rotateY.get() * Math.PI) / 180;

      groupRef.current.rotation.x = 0.4 + rotXRad; // Invertido aqui
      groupRef.current.rotation.y = Math.PI + rotYRad;

      // Adiciona movimento sutil de translação (capacete segue o cursor)
      groupRef.current.position.x = moveX.get() * 0.15; // Movimento horizontal seguindo o cursor
      groupRef.current.position.y = moveY.get() * 0.15; // Movimento vertical seguindo o cursor
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
  // Motion values para rotação
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  // Motion values para movimento/translação
  const moveX = useSpring(useMotionValue(0), springConfig);
  const moveY = useSpring(useMotionValue(0), springConfig);

  const rotateAmplitude = 14; // Amplitude da rotação em graus

  useEffect(() => {
    // Função para capturar coordenadas GLOBAIS do mouse (independente de qualquer elemento)
    function handleGlobalMouseMove(e: MouseEvent) {
      // Pega as coordenadas exatas do cursor
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calcula offset do centro da tela
      const offsetX = mouseX - window.innerWidth / 2;
      const offsetY = mouseY - window.innerHeight / 2;

      // Normaliza para valores entre -1 e 1
      const normalizedX = offsetX / (window.innerWidth / 2);
      const normalizedY = offsetY / (window.innerHeight / 2);

      // Calcula rotação baseada na posição do mouse (invertido para criar efeito tilt)
      const rotationX = (offsetY / (window.innerHeight / 2)) * rotateAmplitude; // Removido o sinal negativo
      const rotationY = (offsetX / (window.innerWidth / 2)) * rotateAmplitude;

      // Aplica os valores
      rotateX.set(rotationX);
      rotateY.set(rotationY);
      moveX.set(normalizedX);
      moveY.set(-normalizedY); // Inverte Y para seguir o cursor corretamente
    }

    // Função para resetar quando o mouse sair da janela
    function handleGlobalMouseLeave() {
      rotateX.set(0);
      rotateY.set(0);
      moveX.set(0);
      moveY.set(0);
    }

    // Adiciona event listeners GLOBAIS no window
    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseleave", handleGlobalMouseLeave);

    // Cleanup quando o componente desmontar
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseleave", handleGlobalMouseLeave);
    };
  }, [rotateX, rotateY, moveX, moveY]);

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
        style={{ pointerEvents: "none" }}
      >
        {/* Luz ambiente esverdeada e escura para integrar com o background */}
        <ambientLight intensity={0.1} color="#BAFFC7" />

        {/* Luz direcional principal com tom verde */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          color="#0FFF1B"
        />

        {/* Luz de preenchimento verde mais suave */}
        <directionalLight
          position={[-5, -5, -5]}
          intensity={0.8}
          color="#B30000"
        />

        {/* Luz de destaque sutil de cima */}
        <directionalLight position={[0, 10, 0]} intensity={0.4} color="#fff" />

        <Model
          rotateX={rotateX}
          rotateY={rotateY}
          moveX={moveX}
          moveY={moveY}
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
}
