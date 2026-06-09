import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Pelicula({titulo}){
  const [esFavorita, setEsFavorita] = useState(false)
  return(
    <div style={{border: '1px solid black',
                  margin: '10px',
                  padding: '10px',
                  borderRadius: '5px',
                  cursor: 'pointer'
    }}onClick={() => setEsFavorita(!esFavorita)}>
      <h2>{titulo}{esFavorita ? '⭐' : ''}</h2> 
    </div>
  )
}

function App() {
  const lista = ['Interstellar', 'Inception', 'Dunkirk', 'Batman']

  return (
    <div>
      <h1>Mis Peliculas Favoritas</h1>
      {lista.map((pelicula) => (
        <Pelicula key={pelicula} titulo={pelicula} />
      ))}

    </div>
  )
}

export default App
