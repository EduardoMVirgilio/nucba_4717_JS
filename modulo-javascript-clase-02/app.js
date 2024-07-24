// Hosting y Scope
/*
const nombre = "Eduardo";

function imprimir() {
  let apellido = "Virgilio";
  console.log(nombre);
  console.log(apellido);
}

console.log(nombre);
console.log(apellido); // undefined
*/
// Operadores de asignación
/*
let mensaje = "";

mensaje += "Hola";
mensaje += " Mundo";

console.log(mensaje); // Hola Mundo
*/
// Operadores aritmetícos

// + SUMA
// - RESTA
// * MULTIPLICAR
// / DIVISIÓN
// % RESTO DE LA DIVISIÓN

// Operadores de comparación

// <
// >
// ==
// >=
// <=
// !=
// ===
// !==

// Operadores Lógicos

// && AND

// || OR

// ! NOT

// Condicional if
/*
if (confirm("Sos mayor de edad ?")) {
  console.log("Nos vamos de fiesta");
}
*/
/*
if (confirm("La tierra plana ?")) {
  alert("Terraplanista");
}

if (confirm("La tierra es un donut ?")) {
  alert("Terra Donut");
}

alert("Normal");
*/

// Condicional Switch

let horario = "Diurno";
switch (horario) {
  case "Diurno":
    alert("Vamos a la playa");
    break;
  case "Nocturno":
    alert("Jugamos juegos de mesa");
    break;

  default:
    alert("Vida normal");
    break;
}

// Condicional Ternario
let time = null ?? 20.4;
