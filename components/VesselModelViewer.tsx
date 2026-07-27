"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/** Stand-in procedural hull geometry — swap for a GLTF import once real
 *  vessel scans are available; the OrbitControls rig stays unchanged. */
function HullModel() {
  return (
    <group>
      <mesh rotation={[0, Math.PI / 8, 0]}>
        <capsuleGeometry args={[0.6, 2.4, 4, 16]} />
        <meshStandardMaterial color="#F0F4F8" metalness={0.6} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.55, -0.3]}>
        <boxGeometry args={[0.5, 0.5, 0.6]} />
        <meshStandardMaterial color="#0A1628" metalness={0.4} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.9, -0.3]}>
        <cylinderGeometry args={[0.04, 0.04, 0.6, 8]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function VesselModelViewer() {
  return (
    <div className="h-72 w-full rounded-xl border border-white/10 bg-navy-950/60">
      <Canvas camera={{ position: [3, 1.5, 3], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 2]} intensity={1.2} />
        <directionalLight position={[-4, 2, -2]} intensity={0.4} color="#00B4D8" />
        <HullModel />
        <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}