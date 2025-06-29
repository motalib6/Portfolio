import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import HeroScene from './hero-scene';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
