console.log('Hola desde el main!');

// CICLOS FOR
// Los ciclos nos sirven para repetir bloques de código con determinadas funciones, en donde cada repetición, se considera un ciclo o una iteración

// La estructura básica de un ciclo es la siguiente:
// for (inicio; final; paso/secuencia) {
//   tarea a repetir
// }

// Para repetir una tarea
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// Con un ciclo for:
for (let i = 0; i <= 5; i = i + 1){
  console.log(i);
}

// i = i + 1 se puede abreviar utilizando i++
for (let i = 0; i <= 100; i++){
  console.log(i);
}

// Para avanzar de 2 en 2
for (let i = 0; i <= 150; i = i + 2){
  console.log(i);
}

// i = i + N se puede apreviar como i += N

// Para avanzar de 3 en 3
for (let i = 100; i <= 300 ; i += 3){
  console.log(i);
}

// Para avanzar de 5 en 5
for (let i = 100; i <= 300 ; i += 5){
  console.log(i);
}

// Para retroceder de 1 en 1
for (let i = 100; i >= -300 ; i--){
  console.log(i);
}

//Empezar en 10, llegar a -250 y retroceder de 1 en 1
for (let i = 10; i >= -250; i--) {
  console.log(i);
}

//Empezar en -50, llegar a 500 y avanzar de 5 en 5
for (let i = -50; i <= 500; i+=5) {
  console.log(i);
}

//Empezar en 1000, llegar a 2000 y avanzar de 10 en 10
for (let i = 1000; i <= 2000; i+=10) {
  console.log(i);
}


// ¿Cómo se ligan los ciclos con los arreglos?
// Uso más común para ciclar arreglos:

let alumnos = [
  'Katherin',
  'Gabriela',
  'Esteban',
  'Brandon',
  'Gael',
  'Jazmín',
  'Benjamín'
]

console.log(alumnos);

// Para saber el tamaño de un arreglo hacemos uso de la propiedad arreglo.length
console.log(alumnos.length);

// Para agregar más alumnos hacemos uso del método push()
alumnos.push('Mariangel') //Así puedo agregar un elemento
alumnos.push('Ramón', 'Roberto') //Así puedo agregar más de un elemento (2 en este caso)

console.log(alumnos);
console.log(alumnos.length);

//Para acomodarlos de orden alfabético hacemos uso del método sort()
alumnos.sort()
console.log(alumnos);

//Para acomodarlos de manera inversa hacemos uso del método reverse()
alumnos.reverse()
console.log(alumnos);

// Ejemplo 1: imprimir en consola el nombre de todos los elementos de un arreglo de frutas

let frutas = [
  'Manzana',
  'Pera',
  'Sandía',
  'Fresa',
  'Plátano',
  'Pitahaya'
]

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// ...

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Ejemplo 2: imprimir en consola el nombre de todos los elementos par de un arreglo
for (var i = 0; i < frutas.length; i++) {
  if(i % 2 === 0) {
    console.log(i + ' ' + frutas[i]);
  } else {
    console.log(i + ' es impar');
  }
}
