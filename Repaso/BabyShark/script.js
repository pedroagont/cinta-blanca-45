console.log('Hola desde script! 👋');

// Repasando ciclos y funciones de JS con Baby Shark! 👼🏻🦈
// Lyrics
// Baby shark, doo, doo, doo, doo, doo, doo
// Baby shark, doo, doo, doo, doo, doo, doo
// Baby shark, doo, doo, doo, doo, doo, doo
// Baby shark
// Mommy shark, doo, doo, doo, doo, doo, doo
// Mommy shark, doo, doo, doo, doo, doo, doo
// Mommy shark, doo, doo, doo, doo, doo, doo
// Mommy shark
// Daddy shark, doo, doo, doo, doo, doo, doo
// Daddy shark, doo, doo, doo, doo, doo, doo
// Daddy shark, doo, doo, doo, doo, doo, doo
// Daddy shark
// Grandma shark, doo, doo, doo, doo, doo, doo
// Grandma shark, doo, doo, doo, doo, doo, doo
// Grandma shark, doo, doo, doo, doo, doo, doo
// Grandma shark
// Grandpa shark, doo, doo, doo, doo, doo, doo
// Grandpa shark, doo, doo, doo, doo, doo, doo
// Grandpa shark, doo, doo, doo, doo, doo, doo
// Grandpa shark
// Let's go hunt, doo, doo, doo, doo, doo, doo
// Let's go hunt, doo, doo, doo, doo, doo, doo
// Let's go hunt, doo, doo, doo, doo, doo, doo
// Let's go hunt
// Run away, doo, doo, doo, doo, doo, doo
// Run away, doo, doo, doo, doo, doo, doo
// Run away, doo, doo, doo, doo, doo, doo
// Run away
// Safe at last, doo, doo, doo, doo, doo, doo
// Safe at last, doo, doo, doo, doo, doo, doo
// Safe at last, doo, doo, doo, doo, doo, doo
// Safe at last
// It's the end, doo, doo, doo, doo, doo, doo
// It's the end, doo, doo, doo, doo, doo, doo
// It's the end, doo, doo, doo, doo, doo, doo
// It's the end

// FORMA 1: Almacenando toda la letra en una variable con el uso de `` e imprimiento dicha variable en consola

const letra =
`Baby shark, doo, doo, doo, doo, doo, doo
Baby shark, doo, doo, doo, doo, doo, doo
Baby shark, doo, doo, doo, doo, doo, doo
Baby shark

Mommy shark, doo, doo, doo, doo, doo, doo
Mommy shark, doo, doo, doo, doo, doo, doo
Mommy shark, doo, doo, doo, doo, doo, doo
Mommy shark

Daddy shark, doo, doo, doo, doo, doo, doo
Daddy shark, doo, doo, doo, doo, doo, doo
Daddy shark, doo, doo, doo, doo, doo, doo
Daddy shark

Grandma shark, doo, doo, doo, doo, doo, doo
Grandma shark, doo, doo, doo, doo, doo, doo
Grandma shark, doo, doo, doo, doo, doo, doo
Grandma shark

Grandpa shark, doo, doo, doo, doo, doo, doo
Grandpa shark, doo, doo, doo, doo, doo, doo
Grandpa shark, doo, doo, doo, doo, doo, doo
Grandpa shark

Let's go hunt, doo, doo, doo, doo, doo, doo
Let's go hunt, doo, doo, doo, doo, doo, doo
Let's go hunt, doo, doo, doo, doo, doo, doo
Let's go hunt

Run away, doo, doo, doo, doo, doo, doo
Run away, doo, doo, doo, doo, doo, doo
Run away, doo, doo, doo, doo, doo, doo
Run away

Safe at last, doo, doo, doo, doo, doo, doo
Safe at last, doo, doo, doo, doo, doo, doo
Safe at last, doo, doo, doo, doo, doo, doo
Safe at last

It's the end, doo, doo, doo, doo, doo, doo
It's the end, doo, doo, doo, doo, doo, doo
It's the end, doo, doo, doo, doo, doo, doo
It's the end`;

