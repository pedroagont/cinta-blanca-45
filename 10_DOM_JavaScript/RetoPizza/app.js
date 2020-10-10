console.log('Hola desde Reto Pizza! 🍕');

//-------------------> Challenge <------------------
// * Usar Bootstrap *
// Preguntar Nombre
// Preguntar Dirección
// Preguntar Teléfono
// Preguntar si quieren pizza con piña o sin
// respuestas: sí o no
// -> mostrar las respuestas en una card de Bootstrap después de presionar un botón

// PASOS SUGERIDOS
// Paso 1: Declarar los elementos (inputs y respuestas) que vamos a usar del html (getElementById('id') es una forma)

// INPUTS
const nombre = document.getElementById('nombre');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const pina = document.getElementById('pina');
const boton = document.getElementById('boton');

// RESPUESTAS
const respuestaNombre = document.getElementById('respuestaNombre');
const respuestaDireccion = document.getElementById('respuestaDireccion');
const respuestaTelefono = document.getElementById('respuestaTelefono');
const pedido = document.getElementById('pedido');
const progress = document.getElementById('progress');
const imagen = document.getElementById('imagen');

const card = document.getElementById('card');
card.style.display = 'none';

// Paso 2: Declarar la función que generará la card con las entradas del usuario
const generarOrden = () => {

  // Validar que ningún campo esté vacío
  if (nombre.value === '') {
    alert('El campo de nombre está vacío')
  } else if (direccion.value === '') {
    alert('El campo de dirección está vacío')
  } if (telefono.value === '') {
    alert('El campo de teléfono está vacío')
  } if (pina.value === '') {
    alert('El campo de ingredientes está vacío')
  } else {
    // Respuestas cambien por lo ingresado por los usuarios en los inputs
    respuestaNombre.innerHTML = nombre.value;
    respuestaDireccion.innerHTML = direccion.value;
    respuestaTelefono.innerHTML = telefono.value;
    pedido.innerHTML = pina.value;

    const valorPina = pina.value.toLowerCase();

    if(valorPina === 'si') {
      pedido.innerHTML = 'Pizza CON piña';
      imagen.src = 'https://irecetasfaciles.com/wp-content/uploads/2020/03/pizza-hawaiana.jpg';
      progress.style.width = '25%';
    } else if (valorPina === 'no') {
      pedido.innerHTML = 'Pizza SIN piña';
      imagen.src = 'https://www.recetin.com/wp-content/uploads/2012/01/pizza_cuatro_quesos.jpg';
      progress.style.width = '25%';
    } else {
      pedido.innerHTML = 'El usuario no indicó su pedido';
      imagen.src = 'https://i.ytimg.com/vi/topx1wv_Qzw/hqdefault.jpg';
    }

    card.style.display = '';

    console.log('Orden generada');
  }
}


// Paso 3: Agregar el event listener del botón para que ejecuté la función que genere la card
boton.addEventListener('click', generarOrden);
