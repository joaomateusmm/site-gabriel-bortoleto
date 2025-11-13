"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";

function Track() {
  const gltf = useGLTF("/models/monaco-2.glb");
  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const previousMouseX = useRef(0);
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);
  const { gl } = useThree();
  const materializedRef = useRef(false);

  // Percorre todos os meshes e aplica material metálico brilhante - APENAS UMA VEZ
  if (!materializedRef.current) {
    gltf.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;

        // Cor base verde metálico brilhante
        material.color.set("#217042"); // Verde limão vibrante
        material.emissive.set("#29613B"); // Verde neon emissivo
        material.emissiveIntensity = 0.8; // Maior intensidade emissiva

        // Propriedades metálicas
        material.metalness = 1; // Muito metálico
        material.roughness = 0.1; // Pouco rugoso = mais brilhante

        material.needsUpdate = true;
      }
    });
    materializedRef.current = true;
  }

  useEffect(() => {
    const canvas = gl.domElement;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      previousMouseX.current = e.clientX;
      // Captura a rotação atual quando começa a arrastar
      if (groupRef.current) {
        targetRotation.current = groupRef.current.rotation.y;
        currentRotation.current = groupRef.current.rotation.y;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX.current;
        targetRotation.current += deltaX * 0.005; // Reduzido para movimento mais suave
        previousMouseX.current = e.clientX;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, gl.domElement]);

  // Animação suave com lerp
  useFrame(() => {
    if (groupRef.current) {
      if (!isDragging) {
        // Rotação automática suave
        targetRotation.current += 0.002;
      }

      // Interpola suavemente entre a rotação atual e a alvo
      currentRotation.current = THREE.MathUtils.lerp(
        currentRotation.current,
        targetRotation.current,
        0.1 // Fator de suavização (0.1 = muito suave, 1 = instantâneo)
      );

      groupRef.current.rotation.y = currentRotation.current;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} scale={0.00008} position={[0, 0.9, 0]} />
    </group>
  );
}

export default function Interlagos3D2() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        cursor: "grab",
      }}
    >
      <Canvas
        camera={{ position: [3, 2, 1], fov: 80 }}
        gl={{
          preserveDrawingBuffer: false,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ cursor: "inherit" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 3, -5]} intensity={0.6} />

        <Track />
      </Canvas>
    </div>
  );
}
