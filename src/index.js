import { Suspense } from 'react'
import { render } from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'

const Model = ({ url, ...rest }) => {
  const { scene } = useGLTF(url)
  return <primitive {...rest} object={scene} />
}

render(
  <Canvas
    dpr={[1, 2]}
    gl={{ physicallyCorrectLights: true }}
    camera={{ position: [-6, 0, 16], fov: 36 }}
  >
    <color attach="background" args={[0xe2f4df]} />
    <ambientLight />
    <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
    <directionalLight intensity={0.8} position={[-6, 2, 2]} />
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
    />
    <Suspense fallback={null}>
      <Environment preset="park" />
      <Model scale={1.2} url="/iPhone 12.glb" />
    </Suspense>
  </Canvas>,
  document.getElementById('root')
)
