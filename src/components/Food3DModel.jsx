import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function FoodModel() {
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Animate scale and rotate subtly
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (modelRef.current) {
      modelRef.current.rotation.y = t * 0.3;
      modelRef.current.scale.setScalar(hovered ? 1.1 : 1);

      // optional float effect
      modelRef.current.position.y = Math.sin(t) * 0.2 - 1.6;
    }
  });

  const gltf = useGLTF("/models/burger_model3.glb");

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

function CameraRig() {
  const camRef = useRef();

  useFrame(({ mouse, camera }) => {
    camera.position.x = mouse.x * 2;
    camera.position.y = mouse.y * 1;
    camera.lookAt(0, -1, 0);
  });

  return null;
}

export default function ModelViewer() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/assets/burger_image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#109fe0ff",
      }}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <FoodModel />
          <CameraRig />
          <Environment preset="sunset" />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
