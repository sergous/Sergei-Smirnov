import React, { useRef } from 'react'
    import { Canvas, useFrame } from '@react-three/fiber'
    import { Sphere } from '@react-three/drei'

    function PulsingNova() {
      const ref = useRef()
      useFrame((state) => {
        ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.2)
        ref.current.rotation.y += 0.01
      })
      return (
        <Sphere ref={ref} args={[1, 32, 32]}>
          <meshStandardMaterial color="#06B6D4" emissive="#EC4899" emissiveIntensity={0.5} />
        </Sphere>
      )
    }

    function NovaSpinner() {
      return (
        <Canvas className="w-6 h-6 inline-block">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PulsingNova />
        </Canvas>
      )
    }

    export default NovaSpinner
