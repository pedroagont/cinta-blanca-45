console.log('Hola desde tarea!');

// ------- EJERCICIO 1
// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.
// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador.

var jugador1 = prompt('Jugador 1, ingresa piedra, papel o tijera').toLowerCase()
var jugador2 = prompt('Jugador 2, ingresa piedra, papel o tijera').toLowerCase()

console.log(jugador1, jugador2);

// cadena.toUpperCase() sirve para pasar una cadena a mayúsculas
// cadena.toLowerCase() sirve para pasar una cadena a minúsculas

if (jugador1 === jugador2) {
  alert('Empate');
} else if (jugador1 === 'papel' && jugador2 === 'piedra' || jugador1 === 'piedra' && jugador2 === 'tijera' || jugador1 === 'tijera' && jugador2 === 'papel') {
  alert('Gana jugador 1');
} else if (jugador2 === 'papel' && jugador1 === 'piedra' || jugador2 === 'piedra' && jugador1 === 'tijera' || jugador2 === 'tijera' && jugador1 === 'papel') {
  alert('Gana jugador 2');
} else {
  alert('Datos incorrectos')
}

// ------- EJERCICIO 2
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.

var num1 = parseInt(prompt('Ingresa un número'));
var num2 = parseInt(prompt('Ingresa otro número'));
var num3 = parseInt(prompt('Ingresa un último número'));

if (num1 > num2 && num1 > num3) {
  alert('El número: ' + num1 + ' es el mayor de los tres')
} else if (num2 > num1 && num2 > num3) {
  alert('El número: ' + num2 + ' es el mayor de los tres')
} else if (num3 > num1 && num3 > num2) {
  alert('El número: ' + num3 + ' es el mayor de los tres')
} else if (num1 == num2 && num2 == num3) {
  alert('Los tres números son iguales')
} else {
  alert('Debes ingresar valores numéricos')
}

// ------- EJERCICIO 3
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, la suma de los tres números.
// ¿Cómo verifico mediante condicionales que un valor existe?

var num1 = parseInt(prompt('Ingresa un número'));
var num2 = parseInt(prompt('Ingresa otro número'));
var num3 = parseInt(prompt('Ingresa un último número'));

// En este caso, la condición funciona para validar las respuestas de los usuarios
// Usando el caracter ! antes de la variable, verificamos que la varible exista
// Es decir si !num significa que num es false o que no existe, invalidando el input

if (!num1 || !num2 || !num3) {
  alert('Debes ingresar valores numéricos');
} else {
  alert('La suma de los tres números es: ' + (num1 + num2 + num3));
}
