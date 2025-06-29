import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";


export default function Scene() {
    function CocaColaModel() {
        const { scene } = useGLTF("./coke.glb"); // Ensure the model is in the public folder
        const ref = useRef();

        useEffect(() => {
            scene.scale.set(50, 50, 50); // Reduce size significantly
        }, [scene]);

        // Animation for rotation only (no floating effect)
        useFrame(() => {
            ref.current.rotation.y += 0.01; // Rotate the model continuously
        });

        return <primitive ref={ref} object={scene} />;
    }

    return (
        <Canvas camera={{ position: [0, -4, 15], fov: 50 }}
            style={{
                width: "100%",
                height: "780px",
                marginTop: "100px",
                overflow: "auto",
                filter: "drop-shadow(0 0 0.95rem red)"
            }}>
            <ambientLight intensity={1} />
            <spotLight position={[40, 40, 40]} intensity={1.5} />

            {/* CocaColaModel with rotation animation */}
            <CocaColaModel />

            {/* Orbit Controls */}
            <OrbitControls enableZoom={false} minDistance={5} maxDistance={20} />

            {/* Environment preset for reflections */}
            <Environment preset="sunset" />
        </Canvas>
    );
}
