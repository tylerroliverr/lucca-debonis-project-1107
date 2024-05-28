import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import DispersionMaterial from './dispersionMaterial'; // Correct import
import * as THREE from 'three';

extend({ MeshPhysicalMaterial: THREE.MeshPhysicalMaterial });

function Model({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.008;
  });

  // Apply glass material to all children of the scene
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        transmission: 0.1, // transmission for glass-like transparency
        opacity: 0.6, // base opacity
        transparent: true,
        roughness: 0.1, // lower roughness for clearer reflections
        metalness: 0.1, // some metalness for shininess
        clearcoat: 1, // clearcoat for a glossy finish
        clearcoatRoughness: 0, // clearcoat roughness
        ior: 1.5, // index of refraction for glass
      });
    }
  });

  return <primitive object={scene} ref={ref} />;
}

export default function GlassLogo() {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={100}
        position={[0, 0.5, 6]}
        near={0.1}
        far={1000}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Model url="/glasslogo.glb" />
        <Environment preset="lobby" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
