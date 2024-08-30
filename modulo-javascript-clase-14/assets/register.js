// Nos traemos todos los elementos necesarios del DOM
const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

/*---------------Funciones auxiliares----------------*/

// Nos traemos los usuarios del localStorage o creamos un array vacio si no hay usuarios registrados

// Función para guardar los usuarios en el localStorage
const save = (user) => {
  let users = JSON.parse(localStorage.getItem("usuarios")) || [];
  localStorage.setItem("usuarios", JSON.stringify([...users, user]));
  return user;
};

// Función para chequear si el campo esta vacio

const isEmpty = (input) => {
  let value = input.value.trim();
  return value.length == 0;
};

// Función para determinar si el largo del value del input esta entre un minimo y un maximo de caracteres

const isBetween = (input, min, max) => {
  let value = input.value.trim();
  return value.length >= min && value.length <= max;
};

// Función para validar una dirección de email con expresiones regulares.

const isEmailValid = (email = "") => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(email);
};

// Función para chequear si el email ya existe en el array de usuarios.

const isExistingEmail = (email = "") => {
  let users = JSON.parse(localStorage.getItem("usuarios")) || [];
  return users.some((user) => user.email == email.trim());
};

// Función para validar una contraseña de email con expresiones regulares.

const isPassSecure = (password = "") => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return re.test(password);
};

// Función para validar una contraseña previa.

const isPassMatch = (previus = "", password = "") => {
  return previus == password;
};

// Función para validar un telefono con expresiones regulares.

const isPhoneValid = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
};

// Función para mostrar error al validar un input.

const showError = (input, message) => {
  const fieldset = input.parentElement;
  const error = fieldset.querySelector("small");
  fieldset.classList.remove("success");
  fieldset.classList.add("error");
  error.style.display = "block";
  error.innerText = message;
};

// Función para mostrar un input como valido.

const showSuccess = (input) => {
  const fieldset = input.parentElement;
  const error = fieldset.querySelector("small");
  fieldset.classList.add("success");
  fieldset.classList.remove("error");
  error.style.display = "none";
  error.innerText = "";
};

/*-----------------Funciones de validación de inputs-----------------*/

// Función para validar un input de tipo texto.

const checkTextInput = (input) => {
  //Seteamos la validez del value en false para empezar.
  let valid = false;
  const minCharacters = 3;
  const maxCharacters = 25;

  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }
  if (!isBetween(input, minCharacters, maxCharacters)) {
    showError(
      input,
      `Este Campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`
    );
    return;
  }
  // Si pasa por ambas validaciones llamamos a la funcion showSuccess y cambiamos el estado valid a true
  showSuccess(input);
  valid = true;
  return valid;
};

// Función para validar un input de tipo email.

const checkEmail = (input) => {
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "El email es obligatorio");
    return;
  }
  if (!isEmailValid(input.value)) {
    showError(input, "El email no es valido");
    return;
  }
  if (isExistingEmail(input.value)) {
    showError(input, "El email ya se encuentra registrado");
    return;
  }
  // Si pasa por ambas validaciones llamamos a la funcion showSuccess y cambiamos el estado valid a true
  showSuccess(input);
  valid = true;
  return valid;
};

// Función para validar un input de tipo telefono.

const checkPassword = (input) => {
  //Seteamos la validez del value en false para empezar.
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "La contraseña es obligatoria");
    return;
  }
  if (!isPassSecure(input.value)) {
    showError(
      input,
      "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo"
    );
    return;
  }
  // Si pasa por ambas validaciones llamamos a la funcion showSuccess y cambiamos el estado valid a true
  showSuccess(input);
  valid = true;
  return valid;
};

const checkConfirmPassword = (input) => {
  //Seteamos la validez del value en false para empezar.
  let valid = false;
  let previus = document.querySelector("#password");
  if (isEmpty(input)) {
    showError(input, "La contraseña es obligatoria");
    return;
  }
  if (!isPassSecure(input.value)) {
    showError(
      input,
      "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo"
    );
    return;
  }
  if (!isPassMatch(previus.value, input.value)) {
    showError(input, "La contraseña debe ser igual a la anterior");
    return;
  }
  // Si pasa por ambas validaciones llamamos a la funcion showSuccess y cambiamos el estado valid a true
  showSuccess(input);
  valid = true;
  return valid;
};
// Función para validar un input de tipo telefono.

const checkPhone = (input) => {
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "El telefono es obligatorio");
    return;
  }
  if (!isPhoneValid(input)) {
    showError(input, "El telefono no es valido");
    return;
  }
  // Si pasa por ambas validaciones llamamos a la funcion showSuccess y cambiamos el estado valid a true
  showSuccess(input);
  valid = true;
  return valid;
};

/*-----------------validación general y almacenamiento de datos-----------------*/

// Función para validar el formulario y almacenar los datos en el array de usuarios.

const validateForm = (e) => {
  e.preventDefault();
  // Guardamos el estado de los inputs en variables
  // se almacena el valor de retorno de las funciones de validación pero además se ejecutan las funciones para mostrar los mensajes de error.
  let isNameValid = checkTextInput(nameInput);
  let isLastNameValid = checkTextInput(lastNameInput);
  let isEmailValid = checkEmail(emailInput);
  let isPasswordValid = checkPassword(passInput);
  let isConfirmPasswordValid = checkConfirmPassword(confirmPassword);
  let isPhoneValid = checkPhone(phoneInput);

  let isValidForm =
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isPhoneValid;

  if (isValidForm) {
    save({
      name: nameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passInput.value,
      phone: phoneInput.value,
    });
    alert("Te has registrado con exito!");
    window.location.href = "login.html";
  }
};

// Función inicializadora para agregar los listeners a los inputs y al formulario.

registerForm.addEventListener("submit", validateForm);
// validar por evento input cada campo
nameInput.addEventListener("input", () => checkTextInput(nameInput));
lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
emailInput.addEventListener("input", () => checkEmail(emailInput));
passInput.addEventListener("input", () => checkPassword(passInput));
confirmPassword.addEventListener("input", () =>
  checkConfirmPassword(confirmPassword)
);
phoneInput.addEventListener("input", () => checkPhone(phoneInput));
