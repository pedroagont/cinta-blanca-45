console.log('Hola desde ejercicios!');

// RETO 1: VARIABLES
//
// Guarda en variables el nombre de las siguientes mascotas:
//
// 1. Pedrito
// 2. Rufo
// 3. Chancla
//
// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// “Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho”

let masc1 = 'Pedrito';
let masc2 = 'Rufo';
let masc3 = 'Chancla';

console.log('Mis mascotas son ' + masc1 + ', ' + masc2 + ' y ' + masc3 + '. Les quiero mucho.');
alert('Mis mascotas son ' + masc1 + ', ' + masc2 + ' y ' + masc3 + '. Les quiero mucho.');


// RETO 2: INPUT OUTPUT
//
// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:
//
// “Quiero mucho a mis mascotas mascota1 y mascota2”
//
// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

let mascota1 = prompt('Ingresa el nombre de una de tus mascotas');
let mascota2 = prompt('Ingresa el nombre de otra de tus mascotas');

console.log('Quiero mucho a mis mascotas ' + mascota1 + ' y ' + mascota2);
alert('Quiero mucho a mis mascotas ' + mascota1 + ' y ' + mascota2);


// RETO 3: CONVERSIÓN DE DATOS
//
// Guarda la cadena de texto "100" en una variable
let texto = '100';

// Muestra el contenido de esta variable en consola
console.log(texto);

// Muestra el TIPO DE DATO de esta variable en consola
console.log(typeof texto);

// Transforma la variable de string a number
//Ambas formas es posible parseInt() o Number()
let parse = parseInt(texto);
let number = Number(texto);

// Muestra nuevamente el contenido de esta variable en consola
console.log(parse);
console.log(typeof parse);

console.log(number);
console.log(typeof number);

// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla?
// El color cambia y el tipo de dato pasa de ser string a ser number

// ¿Qué es entonces un tipo de dato?
// Un tipo de dato nos muestra el tipo de dato de determinada variable con la que estemos trabajando
