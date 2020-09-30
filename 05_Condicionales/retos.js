console.log('Hola desde retos! 👋');

// ------- RETO 1
// Almacenar un password en una variable
// Preguntar al usuario su contraseña
// Si la contraseña es correcta, mostrar en consola: 'Bienvenido'
// Si la contraseña no es correcta, mostrar en consola: 'Password incorrecto, intente de nuevo'

let pregunta = prompt('Ingresa tu contraseña');
let contrasena = 'PatitoFeo!123';

if(pregunta === contrasena) {
  console.log('Bienvenido! 👍');
} else {
  console.log('Password incorrecto, intente de nuevo 👎');
}

// ------- RETO 2
// Le van a preguntar al usuario que les dé un número.
// Van a decir si este numero es par o es impar.
// Utilizar símbolo de modulo/residuo -> % <-

let numero = prompt('Ingrese cualquier número para verificar si es par o impar');
let residuo = numero % 2;

if(residuo === 0){
  console.log('El número es PAR ya que al dividirlo entre dos su residuo es ' + residuo);
} else if (residuo === 1) {
  console.log('El número es IMPAR ya que al dividirlo entre dos su residuo es ' + residuo);
} else {
  console.log('Datos incorrectos, favor de ingresar un número entero');
}
