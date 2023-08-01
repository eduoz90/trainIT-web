import React from 'react'
import ReactDOM from 'react-dom/client'
//importamos los componentes
import {Navbar}  from '../components/Navbar'
import {Buscador} from '../components/Buscador'
//importamos los estilos
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <Buscador />
  </React.StrictMode>,
)
