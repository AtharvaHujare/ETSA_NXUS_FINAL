import { MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function PitGarageEnvironment() {
  return (
    <group>
      {/* 1. Reflective Wet Garage Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mirror={0.65}
          mixBlur={0.8}
          mixStrength={3.0}
          roughness={0.22}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0b0b0d"
          metalness={0.85}
        />
      </mesh>

      {/* Subtle floor pit-box grid marking lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, 0.001, 0]}>
        <planeGeometry args={[4.8, 0.04]} />
        <meshBasicMaterial color="#333333" opacity={0.6} transparent />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, 0.001, 2.2]}>
        <planeGeometry args={[3.2, 0.04]} />
        <meshBasicMaterial color="#E10600" opacity={0.7} transparent />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, 0.001, -2.2]}>
        <planeGeometry args={[3.2, 0.04]} />
        <meshBasicMaterial color="#E10600" opacity={0.7} transparent />
      </mesh>

      {/* 2. Studio & Sunset Lighting */}
      {/* Warm Sunset Directional Rim Light from the Racetrack Opening (Right) */}
      <directionalLight
        position={[9, 3.5, -4]}
        intensity={4.2}
        color="#FF7538"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />

      {/* Secondary Warm Horizon Fill Light */}
      <pointLight position={[12, 1.5, -6]} intensity={3.5} color="#FF511A" distance={25} />

      {/* Cool Garage Overhead Light Strip (Left / Top) */}
      <spotLight
        position={[-3.5, 6, 1.5]}
        target-position={[0, 0, 0]}
        intensity={3.8}
        color="#E4F0FF"
        angle={0.65}
        penumbra={0.7}
        castShadow
      />

      {/* Nosecone / Front Wing Key Spotlight */}
      <spotLight
        position={[-1, 3.5, 5]}
        target-position={[0.5, 0.2, 1]}
        intensity={2.2}
        color="#FFFFFF"
        angle={0.55}
        penumbra={0.8}
      />

      {/* Garage Interior Ambient Bounce Light */}
      <ambientLight intensity={0.4} color="#1c2028" />

      {/* 3. Garage Architectural Pillars & LED Light Strips */}
      {/* Left Wall Support Column */}
      <mesh position={[-6, 4, 0]}>
        <boxGeometry args={[0.8, 9, 24]} />
        <meshStandardMaterial color="#0a0a0c" roughness={0.85} metalness={0.2} />
      </mesh>

      {/* Vertical Neon Light Tubes on Pillars (as seen in reference image) */}
      <mesh position={[-5.5, 3.8, 1.5]}>
        <boxGeometry args={[0.04, 5.0, 0.04]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <pointLight position={[-5.3, 3.8, 1.5]} intensity={1.5} color="#E0EFFF" distance={6} />

      <mesh position={[-1.2, 4.2, -6]}>
        <boxGeometry args={[0.04, 5.5, 0.04]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <pointLight position={[-1.2, 4.2, -5.8]} intensity={1.8} color="#FF7A3D" distance={7} />

      {/* Garage Roof / Lintel separating inside and outside track view */}
      <mesh position={[4, 6.8, -6]}>
        <boxGeometry args={[14, 1.5, 0.8]} />
        <meshStandardMaterial color="#08080a" roughness={0.9} />
      </mesh>

      {/* Left Wall Pit Equipment Silhouette */}
      <mesh position={[-5.2, 1.2, -2]}>
        <boxGeometry args={[0.7, 2.4, 2.2]} />
        <meshStandardMaterial color="#09090b" roughness={0.7} metalness={0.4} />
      </mesh>
      <mesh position={[-5.2, 1.0, 1.5]}>
        <boxGeometry args={[0.6, 2.0, 1.8]} />
        <meshStandardMaterial color="#08080a" roughness={0.8} metalness={0.3} />
      </mesh>

      {/* 4. Background Sunset Racetrack Horizon Backdrop (Through the opening) */}
      <group position={[14, 3, -15]} rotation={[0, -0.2, 0]}>
        {/* Sky gradient backdrop */}
        <mesh position={[0, 4, -4]}>
          <planeGeometry args={[42, 20]} />
          <meshBasicMaterial
            color="#2a1622"
            onBeforeCompile={(shader) => {
              shader.vertexShader = shader.vertexShader.replace(
                '#include <uv_pars_vertex>',
                `#include <uv_pars_vertex>
                 varying vec2 vUvCoord;`
              );
              shader.vertexShader = shader.vertexShader.replace(
                '#include <uv_vertex>',
                `#include <uv_vertex>
                 vUvCoord = uv;`
              );
              shader.fragmentShader = `
                varying vec2 vUvCoord;
                void main() {
                  // Sunset sky gradient: dark indigo top -> vivid fiery sunset orange/rose at horizon
                  vec3 topColor = vec3(0.06, 0.07, 0.12);
                  vec3 midColor = vec3(0.35, 0.14, 0.18);
                  vec3 horizonColor = vec3(0.85, 0.40, 0.22);
                  
                  vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.45, vUvCoord.y));
                  col = mix(col, topColor, smoothstep(0.4, 1.0, vUvCoord.y));
                  gl_FragColor = vec4(col, 1.0);
                }
              `;
            }}
          />
        </mesh>

        {/* Distant Mountain Silhouettes */}
        <mesh position={[-4, 1.2, -2]} rotation={[0, 0, 0]}>
          <coneGeometry args={[12, 4.5, 4]} />
          <meshBasicMaterial color="#110e14" />
        </mesh>
        <mesh position={[8, 1.6, -3]}>
          <coneGeometry args={[14, 5.5, 4]} />
          <meshBasicMaterial color="#0e0b11" />
        </mesh>

        {/* Distant Grandstand & Stadium Floodlight Glows */}
        <mesh position={[6, 3.8, 1]}>
          <cylinderGeometry args={[0.06, 0.06, 6]} />
          <meshBasicMaterial color="#1a1a1e" />
        </mesh>
        <mesh position={[6, 6.8, 1]}>
          <boxGeometry args={[1.2, 0.4, 0.2]} />
          <meshBasicMaterial color="#FFF1D0" />
        </mesh>
        <pointLight position={[6, 6.8, 1.2]} intensity={2.2} color="#FFAE66" distance={15} />

        {/* Overhead Track Gantry Bridge with NEXUS branding */}
        <group position={[2, 4.2, -1]}>
          <mesh>
            <boxGeometry args={[12, 1.0, 0.6]} />
            <meshStandardMaterial color="#121216" metalness={0.8} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0, 0.32]}>
            <planeGeometry args={[4, 0.6]} />
            <meshBasicMaterial color="#FFFFFF" opacity={0.85} transparent />
          </mesh>
        </group>
      </group>
    </group>
  );
}
