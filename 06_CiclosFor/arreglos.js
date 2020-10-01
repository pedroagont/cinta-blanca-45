console.log('Hola desde arreglos!');

// ARREGLOS
// Se declaran utilizando los corchetes [] y cada elemento es considerado una posición del arreglo
// let arreglo = [ pos0, pos1, pos2, ..., posN ]

let arregloVacio = [];

// Posición        0        1       2      3
let colores = [ 'Negro', 'Rojo', 'Rosa', 'Azul']

console.log(colores);

// ¿Cómo accedemos a cada valor del arreglo?

console.log( colores[0] ); // Negro
console.log( colores[1] ); // Rojo
console.log( colores[2] ); // Rosa
console.log( colores[3] ); // Azul
console.log( colores[4] ); // undefined, significa que no está definido ningún elemento en esa posición, más no es un error como tal

// MÉTODOS
// Nos sirven para manipular los arreglos de diferentes maneras

// ¿Cómo agregar elementos al arreglo?
// arreglo.push(elemento)

colores.push('Blanco');
colores.push('Verde');

console.log(colores);
console.log(colores[4]); // Blanco
console.log(colores[5]); // Verde

// ¿Cómo eliminar el último elemento del arreglo?
// arreglo.pop();

colores.pop();
console.log(colores); //['Negro', 'Rojo', 'Rosa', 'Azul', 'Blanco']

// ¿Cómo eliminar valores específicos del arreglo?
// arreglo.splice(val1, val2, val3);
// val1 -> en qué posición quieres empezar
// val2 -> cuántos valores quieres remover
// val3 -> elemento que desea sustuir (no siempre es necesario)

colores.splice(2, 1); // si no le pongo un tercer parámetro, simplemente lo elimina
console.log(colores); //['Negro', 'Rojo', 'Azul', 'Blanco']

colores.splice(1, 1, 'Amarillo'); // si sí le pongo el tercer parámetro, lo sustituye
console.log(colores); //['Negro', 'Amarillo', 'Azul', 'Blanco']

// ¿Cómo reordeno los elementos de la cadena al revés?
// arreglo.reverse()

colores.reverse();
console.log(colores);

// Las cadenas también se pueden trabajar como arreglos de caracteres

let nombre = 'Pedro Antonio';
console.log(nombre);
console.log(nombre[0]);
console.log(nombre[1]);
console.log(nombre[2]);

// Separar las letras de una cadena
// cadena.spit()

console.log(nombre.split('')); [ 'P', 'e', 'd', 'r', 'o']
console.log(nombre.split(' ')); [ 'Pedro', 'Antonio']

// Más métodos y referenicas: https: www.w3schools.com/js/js_array_methods.asp
