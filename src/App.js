import './App.css'; // Importa el archivo de estilos CSS para la aplicación
import Boton from './componentes/Boton'; // Importa el componente Botón
import Contador from './componentes/Contador'; // Importa el componente Contador
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'; // Importa la imagen del logo de freeCodeCamp
import { useState } from 'react'; // Importa el hook useState de React

function App() {

  const [numClics, setNumClics] = useState(0); // Inicializa el estado numClics con un valor de 0
  
  const manejarClic = () => { // Define la función manejarClic
    setNumClics(numClics + 1); // Incrementa el valor de numClics en 1
  }

  const reiniciarContador = () => { // Define la función reiniciarContador
    setNumClics(0); // Establece el valor de numClics en 0
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} /> {/* Renderiza el componente Contador con el valor de numClics */}
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} /> {/* Renderiza el componente Botón con el texto 'Clic' y la función manejarClic */}
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} /> {/* Renderiza el componente Botón con el texto 'Reiniciar' y la función reiniciarContador */}
      </div>
    </div>
  );
}

export default App; // Exporta el componente App para que sea utilizable en otros archivos

