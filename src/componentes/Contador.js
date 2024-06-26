/**
 * Componente Contador
 * @param {Object} props - Propiedades del componente
 * @param {number} props.numClics - Número de clics
 * @returns {JSX.Element} - El componente Contador que muestra el número de clics
 */
import React from 'react';

// Importa el archivo de estilos CSS para el contador
import '../hojas-de-estilo/Contador.css';

// Define una función que toma un objeto de propiedades como parámetro
function Contador({ numClics }) {
  // Retorna un elemento div con la clase 'contador' que muestra el valor de 'numClics'
  return (
    <div className='contador'>
      {numClics}
    </div>
  );   
}

// Exporta el componente Contador para que pueda ser utilizado en otros archivos
export default Contador;

