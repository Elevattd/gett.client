# Todo List App

Esta es una aplicación de lista de tareas creada con ReactJS, Redux Toolkit, Redux, Material-UI y TypeScript.

## Características

-   Iniciar sesión con usuario y contraseña en el front-end. -Después de iniciar sesión, se hace una llamada por GET a
    https://jsonplaceholder.typicode.com/todos para obtener una lista de tareas a realizar. -Las tareas se almacenan
    como parte del estado de la aplicación utilizando Redux Toolkit. -Se muestran un máximo de entre 5 y 20 elementos de
    la lista de tareas y se pueden paginar. -La tabla tiene un selector de cantidad de elementos a mostrar, así como
    páginas y una página seleccionada. -Se pueden agregar, modificar y eliminar elementos de la lista. Estas operaciones
    se realizan directamente en el store de Redux, sin necesidad de llamar nuevamente al -endpoint de la API.

## Instalación

-Clonar este repositorio -Ejecutar npm install para instalar las dependencias -Ejecutar npm start para iniciar la
aplicación

### Tecnologías utilizadas

-ReactJS -Redux Toolkit -Redux -Material-UI -TypeScript

### Criterios de evaluación

-Limpieza y legibilidad del código. -Uso de Hooks. -Modularidad del código (No tener un sólo archivo con 1000 líneas)
-Entendimiento de las propias decisiones que se han tomado a la hora de escribir el problema.
