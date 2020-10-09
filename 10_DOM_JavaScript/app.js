console.log('Hola desde app.js! 👋');

// DOCUMENT OBJECT MODEL Hace referencia a todo el HTML como un objeto en sí mismo al que podemos acceder para crear, agregar, modificar, remover, o alterar de cualquier forma desde JS
// Link de referencia W3Schools: https://www.w3schools.com/js/js_htmldom.asp
// console.log(document);

// Para manipular el DOM, primero tenemos que mandar a llamar los elementos que queremos utilizar desde nuestro JavaScript
// Para esto, podemos hacer uso de un método llamado getElementById('id')
let titulo = document.getElementById('titulo');
let subtitulo = document.getElementById('subtitulo');
let entrada = document.getElementById('entrada');
let boton = document.getElementById('boton');
let respuesta = document.getElementById('respuesta');

// Podemos imprimir en consola las variables para saber si las llamó adecuadamente
console.log(titulo, subtitulo, entrada, boton, respuesta);

function cambiar(){
  // Podemos cambiar propiedades de los elementos de HTML llamados
  titulo.innerHTML = 'Soy el título modificado desde JS!';
  subtitulo.innerHTML = 'Soy el subtítulo modificado desde JS!';

  // Podemos cambiar estilos
  titulo.style.color = 'red'
  subtitulo.style.fontSize = '35px'

  // .value es el texto o el valor que ingresamos a los inputs
  respuesta.innerHTML = entrada.value;
  console.log(entrada.value);

  console.log('Has presionado el botón de cambiar!');
}

// Para hacer referencia a eventos que sucedan con cada elemento, hacemos uso del método addEventListener('evento-a-escuchar', funcionQueQueremosEjecutarConEseEvento)
// Link para más información: https://www.w3schools.com/js/js_htmldom_eventlistener.asp

boton.addEventListener('click', cambiar);
