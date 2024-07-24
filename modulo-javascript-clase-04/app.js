// Funciones
/*
function suma() {}

const suma = function () {};

const resultado = suma();

console.log(resultado);
*/
// Parametros
/*
const suma = function (numeroA, numeroB) {
  return numeroA + numeroB;
};

const resultado = suma(1, 2);
console.log(resultado); // 3
*/
// Parametros por defecto
/*
const saludar = function (nombre = "Eduardo") {
  return "Hola " + nombre + " !";
};

const mensaje = saludar();
console.log(mensaje); // Hola Eduardo !

const mensaje2 = saludar("Luis");
console.log(mensaje2); // Hola Luis !
*/
// Funciones flecha

// const op1 = (numeroA, numeroB) => numeroA + numeroB;

// Funciones recursivas
/*
function bucle(numero) {
  if (numero <= 1) return 1;
  return numero * bucle(numero - 1);
}
bucle(3); // 1 * 2 * 3
*/

// Callback

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multi = (a, b) => a * b;
const divi = (a, b = 1) => a / b;
const calcular = (a, b, op) => op(a, b);
calcular(1, 2, suma);
const ordernar = (a, b) => a - b;
[3, 4, 2, 1].sort(ordernar);

// Closure

function imprimirVocal(letra) {
  switch (letra) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
      console.log(letra);
      break;

    default:
      return;
      break;
  }
}
function deletrear(palabra, imprimir) {
  for (let index = 0; index < palabra.length; index++) {
    const letra = palabra[index];
    imprimir(letra);
  }
}

deletrear("HOLA", imprimirVocal);
