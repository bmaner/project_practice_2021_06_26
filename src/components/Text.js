import * as THREE from 'three';
import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';

export default function Text({
  useBox,
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1.5,
  color = '#000000',
  ...props
}) {
  const font = useLoader(THREE.FontLoader, '/bold.blob');
  const config = useMemo(
    () => ({
      font,
      size: 15,
      height: 15,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font]
  );
  const random = require('lodash.random');
  const position = new THREE.Vector3(
    random(-5, 5, true),
    random(5, 25, true),
    random(1, 20, true)
  );
  const [ref, api] = useBox(() => ({
    mass: random(1, 4, true),
    position: [position.x * 20, position.y * 15, position.z * 10],
  }));
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh
        onClick={() => {
          api.velocity.set(0, 1, -2);
        }}
        ref={ref}
        receiveShadow
        castShadow
      >
        <textGeometry args={[children, config]} />
        <meshPhongMaterial color="#F2B705" />
      </mesh>
    </group>
  );
}
