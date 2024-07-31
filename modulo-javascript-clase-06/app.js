// closure

const nombre = (valor) => {
  const transformar = () => valor.split("");
  return transformar;
};

const deletrear = nombre("Eduardo")(); // ["E","d","u","a","r","d",o]

// Objetos clave valor

const cliente = {}; // Objeto Literal

cliente.nombre = "Eduardo";
cliente.edad = 28;
cliente.action = function () {
  return `Hola soy ${this.nombre}, tengo ${this.edad} años`;
};

Object.keys(cliente); // ["nombre","edad","action"]
Object.entries(cliente); // [["nombre","Eduardo"],["edad",28],["action",function]]
Object.values(cliente); // ["Eduardo",28,function]

// Spreed Operator
console.log("spreed", [...[0, 1, 2], ...[3, 4, 5]]); // [0,1,2,3,4,5,6]

const personaA = {
  nombre: "A",
  edad: 25,
};

const personaB = { ...personaA, nombre: "B" };

// Destructuracion

const { nombre: n, edad } = personaA;

console.log("Nombre", n);
console.log("Edad:", edad);

const [cero, uno, dos, ...elResto] = [...[0, 1, 2], ...[3, 4, 5]];

console.log("Cero", cero);
console.log("Uno", uno);
console.log("Dos", dos);
console.log("Otros", elResto);
