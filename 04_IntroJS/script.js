//Hola Mundo en JavaScript!
console.log('Hola mundo! 🥳');

// VARIABLES
// palabra reservada (var, let o const) + nombre de la variable

var variable;

//asignar valor a variable
variable = 20;

// Declarar y asignar valores a variables
var sensei = 'Pedro';
var edad = 26;

// Diferencias entre var, let y const:
// SCOPE
// var -> variable global
// let -> variable local
// const -> constante local y no puede cambiar su valor

// var sí se puede reasignar
var num = 5;
console.log(num);
num = 3;
console.log(num);

// let también se puede reasignar
let num2 = 15;
console.log(num2);
num2 = 10;
console.log(num2);

// const no se puede reasignar
const pi = 3.1416;
console.log(pi);
// pi = 3.141565 //esto marca error
// console.log(pi);

// var es una variable global
var num3 = 13;
{
  console.log(num3);
}

// let es una variable local
let num4 = 15;
{
  console.log(num4);
}

{
  // GLOBAL: var funciona en todo el documento
  var num5 = 50;
}
console.log(num5);

{
  // LOCAL: let funciona en el espacio donde es declarada
  let num6 = 60;
}
// console.log(num6); //esto marca error ya que la variable fue declarada adentro de otro scope de manera local



//TIPOS DE DATOS

//Números
let numero = 100;
let numDecimal = 10.15;

//Strings (texto / cadenas de caracteres)
let string = 'Pedro';
let otroNombre = 'Ángel Acatitla';
let masTexto = 'Esto es un súper texto larguísimo, imaginemos que son muchas y muchas líneas';

//Booleano (sí/no - true/false)
let estaVivo = true;
let esMayorDeEdad = true;
let esHijoUnico = false;

//Arreglos o listas (se declaran usando corchetes [])
let lista = []; //esto es un arreglo vació
let lista1 = [1, 15, 90, 52, 86];
let lista2 = ['Benjamin', 'Ángel', 'Perla', 'Jazmin'];
let lista3 = [545, 'Cancun', true, [2,3]];

console.log(lista3);

// Podemos acceder a los valores del arreglo mediante su posición: arreglo[pos0, pos1, posN]
console.log(lista2[1]); //Ángel
console.log(lista3[2]); //true

// Dato curioso: las cadenas también son consideradas arreglos de caracteres
let cadena = 'Hola';
console.log(cadena[0]); //H
console.log(cadena[2]); //l


//Objetos con propiedades (se declaran utilizando llaves {})
// objeto = {
//   key0: value0,
//   key1: value1,
//   keyN: valueN
// }

let objeto = {}; //objeto vacío
let manzana = { nombre: 'Manzana' };
let alumno = {
  nombre: 'Simón',
  apellido: 'Acero',
  edad: 27,
  curso: 'Cinta Blanca',
  presente: true
};

//OPERADORES ARITMÉTICOS
// Suma (+)
let suma = 10 + 5;
console.log(suma); //15

// Resta (-)
let resta = 10 - 5;
console.log(resta); //5

// Multiplicación (*)
let multiplicacion = 5 * 5;
console.log(multiplicacion); //25

// División (/)
let division = 25 / 5;
console.log(division); //5

// Concatenar es la forma en que unimos cadenas con el símbolo de (+)
let nombre = 'Pedro Antonio';
let apellido = 'González Martínez';
let nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto); // Pedro Antonio González Martínez

//OUTPUTS
console.log('Esto es un output desde la consola');
alert('Esto es un output desde alert!');

//INPUTS
prompt('Ingresa un dato!')

let correo = prompt('Ingresa tu correo');
console.log(correo);
alert(correo)

// Podemos usar un segundo argumento en el prompt para poner un placeholder
let nacimiento = prompt('Ingresa tu fecha de nacimiento', 'DD/MM/AA');
console.log(nacimiento);
