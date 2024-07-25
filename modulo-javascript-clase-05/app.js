const esPar = (numero) => {
  const isNumber = !isNaN(Number(numero));
  if (!isNumber) return "No es un numero";
  const condition = numero % 2 == 0;
  return condition ? "Es par" : "Es impar";
};

console.log(esPar("A"));
console.log(esPar(2));
console.log(esPar(3));

let contiene = (array, n) => {
  let existe = false;
  for (const i of array) {
    console.log(i);
    if (i == n) {
      existe = true;
    }
  }
  return existe ? "Si esta" : "No esta";
};

console.log(contiene([1, 2, 3, 4], 2));
console.log(contiene([1, 2, 3, 4], 5));
