// JavaScript Object Notation (formato de texto)
let json = [
  ["usuario", "clave", "photo"],
  ["usuario", "clave", "photo"],
  ["usuario", "clave", "photo"],
  ["usuario", "clave", "photo"],
];
// JSON.parse(json); Texto a Datos
// JSON.stringify(json); Datos a Texto

const leer = (key = "", storage = localStorage) =>
  JSON.parse(storage.getItem(key));
const guardar = (key = "", data = [], storage = localStorage) =>
  storage.setItem(key, JSON.stringify(data));
