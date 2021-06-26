import * as THREE from 'three';
import React, {
  useState,
  useEffect,
  Suspense,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import data from '../data';

function Image({ url, setSelected }) {
  const mesh = useRef();
  const time = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isActiveRef = useRef(isActive);

  const random = require('lodash.random');

  const position = useMemo(() => {
    return [random(-7, 7, true), random(-7, 7, true), random(-7, 7, true)];
  }, []);
  const timeMod = useMemo(() => random(0.1, 4, true), []);

  const color = isHovered ? 0xf2f2f2 : isActive ? '' : '';

  const texture = useLoader(THREE.TextureLoader, url);

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useFrame(() => {
    mesh.current.rotation.y += 0.01 * timeMod * 0.5;
    if (isActiveRef.current) {
      time.current += 0.03;
      mesh.current.position.y = position[1] + Math.sin(time.current) * 1;
    }
  });

  const onHover = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered(value);
    },
    [setIsHovered]
  );

  const onClick = useCallback(
    e => {
      e.stopPropagation();
      setIsActive(v => !v);
      setSelected(
        mesh.current.material.map.image.currentSrc.slice(35, 39) + '.jpg'
      );
    },
    [setIsActive]
  );

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={e => onClick(e)}
      onPointerOver={e => onHover(e, true)}
      onPointerOut={e => onHover(e, false)}
    >
      <planeBufferGeometry attach="geometry" args={[5, 8]} />
      <meshBasicMaterial attach="material" map={texture} color={color} />
    </mesh>
  );
}

function Images({ setSelected }) {
  return data.map(el => (
    <Suspense fallback={null}>
      <Image key={el[0]} url={el[0]} setSelected={setSelected} />
    </Suspense>
  ));
}

function Bg({ pageVariants, pageTransition, selected, setSelected }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="canvas-container"
    >
      {selected === '' ? (
        ''
      ) : (
        <motion.div
          className="monitor"
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: 'spring' }}
        >
          <img
            src={`images/${selected}`}
            style={{
              width: '20vw',
              height: '20vw',
              position: 'absolute',
              borderRadius: '50%',
            }}
          />
        </motion.div>
      )}
      <Canvas
        camera={{
          position: [0, 10, 20],
          fov: 65,
        }}
      >
        <Images setSelected={setSelected} />
        <ambientLight intensity={1} />
        <directionalLight />
        <OrbitControls />
      </Canvas>
    </motion.div>
  );
}

export default Bg;
