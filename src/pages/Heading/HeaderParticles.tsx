import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
useRef;
import * as THREE from "three";

const HeaderParticles = () => {
  const particles = useRef<THREE.Points>();

  // Create particle geometry and material
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.PointsMaterial({ color: 0x00ff00, size: 0.01 });

  // Set up particle positions
  const positions = new Float32Array(1000 * 3);

  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  // Update particles in the animation loop
  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.x += 0.001;
      particles.current.rotation.y += 0.001;
    }
  });
  // @ts-ignore
  return <points ref={particles} geometry={geometry} material={material} />;
};
export default HeaderParticles;
