import HeaderParticles from "./HeaderParticles";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Link } from "react-router-dom";
const Heading = () => {
  return (
    <Link
      to="/prosite2024/home"
      className="flex justify-center items-center h-screen text-2xl"
    >
      <Canvas>
        <HeaderParticles />
        <Text
          position={[0, 0.25, -5]} // Adjust the position based on your scene
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Welcome! My name is Dimitri
        </Text>
        <Text
          position={[0, -0.5, -5]} // Adjust the position based on your scene
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Click The Page
        </Text>
      </Canvas>
    </Link>
  );
};

export default Heading;
