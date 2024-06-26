# Sumario

Este proyecto es una aplicación web de contador de clics creada utilizando React. La aplicación tiene un componente principal `App` que maneja el estado del número de clics y las funciones para incrementar y reiniciar el contador. 

El componente `App` renderiza un contador que muestra el número de clics actual, dos botones: uno para hacer clics y otro para reiniciar el contador. 

El componente `Boton` es un componente reutilizable que toma propiedades como el texto del botón, un booleano que indica si es un botón de clic o de reinicio, y una función que se ejecuta cuando se hace clic en el botón. 

El componente `Contador` es un componente que muestra el número de clics actual, que se pasa como una propiedad al componente `App`. 

El estado del número de clics se inicializa en 0 y se actualiza cada vez que se hace clic en el botón de clics. El número de clics se incrementa en 1 cada vez que se hace clic. Cuando se hace clic en el botón de reinicio, el número de clics se establece en 0.

El código utiliza React para manejar el estado y las vistas de la aplicación. Los estilos CSS se aplican a los componentes utilizando archivos separados.
