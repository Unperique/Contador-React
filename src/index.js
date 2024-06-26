import React from 'react'; // Importa el objeto React desde el módulo 'react'
import ReactDOM from 'react-dom'; // Importa el objeto ReactDOM desde el módulo 'react-dom'
import './index.css'; // Importa el archivo CSS 'index.css'
import App from './App'; // Importa el componente 'App' desde el archivo 'App.js'

// Renderiza el componente 'App' en el elemento DOM con el id 'root'
// Usando el modo estricto de React para detectar posibles errores y mejorar la seguridad
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

