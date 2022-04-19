# Star Wars App

  Este proyecto consume la siguiente API [SWAPI STAR WARS](https://swapi.dev/).

## Idea

  La idea del proyecto es renderizar una lista de personajes de la famosa saga siguiendo un modelo de Figma particular, tanto para esa lista como para la sección de detalle. El proyecto está diseñado para visualizarse en mobile Los modelos finalizados son los siguientes: 
  
  
  ![starwars1](https://user-images.githubusercontent.com/62775484/164109437-abdc5dd3-9d20-4c20-9a34-4ec246186505.png)
  ![starwars2](https://user-images.githubusercontent.com/62775484/164110138-763110fd-1749-4ba0-b581-3d4dc7dc7d0d.png)
  ![starwars3](https://user-images.githubusercontent.com/62775484/164110325-53821e00-b632-4ac6-aa87-ff271e5afa35.png)
  ![starwars4](https://user-images.githubusercontent.com/62775484/164110293-9f8a0402-2d28-43d2-91ee-fc25c37dad86.png)



### `Recursos utilizados`

  Para llevar a cabo la consigna, utilicé las siguientes herramientas:\
  \
    [Dotenv](https://www.npmjs.com/package/dotenv) : para guardar variables de entorno, url base y endpoints en este caso.\
    [Material-ui](https://mui.com/) : para estilizar las vistas.\
    [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) : para manejar rutas y redireccionado.\
    [Redux-toolkit](https://redux-toolkit.js.org/) : para manejar estados de la aplicación.
    
    
### `Redux`

  Elegí usar Redux-toolkit porque provee una fuente única de verdad, donde almacenar todos los datos requeridos, incluyendo estados de carga, errores, estados completos de la app en un determinado momento. 
   A diferencia del State de React que se encuentra en componentes particulares, podemos tener al alcance, toda la info de manera global, en cualquier componente que lo requiera. De esta manera, evitamos tener que pasar toda la información de componentes padres a hijos por medio de props.
   
### `AppRouter`

En AppRouter se ubican los dispatch de los reducers en un useEffect. A su vez se especifica una ruta pública, en que se ubican las rutas del proyecto y se da lugar a una ruta privada, pensando en rutas futuras con validaciones para una posible sección de backoffice.

### `Peticiones`

Un fetch realizado a cualquiera de los endpoints como `/people` devuelve una lista paginada de una porción de la lista total, que a su vez contiene una propiedad `next` con la url de la siguiente página. El proyecto requería descargar la lista de personajes de la saga en páginas, por lo que utilizo una función reutilizable getPage para ello.

Sin embargo, algunos personajes requerían un planeta o un vehículo cuyo index se encontraba en páginas posteriores, por lo que decidí traer el listado completo de planetas, vehículos y razas con la función reutilizable getCompleteList de la carpeta `/services`.

Dependiendo del valor firstLoad de PeopleReducer, Home determina si mostrar sólo el header y el spinner o si mostrar la lista ya renderizada con el spinner debajo de la misma. También se utiliza los valores de loading y error de cada uno de los reducer para mostrar posibles mensajes de error.

### `Detalle de Personaje`

Al seleccionar un usuario de la lista, podemos observar el detalle del sujeto seleccionado, este mismo figura como activo en el reducer correspondiente, pero debido a que una posible recarga de la página pueda perder esa información en el reducer, opté por setear esos detalles en LocalStorage ya que con ese recurso, los datos guardados persisten inclusive cuando cerramos el navegador.

### `A futuro`

Mi idea para hacer el proyecto más escalable es aprender y aplicar Nextjs para renderizar la app desde el lado del servidor. Cualquier consejo/recomendación/feedback es más que bienvenido!!


## `Nota`

Al correr la app te puedes encontrar con que una misma página se renderice dos veces. Luego de investigar un poco, encontré que el modo estricto de React, dispara a propósito dos veces tus reducers con el objetivo de hacer más aparentes cualquier efecto secundario. Remover el modo estricto de la app, resuelve esto. 

https://github.com/facebook/react/issues/16295#issuecomment-610098654 \
https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects


 






