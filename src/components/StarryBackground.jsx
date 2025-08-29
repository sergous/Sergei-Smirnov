import React, { useRef } from 'react'
    import { Canvas, useFrame } from '@react-three/fiber'
    import { Stars } from '@react-three/drei'

    function AnimatedStars() {
      const ref = useRef()
      useFrame(() => {
        ref.current.rotation.x += 0.0005
        ref.current.rotation.y += 0.0005
      })
      return <Stars ref={ref} radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
    }

    function StarryBackground() {
      return (
        <Canvas className="absolute inset-0">
          <AnimatedStars />
        </Canvas>
      )
    }

    export default StarryBackground
