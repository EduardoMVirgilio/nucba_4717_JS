// Funciones

function sum(...numeros) {
  // Algoritmo
  if (numeros.length == 0) {
    return null;
  }
  const autosuma = function (acumulado, valor) {
    return (acumulado += valor);
  };
  return numeros.reduce(autosuma, 0);
}

const responder = function () {};

const quest = (pregunta) => prompt(pregunta);

console.log(sum());
console.log(sum(1, 2, 3, 4));

// Callbacks

// Objetos

const persona = {};
persona.nombre = "Eduardo";
persona.saludar = function () {
  "Hola".concat(" ", this.nombre);
};

persona.saludar(); // Hola Eduardo

Object.values(persona); // ["Eduardo", saludar];
Object.entries(persona); // [["nombre","Eduardo"],["saludar",function]]
Object.keys(persona); // ["nombre","saludar"]

console.log(persona.nombre);
console.log(persona["nombre"]);
