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
      <h3>{titulo} {esFavorita ? "⭐" : ""}</h3> 
    </div>
  )
} 

function App() {
  const [lista, setLista] = useState(['Interstellar', 'Inception', 'Dunkirk', 'Batman' ])
  const [nuevaPelicula, setNuevaPelicula] = useState('')

  const agregarPelicula = () => {
    if (nuevaPelicula.trim() !== '') {
      setLista([...lista, nuevaPelicula])
      setNuevaPelicula('')
    }
  }

  return (
    <div>
      <h1>Mis Peliculas Favoritas</h1>
      <input
        type="text"
        placeholder="Agregar nueva película"
        value={nuevaPelicula}
        onChange={(e) => setNuevaPelicula(e.target.value)}
        style={{flex: 1, padding: '10px'}}
      />
      <button onClick={agregarPelicula}>Agregar</button>
      {lista.map((pelicula, indice) => (
        <Pelicula key={indice} titulo={pelicula} />
      ))}

    </div>
  )
}

export default App
