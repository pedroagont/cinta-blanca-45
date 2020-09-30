console.log('Todo bien! 👍');

// ESTRUCTURA BÁSICA IF-ELSE
// if ( condicion ) {
//   paso 1, lo que procede si la condición se cumple o arroja un true/verdadera
// } else {
//   paso 2, lo que procede si la condición NO se cumple o arroja un false/falso
// }

// OPERADORES RELACIONALES
// Son los símbolos que nos permiten realizar comparaciones
// menor que: <
// mayor que: >
// menor igual que: <=
// mayor igual que: >=
// comparar igualdad: ==
// comparar idénticamente: ===
// diferente de: !==

// EJEMPLO
let edad = 18;

if(edad >= 18) {
  console.log('Es MAYOR de edad! 🥳');
} else {
  console.log('Es MENOR de edad! 👼🏻');
}

// ESTRUCTURA IF ANIDADOS
// if (condicion1) {
//   paso si es true en condicion1
// } else if (condicion2) {
//   paso si es false en condicion1
//   paso si es true en condicion2
// } else {
//   paso si es false en condicion1
//   paso si es false en condicion2
// }

// EJEMPLO 1
let dia = 'soleado';
let hora = '5:00';

if(dia === 'nublado') {
  console.log('No salgas está nublado! 🌧');
} else if(hora === '5:00') {
  console.log('Estás a tiempo de ir a correr 🏃‍♂️');
} else {
  console.log('Vas tarde a correr!');
}

// EJEMPLO CON USO DE AND (&&)
let precio = 500;

if(precio < 100) {
  console.log('Tu entrada es Regular 🎥');
} else if (precio >= 100 && precio <= 200){
  console.log('Tu entrada es VIP ⭐️');
} else if (precio >= 200 && precio <= 300){
  console.log('Tu entrada es Platino 🤩');
} else {
  console.log('Te vieron la cara amigx! 😞');
}

// EJEMPLO CON USO DE OR (||)
let comida = 'espaguetti';

if(comida === 'pera' || comida === 'piña' || comida === 'manzana') {
  console.log('Tu comida es una fruta 🍎');
} else if(comida === 'sirloin' || comida === 'arrachera' || comida === 'atún') {
  console.log('Tu comida es proteína 🥩');
} else {
  console.log('Ni idea de que sea tu comida 🤷‍♂️');
}

// Diferencia entre comparar con == o con ===

console.log(5 > 10); //false
console.log('hola' == 'hola'); //true
console.log(5 != 10); //true
console.log(10 != 10); //false

//Comparación básica de valor ==
console.log(100 == '100'); //true

//Comparación estricta o idéntica ===
console.log(100 === '100'); // false
console.log(100 === 100); // true

//Ejemplo sencillo de transformar cadenas:
// cadena.toLowerCase() -> a mínusculas
// cadena.toUpperCase() -> a mayúsculas

let variable = 'DIA'
if(variable.toLowerCase() == 'dia'){
  console.log('Sí es igual!');
}
