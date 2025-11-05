"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function Track() {
  const gltf = useGLTF("/monaco.glb");
  const groupRef = useRef<THREE.Group>(null);

  // Percorre todos os meshes e aplica cor verde
  gltf.scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.MeshStandardMaterial;
      material.color.set("#808080"); // Branco
      material.emissive.set("#003300"); // Verde escuro emissivo
      material.emissiveIntensity = 0.2;
      material.needsUpdate = true;
    }
  });

  // Rotação automática
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Gira no eixo Y (mais rápido)
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={gltf.scene}
        scale={0.00007}
        position={[0.85, -0.07, 0]}
      />
    </group>
  );
}

export default function Interlagos3D() {
  return (
    <div style={{ width: "100%", height: "100%", background: "transparent" }}>
      <Canvas
        camera={{ position: [3, 2, 1], fov: 90 }}
        gl={{
          preserveDrawingBuffer: false,
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[1, 5, 5]} intensity={1} />

        <Track />
      </Canvas>
    </div>
  );
}
