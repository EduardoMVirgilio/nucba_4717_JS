// Metodos de Array

/*

function nombreDeLaFuncion (argumentos||parametros){
    // algoritmo
    return 
}

const nombreDeLaFuncion = function (argumentos||parametros) {
    // Algoritmo
    return 
}

const nombreDeLaFuncion = (argumentos||parametros) => {
    // Algoritmo
    return 
}

const nombreDeLaFuncion = (argumentos||parametros) => // Algoritmo Simplificado 

const nombreDeLaFuncion = parametro => // Algoritmo Simplificado


*/

// Dada una palabra por parametro devolver el orden inverso de las letras
const invertir = (palabra) => {
  // separar los caracteres de la palabra
  let caracteres = palabra.split(""); // ["H","O","L","A"]
  // Invertimos los carateres
  caracteres.reverse();
  // Los volvemos a juntar
  return caracteres.join("");
};

/*
Version Simplificada
const invertir = palabra => palabra.split("").reverse().join("");
*/

// caso de uso: console.log("invertir",invertir("eduardo"))
// Debe devolver: "odraude"

console.log("invertir", invertir("eduardo"));

// Dado una palabra y una clave encriptar los caracteres que coincidan con la clave
const encriptar = (palabra, clave) => {
  let caracteres = palabra.split("");
  let enctriptado = caracteres.map((caracter) =>
    clave.indexOf(caracter) != -1 ? clave.indexOf(caracter) : caracter
  );
  return enctriptado.join("");
};

const desencriptar = (enctriptado, clave) => {
  let caracteres = enctriptado.split("");
  let conversion = caracteres.map((caracter) =>
    Number.isNaN(parseInt(caracter)) ? caracter : parseInt(caracter)
  );
  let decodificado = conversion.map((caracter) =>
    clave[caracter] ? clave[caracter] : caracter
  );
  return decodificado.join("");
};

// caso de uso: console.log("encriptar",encriptar("eduardo","abuelo"))
// Debe devolver: "3d20rd5"

console.log("encriptar", encriptar("eduardo", "abecedario"));

console.log("decodificar", desencriptar("25u0759", "abuelo"));

// Dado una lista de correos y un nuevo correo verificar si dicho existe y sino agregarlo a la lista
const upsert = (lista, correo) => {};

// caso de uso: console.log("upsert",upsert(["edu@gmail.com","nico@gmail.com"],"edu@gmail.com"))
// Debe devolver: "edu@gmail.com"
// caso de uso: console.log("upsert",upsert(["edu@gmail.com","nico@gmail.com"],"maria@gmail.com"))
// Debe devolver: ["edu@gmail.com","nico@gmail.com","maria@gmail.com"]

// Predefinir un catalogo de productos y dado un carrito por parametro calcular el valor total
const productos = [];
const calcular = (carrito) => {};
