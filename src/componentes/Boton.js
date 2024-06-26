import React from 'react';
import '../hojas-de-estilo/Boton.css'; // Importa el archivo de estilos CSS para el botón

/**
 * Componente Botón
 * @param {Object} props - Propiedades del componente
 * @param {string} props.texto - Texto que se mostrará en el botón
 * @param {boolean} props.esBotonDeClic - Indica si el botón es para hacer clics
 * @param {function} props.manejarClic - Función que se ejecutará al hacer clic en el botón
 * @returns {JSX.Element} - El componente Botón
 */
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button // Elemento botón de HTML
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} // Aplica la clase CSS correspondiente según el valor de esBotonDeClic
      onClick={manejarClic} // Ejecuta la función manejarClic al hacer clic en el botón
    >
      {texto} // Muestra el texto proporcionado como parámetro
    </button>
  );
}

export default Boton; // Exporta el componente Botón para que sea utilizable en otros archivos
