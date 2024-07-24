let preguntas = ["Cual es tu nombre?", "Cual es tu edad?", "Donde vives?"];
let indice = 0;
let respuestas = [];
while (indice < preguntas.length) {
  let respuesta = prompt(preguntas[indice]);
  if (indice == 0 && respuesta.trim().length >= 2) {
    respuestas[0] = respuesta.trim();
    indice += 1;
  }
  if (indice == 1 && respuesta.trim().length > 1 && Number(respuesta) < 18) {
    alert("Eres menor de edad");
    break;
  }

  if (indice == 1 && respuesta.trim().length > 1 && Number(respuesta) >= 18) {
    respuestas[1] = Number(respuesta);
    indice += 1;
  }
  if (indice == 2 && respuesta.trim().length > 3) {
    respuestas[2] = respuesta.trim();
    indice += 1;
  }
}

for (let indice = 0; indice < respuestas.length; indice += 1) {
  console.log(respuestas[indice]);
}

if (respuestas[1]) {
  alert("Bienvenido " + respuestas[0]);
}
