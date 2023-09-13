import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";

import { Poultry } from "./Poultry.jsx"
import { Systeel } from "./Systeel.jsx"
import { GreenEnergy } from "./GreenEnergy.jsx";
import { Manufactoring } from "./Manufactoring.jsx";
import { Automation } from "./Automation.jsx";

/*
          
*/
          
export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.9} />
      <Environment preset="sunset" />
      <OrbitControls />
      <MonsterStage texture={ "textures/laboratory.jpg" } >
          <Systeel scale={0.5} position-y ={-0.5} />
          
      </MonsterStage>
      <MonsterStage texture={ "textures/laboratory3.jpg" } position-x={-2.5} rotation-y = {Math.PI /8} >
          <Poultry scale={0.15} position-y ={-0.9} position-x ={ -0.13 }/>
          <GreenEnergy scale={0.13} position-y ={-0.83} position-x ={ -0.7 }/>
      </MonsterStage>
      
      <MonsterStage texture={ "textures/laboratory2.jpg" } position-x={2.5} rotation-y = {-Math.PI /8} >
          <GreenEnergy scale={0.13} position-y ={-0.83} position-x ={ -0.7 }/>
          <Poultry scale={0.15} position-y ={-0.9} position-x ={ -0.13 }/>
          <Manufactoring scale={0.14} position-y ={-0.85} position-x ={ 0.32 }/>
          <Automation scale={0.14} position-y ={-0.84} position-x ={ 0.72 }/>
      </MonsterStage>
      
    </>
  );
};


const MonsterStage = ({ children, texture, ...props }) => {
  const map = useTexture (texture);
  return (
  <group {...props}>
    <RoundedBox args={[2.3, 3.5, 0.1]}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={0.9} />
          <Environment preset="sunset" />
          {children}
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
  </group>
  );
};