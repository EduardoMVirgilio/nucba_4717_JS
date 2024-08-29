const loginForm = document.getElementById("login--form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const errorMessage = document.getElementById("form__error");

// Nos traemos los usuarios del localStorage o creamos un array vacio si no hay usuarios registrados

// Función para guardar el usuario en el sessionStorage
const save = (user) => {};

// Función para mostrar el error al validar el formulario.

const showError = (message) => {};

// Función para chequear si el campo esta vacio

const isEmpty = (input) => {};

// Función para chequear si el email ya existe en el array de usuarios.

const isExistingEmail = (email) => {};

// Función para validar si la password ingresada coincide con la registrada para ese mail.

const isMatchingPass = (password, email) => {};

// Función para mostrar error al validar el formulario.

const isValidAccount = (email, password) => {};

// Función para loguear al usuario

const login = (e) => {};

// Función inicializadora para agregar los listeners de los elementos del DOM

loginForm.addEventListener("submit", login);
