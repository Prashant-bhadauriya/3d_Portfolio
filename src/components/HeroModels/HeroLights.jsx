import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
      <spotLight 
       position={[2, 6, 5]} 
       intensity={100}
       angle={0.14}
       penumbra={0.2}
       color="white"
      />

      <spotLight 
       position={[4, 5, 4]} 
       intensity={40}
       angle={0.3}
       penumbra={0.5}
       color="#4cc9f0"
      />

      <spotLight 
       position={[-3, 5, 5]} 
       intensity={60}
       angle={0.4}
       penumbra={1}
       color="#d9d5d7"
      />
      
      <primitive 
       object={new THREE.RectAreaLight('#bfbfbf', 8, 3, 2)}
       position={[1, 3, 4]}
       intensity={15}
       rotation={[-Math.PI / 4, Math.PI/4, 0]}
      />

      <pointLight 
        position={[0, 1, 0]}
        intensity={10}
        color="#edebec"
      />

      <pointLight 
        position={[1, 2, -2]}
        intensity={20}
        color="#77666e"
      />
    </>
  );
};

export default HeroLights;
