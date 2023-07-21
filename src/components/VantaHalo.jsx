import React, { useState, useEffect, useRef } from 'react'
import HALO from 'vanta/dist/vanta.halo.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaHalo = ({ childen }) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0xe10981,
        backgroundColor: 0x180118,
        amplitudeFactor: 1.20,
        xOffset: 0.23,
        yOffset: 0.10
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div ref={myRef} style={{ width: '100%', height: '950px' }} >
        {childen}
    </div>
  )
}

export default VantaHalo;