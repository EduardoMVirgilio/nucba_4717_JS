// Alta Baja Modificación
// Create Read Update Delete
// Browse Read Edit Add Delete

const sistema = {};

sistema.usuarios = [];

sistema.next = function () {
  if (this.usuarios.length == 0) return 1;
  let ultimoUsuario = this.usuarios.pop();
  return ultimoUsuario.id + 1;
};

sistema.notExist = function (email) {
  if (usuarios.length == 0) return true;
  return !usuarios.map((usuario) => usuario.email).includes(email);
};

sistema.add = function (email = "", alias = "") {
  const usuario = {};
  usuario.id = this.next();
  usuario.email = email;
  usuario.alias = alias;
  usuario.admin = email.includes("@nucba.com");
  // validar el formato del correo
  if (!this.notExist(email)) {
    return alert("El correo ya esta registrado");
  }
  this.usuarios.push(usuario);
  return this.usuarios;
};

sistema.remove = function (email) {
  this.usuarios = this.usuarios.filter((usuario) => usuario.email != email);
  return this.usuarios;
};

sistema.add("edu@gmail.com", "EduardoMV");
sistema.add("edu@gmail.com");
sistema.add("luis@nucba.com", "LuisNucba");

sistema.remove("edu@gmail.com");
sistema.add("edu@gmail.com", "EduardoMV");
/*
[
    { id: 2, email: "luis@nucba.com", alias: "LuisNucba", admin: true },
    { id: 3, email: "edu@gmail.com", alias: "Eduardo", admin: false },
];
*/
