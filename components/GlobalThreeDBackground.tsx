"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobalThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0A1628, 5, 20);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // ---- Original swirling particle system ----
    const COUNT = 900;
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      seeds[i] = Math.random() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Gold particles (brighter, larger)
    const goldMaterial = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.65,
    });

    // Teal particles (smaller, more subtle)
    const tealMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00b4d8,
      transparent: true,
      opacity: 0.25,
    });

    const goldPoints = new THREE.Points(geometry, goldMaterial);
    const tealPoints = new THREE.Points(geometry, tealMaterial);
    const group = new THREE.Group();
    group.add(goldPoints, tealPoints);
    scene.add(group);

    const spread = 9;
    const zTarget = 6;
    const swirl = 0.15;
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const t = clock.getElapsedTime();
      const posAttr = geometry.attributes.position;

      for (let i = 0; i < COUNT; i++) {
        const s = seeds[i];
        const angle = t * swirl + s;
        const radius = ((i % 30) / 30) * spread;

        const targetX = Math.cos(angle + s) * radius * 0.6;
        const targetY = Math.sin(s * 3 + t * 0.05) * (spread * 0.35);
        const targetZ = -zTarget + Math.sin(angle) * 1.5;

        const ix = i * 3;
        posAttr.array[ix] += (targetX - posAttr.array[ix]) * 0.01;
        posAttr.array[ix + 1] += (targetY - posAttr.array[ix + 1]) * 0.01;
        posAttr.array[ix + 2] += (targetZ - posAttr.array[ix + 2]) * 0.01;
      }
      posAttr.needsUpdate = true;

      // Gentle group rotation
      group.rotation.y = Math.sin(t * 0.03) * 0.15;

      renderer.render(scene, camera);
    }

    animate();

    // ---- Resize handler ----
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />;
}