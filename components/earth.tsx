// "use client"

// import { useRef } from "react"
// import { useFrame } from "@react-three/fiber"
// import { Sphere } from "@react-three/drei"
// import * as THREE from "three"

// export default function Earth() {
//   const meshRef = useRef<THREE.Mesh>(null)

//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += delta * 0.2
//     }
//   })

//   return (
//     <Sphere ref={meshRef} args={[2, 64, 64]} position={[3, 0, -2]}>
//       <meshStandardMaterial
//         map={new THREE.TextureLoader().load("/assets/3d/texture_earth.jpg")}
//         roughness={0.8}
//         metalness={0.1}
//       />
//     </Sphere>
//   )
// }
// components/Earth.tsx
// pages/index.js
// ui/Earth.tsx
import React from 'react';
import './earth.css';

const Earth = () => {
  return (
    <div className="earth-container">
      <div className="earth"></div>
    </div>
  );
};

export default Earth;
