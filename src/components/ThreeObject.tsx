import { Canvas } from "@react-three/fiber";
import ThreeBox from "./ThreeBox";

export default function ThreeObject() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <ThreeBox position={[0, 0, 0]} />
    </Canvas>
  );
}
