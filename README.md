
### Problema planteado
Desarrolle una aplicación en React que disponga de un Select/Combo que nos permita seleccionar una raza concreta de perros y, al hacerlo, nos muestre una lista de imágenes de la raza seleccionada. Este servicio expone la lista de las razas: https://dog.ceo/api/breeds/list/all y con este podrá obtener las rutas de las imágenes de una raza dada: https://dog.ceo/api/breed/raza/images.
 
A pesar de que se trate de una aplicación sencilla, se valorarán aspectos como: correcta organización de ficheros (cada lógica donde corresponda); componentización adecuada; utilizar las características de las últimas versiones de React (hooks); gestionar correctamente feedback de carga de datos y gestión errores (para informar al usuario en todo momento de cuando se producen cargas de datos o errores en procesamientos); dotar a la aplicación de soporte para múltiples idiomas (para los literales de la aplicación, no para las respuestas del servicio, obviamente); etc.

### Netlify - Url
https://elegant-liskov-f0c280.netlify.app

### Tecnologías utilizadas
Como framework de desarrollo se ha utilizado React.

Para lograr los especificado en el problema planteado, se han instalados las siguientes librerías:

####`emotion`
Librería necesaria para las animaciones del spinner implementado como pantalla de carga.

####`babel`
Dependencia de la librería emotion.

####`material-ui`
Librería que nos permite utilizar un conjunto de componentes, para el caso de esta aplicación, se han utilizado el componente AutoComplete (selector con opción de búsqueda) y Button (botón de búsqueda).

####`axios`
Librería utilizada para realizar las diferentes peticiones a la API especificada en la aplicación.

####`i18next`
Librería para permitir la internacionalización de la aplicación (Actualmente se utiliza el idioma por defecto detectado en el navegador). Destacar que aunque la aplicación es bastante simple, se ha optado por la utilización de `useContext` con motivo de mantener una equidad si se decidiera ampliar los textos internacionalizados.

####`react-image-gallery`
Librería que nos ofrece un carousel de imágenes que utilizaremos para representar las diferentes imágenes de la raza de perro que seleccionemos.

####`react-spinner`
Componente para mostrar mientras se espera por la respuesta de las peticiones realizadas.

####`react-toastify`
Toast para mostrar en caso de fallo de alguna de las peticiones realizadas.