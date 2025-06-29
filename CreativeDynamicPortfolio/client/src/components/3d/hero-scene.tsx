import { useRef, useFrame } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry({ position, geometry, color }: {
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshBasicMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const geometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.SphereGeometry(0.7, 32, 32),
    new THREE.ConeGeometry(0.7, 1.5, 8),
    new THREE.OctahedronGeometry(0.8),
  ];

  const colors = ['#3B82F6', '#8B5CF6', '#06B6D4'];

  const objects = [];
  for (let i = 0; i < 15; i++) {
    objects.push({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ] as [number, number, number],
      geometry: geometries[Math.floor(Math.random() * geometries.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {objects.map((obj, index) => (
        <FloatingGeometry
          key={index}
          position={obj.position}
          geometry={obj.geometry}
          color={obj.color}
        />
      ))}
    </>
  );
}
