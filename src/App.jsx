import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Pelicula({titulo}){
  return(
    <div style={{border: '1px solid black',
                  margin: '10px',
                  padding: '10px',
                  borderRadius: '5px'
    }}>
      <h2>{titulo}</h2>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Mis Peliculas Favoritas</h1>
      <Pelicula titulo="El Padrino"/>
      <Pelicula titulo="El Padrino II"/>
      <Pelicula titulo="El Padrino III"/>
    </div>
  )
}

export default App
