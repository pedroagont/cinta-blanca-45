console.log('Hola desde el script!');

// FUNCIONES
// Las funciones son un conjunto de instrucciones que podemos mandar a llamar cuando sean requeridas en determinado momento de nuestro código
//
// La estructura básica para declarar una función es la siguiente:
// function miFuncion(){
//   //Código a ejecutar de la función
// }
//
// function funcionConParametros(param1, param2, param3, ..., parametroN){
//   //Código a ejecutar de la función
//   //param1, param2, param3
// }
//
// Para mandar a llamar una función, tenemos que invocarla simplemente escribiendo su nombre y en caso de que lo requiera, pasarle los parámetros necesarios
// miFuncion()
// funcionConParametros('Parametro1', 123, true)

function saludar() {
  console.log('Hola desde la función saludar! 👋');
}
saludar();

function saludarAlumno(nombre) {
  console.log('Hola ' + nombre + ', saludos desde la función! 👋');
}
saludarAlumno('Benjamín');
saludarAlumno('Xólotl');
saludarAlumno('Vanessa');
saludarAlumno('Simón');
saludarAlumno('Ramón');

// Declaración de arrow functions o funciones tipo flecha () => {}
// Como buena práctica podemos declararlas haciendo uso de const
// Hacen la declaración de las funciones más elegante ya que se pueden declarar en una sóla línea y evitar caracteres extras como ; y {}

function funcionTradicional (){
  console.log('Hola desde funcion tradicional!');
}
funcionTradicional();

const funcionFlecha = () => console.log('Hola desde funcion flecha!');
funcionFlecha();

const funcionFlechaConParametros = (param1, param2, param3) => {
  console.log(param1, param2, param3);
}
funcionFlechaConParametros('Esto es el parámetro1', 21231231, ['Un valor', 'Otro valor', 3]);

// EJEMPLO:
// Crear una función que imprima en consola la suma de dos números

// Función tradicional
function sumar(num1, num2){
  console.log(num1 + num2);
}
sumar(5, 10);

// Función flecha
const sumarArrow = (num1, num2) => console.log(num1, num2);
sumarArrow(200, 300);

// EJEMPLO RETURN
// Utilizamos el return para indicar dónde finaliza nuestra función y/o qué es lo que nos debe regresar/retornar
// Todo lo que pongamos después del return NO se va a ejecutar en el código
// En las funciones flecha, si la declaración queda en una sóla línea, el return queda implícito, es decir, que no se necesita poner

// Función tradicional
function sumarDos(num1, num2) {
  return num1 + num2;
}
// Si al hacer uso de retorn, la función en sí no imprime en consola, habrá que mandarla a llamar dentro de un console.log para ver lo que retorna
console.log(sumarDos(50, 50));

// Función flecha
const sumarDosArrow = (num1, num2) => num1 + num2;
console.log(sumarDosArrow(100, 100));

//Podemos mandar a llamar funciones dentro de otras funciones como parámetro
const imprimirEnConsola = (texto) => console.log(texto);
imprimirEnConsola(sumarDosArrow(30, 30));
