import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, OrbitControls } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/logo.glb");
  const modelRef = useRef<any>(null);
  const isDragging = useRef(false);

  // Only auto-rotate when the user is NOT dragging
  useFrame((_state, delta) => {
    if (modelRef.current && !isDragging.current) {
      modelRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={modelRef} dispose={null}>
      <primitive object={scene} scale={3} position={[0, -0.5, 0]} />
    </group>
  );
}

useGLTF.preload("/logo.glb");

export function Logo3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 10], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <Environment preset="city" />

      {/* 360-degree drag controls — disables auto-rotate while user drags */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
        rotateSpeed={0.6}
      />

      <Suspense fallback={null}>
        <Model />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.5}
          scale={12}
          blur={2.5}
          far={5}
          color="#8b5cf6"
        />
      </Suspense>
    </Canvas>
  );
}
