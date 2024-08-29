// Nos traemos todos los elementos necesarios del DOM
const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

/*---------------Funciones auxiliares----------------*/

// Nos traemos los usuarios del localStorage o creamos un array vacio si no hay usuarios registrados

// Función para guardar los usuarios en el localStorage
const save = () => {};

// Función para chequear si el campo esta vacio

const isEmpty = (input) => {};

// Función para determinar si el largo del value del input esta entre un minimo y un maximo de caracteres

const isBetween = (input, min, max) => {};

// Función para validar una dirección de email con expresiones regulares.

const isEmailValid = (email) => {};

// Función para chequear si el email ya existe en el array de usuarios.

const isExistingEmail = (email) => {};

// Función para validar una contraseña de email con expresiones regulares.

const isPassSecure = (password) => {};

// Función para validar un telefono con expresiones regulares.

const isPhoneValid = (phone) => {};

// Función para mostrar error al validar un input.

const showError = (input, message) => {};

// Función para mostrar un input como valido.

const showSuccess = (input) => {};

/*-----------------Funciones de validación de inputs-----------------*/

// Función para validar un input de tipo texto.

const checkTextInput = (input) => {};

// Función para validar un input de tipo email.

const checkEmail = (input) => {};

// Función para validar un input de tipo telefono.

const checkPassword = (input) => {};

// Función para validar un input de tipo telefono.

const checkPhone = (input) => {};

/*-----------------validación general y almacenamiento de datos-----------------*/

// Función para validar el formulario y almacenar los datos en el array de usuarios.

const validateForm = (e) => {};

// Función inicializadora para agregar los listeners a los inputs y al formulario.

registerForm.addEventListener("submit", validateForm);
// validar por evento input cada campo
nameInput.addEventListener("input", () => checkTextInput(nameInput));
lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
emailInput.addEventListener("input", () => checkEmail(emailInput));
passInput.addEventListener("input", () => checkPassword(passInput));
phoneInput.addEventListener("input", () => checkPhone(phoneInput));
