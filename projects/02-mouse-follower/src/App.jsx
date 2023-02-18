import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('Efecto', { enabled })

    const handlemove = (e) => {
      const { clientX, clientY } = e
      console.log('handelMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handlemove)
    }

    // Cluenup
    // -> cuando el componente se desmonta
    // -> cuando cuambian las dependencias, antes de ejecutar en el efecto nuevo
    return () => {
      window.removeEventListener('pointermove', handlemove)
    }
    console.log('cleanup')
  }, [enabled])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
      </button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
