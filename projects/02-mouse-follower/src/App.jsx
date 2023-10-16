
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const textoButton =  !enable ? 'Activar' : 'Desactivar'
  const bg = !enable ? 'transparent' : 'red'

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({x: clientX, y: clientY})
    }
    if(enable){
      document.body.classList.toggle('cursor-custom', enable)
      window.addEventListener('pointermove', handleMove)
    }

    // Se puede retornar una funcion para limpiar el efecto
    // Se ejecuta cada vez que cambie la dependencia,
    // antes de ejecutar un efecto nuevo
    // y cuando se desmonte el componente
    return () => {
      document.body.classList.remove('cursor-custom')
      window.removeEventListener('pointermove', handleMove)
    }
    
  }, [enable])
  return (
    <main>
        <div className='circle' style={{
          backgroundColor: bg,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}></div>
        <button onClick={() => setEnable(!enable)}>{textoButton} seguir puntero</button>
    </main>
  )
}

export default App
