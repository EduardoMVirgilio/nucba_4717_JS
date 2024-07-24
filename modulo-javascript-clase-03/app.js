// -Ciclos en JS.

// -Ciclo For
/*
for (let kilometros = 0; kilometros <= 100; kilometros += 1) {
  if (kilometros == 5) {
    continue;
  }
  if (kilometros == 10) {
    break;
  }
  console.log(kilometros);
}
*/
// -Sentencia break.

// -Ciclo While
/*
let kilometros = 0;
while (kilometros <= 100) {
  if (kilometros == 10) {
    break;
  }
  console.log(kilometros);
  kilometros += 1;
}
*/

// -Ciclo Do While.
/*
let kilometros = 0;
do {
  console.log("Empieza");
  if (kilometros == 10) {
    break;
  }
  console.log(kilometros);
  kilometros += 1;
} while (kilometros <= 100);
*/
// -Arrays.

let tareas = [
  ["titulo 1", "descripción 1", true],
  ["titulo 2", "descripción 2", false],
  ["titulo 3", "descripción 3", true],
];

let lista = Array.from({ length: 4 });

let listaNueva = new Array(4);
/*
for (let indice = 0; indice < tareas.length; indice += 1) {
  let tarea = tareas[indice];
  for (let propiedad = 0; propiedad < tarea.length; propiedad += 1) {
    console.log(tarea[propiedad]);
  }
}
*/
// -Ciclo for of

for (const tarea of tareas) {
  for (const propiedad of tarea) {
    console.log(propiedad);
  }
}
