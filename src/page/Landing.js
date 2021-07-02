import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Text from '../components/Text';
import { Sky } from '@react-three/drei';
import { RepeatWrapping, TextureLoader, Vector3 } from 'three';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import grass from '../images/grass.jpg';

function Set({ word }) {
  return (
    <>
      <Text children={word} useBox={useBox} />
    </>
  );
}

function Plane(props) {
  const texture = new TextureLoader().load(grass);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(240, 240);
  const [ref] = usePlane(() => ({
    // position: [0, -2.5, 0],
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  return (
    <mesh receiveShadow ref={ref}>
      <planeBufferGeometry attach="geometry" args={[300, 300]} />
      <meshStandardMaterial map={texture} attach="material" color="green" />
    </mesh>
  );
}

function Landing() {
  const words = ['DANIEL', 'HYOGU', 'VODKAMITLIME', 'FIRST', 'PROJECT'];
  return (
    <div
      className="landing-container"
      style={{
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        position: 'absolute',
      }}
    >
      <Canvas camera={{ position: [-30, 10, 40] }}>
        <Sky sunPosition={new Vector3(100, 10, 100)} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Suspense fallback={null}>
          <Physics>
            {words.map((word, idx) => {
              return <Set key={idx} word={word} />;
            })}
            <Plane />
          </Physics>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Landing;