// console.log(letra);


// FORMA 2: Mediante el uso de ciclos for que repitan los versos de la canción

// const babyShark = 'Baby shark, doo, doo, doo, doo, doo, doo';
// for (let i = 0; i < 3; i++) {
//   console.log(babyShark);
// }
// console.log('Baby shark');
//
// const mommyShark = 'Mommy shark, doo, doo, doo, doo, doo, doo';
// for (let i = 0; i < 3; i++) {
//   console.log(mommyShark);
// }
// console.log('Mommy shark');
//
// const daddyShark = 'Daddy shark, doo, doo, doo, doo, doo, doo';
// for (let i = 0; i < 3; i++) {
//   console.log(daddyShark);
// }
// console.log('Daddy shark');
//
// const grandmaShark = 'Grandma shark, doo, doo, doo, doo, doo, doo';
// for (let i = 0; i < 3; i++) {
//   console.log(grandmaShark);
// }
// console.log('Grandma shark');
//
// const grandpaShark = 'Grandpa shark, doo, doo, doo, doo, doo, doo';
// for (let i = 0; i < 3; i++) {
//   console.log(grandpaShark);
// }
// console.log('Grandpa shark');
//
// const letsGoHunt = "Let's go hunt, doo, doo, doo, doo, doo, doo";
// for (let i = 0; i < 3; i++) {
//   console.log(letsGoHunt);
// }
// console.log("Let's go hunt");
//
// const runAway = 'Run away, doo, doo, doo, doo, doo, doo';
// for (let i = 0; i < 3; i++) {
//   console.log(runAway);
// }
// console.log('Run away');
//
// const safeAtLast = 'Safe at last, doo, doo, doo, doo, doo, doo';
// for (let i = 0; i < 3; i++) {
//   console.log(safeAtLast);
// }
// console.log('Safe at last');
//
// const itsTheEnd = "It's the end, doo, doo, doo, doo, doo, doo";
// for (let i = 0; i < 3; i++) {
//   console.log(itsTheEnd);
// }
// console.log("It's the end");


// FORMA 3: Mediante el uso de una función que reciba como parámetro una cadena del primer elemento de cada verso el cual es el que se repite

const versoDooDoo = (primerElemento) => {
  for (let i = 0; i < 3; i++) {
    console.log(primerElemento + ', doo, doo, doo, doo, doo, doo');
  }
  console.log(primerElemento);
}
//
// versoDooDoo('Baby Shark');
// versoDooDoo('Mommy Shark');
// versoDooDoo('Daddy Shark');
// versoDooDoo('Grandma Shark');
// versoDooDoo('Grandpa Shark');
// versoDooDoo("Let's go hunt");
// versoDooDoo('Run away');
// versoDooDoo('Safe at last');
// versoDooDoo("It's the end");


// FORMA 4: Mediante el uso de una función que en vez de recibir como parámetro una cadena con el primer elemento que se repite, recibamos un arreglo que contenga todos los primeros elementos en forma de cadena

const versoDooDooArreglo = (arreglo) => {
  // Ojo con los iteradores, cambian de nombre (let i y let j) para no confundirnos de ciclo for
  // El ciclo con letra i es para que le aplique la tarea a todos los elementos del arreglo que recibe como parámetro, desde 0 hasta arreglo.length
  for (let i = 0; i < arreglo.length; i++) {
    // El ciclo con letra j es para que repita el verso doo doo doo tres veces con cada elemento del arreglo desde 0 hasta 3
    for (let j = 0; j < 3; j++) {
      console.log(arreglo[i] + ', doo, doo, doo, doo, doo, doo');
    }
    console.log(arreglo[i]);
  }
}

const versos = [
  'Baby Shark',
  'Mommy Shark',
  'Daddy Shark',
  'Grandma Shark',
  'Grandpa Shark',
  "Let's go hunt",
  'Run away',
  "Safe at last",
  "It's the end",
]

versoDooDooArreglo(versos);
