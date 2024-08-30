const loginForm = document.getElementById("login--form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const errorMessage = document.getElementById("form__error");

// Nos traemos los usuarios del localStorage o creamos un array vacio si no hay usuarios registrados

// Función para guardar el usuario en el sessionStorage
const save = (email = "") => {
  let users = JSON.parse(localStorage.getItem("usuarios")) || [];
  let user = users.find((user) => user.email == email);
  sessionStorage.setItem("usuario", JSON.stringify(user));
  return user;
};

// Función para mostrar el error al validar el formulario.

const showError = (input, error, message) => {
  const fieldset = input.parentElement;
  const msgError = document.querySelector(error);
  fieldset.classList.remove("success");
  fieldset.classList.add("error");
  msgError.style.display = "block";
  msgError.innerText = message;
};

// Función para chequear si el campo esta vacio

const isEmpty = (input) => {
  let value = input.value.trim();
  return value.length == 0;
};

// Función para chequear si el email ya existe en el array de usuarios.

const isExistingEmail = (email = "") => {
  let users = JSON.parse(localStorage.getItem("usuarios")) || [];
  return users.some((user) => user.email == email.trim());
};

// Función para validar si la password ingresada coincide con la registrada para ese mail.

const isMatchingPass = (password, email) => {
  let users = JSON.parse(localStorage.getItem("usuarios")) || [];
  return users.some(
    (user) => user.email == email.trim() && user.password == password
  );
};

// Función para mostrar error al validar el formulario.

const isValidAccount = () => {
  let valid = false;
  if (isEmpty(emailInput)) {
    showError(emailInput, "#email + small", "Por favor, complete los campos");
    return;
  }
  if (!isExistingEmail(emailInput.value)) {
    showError(emailInput, "#email + small", "El email ingresado es invalido");
    return;
  }
  if (isEmpty(passInput)) {
    showError(passInput, "#password + small", "Por favor, complete los campos");
    return;
  }

  if (!isMatchingPass(passInput.value, emailInput.value)) {
    showError(
      passInput,
      "#form__error",
      "Los datos ingresados son incorrectos"
    );
    loginForm.reset();
    return;
  }
  alert("Ya estas en linea!");
  valid = true;
  errorMessage.textContent = "";
  loginForm.reset;
  return valid;
};

// Función para loguear al usuario

const login = (e) => {
  e.preventDefault();
  if (isValidAccount()) {
    save(emailInput.value);
    window.location.href = "./home.html";
  }
};

// Función inicializadora para agregar los listeners de los elementos del DOM
loginForm.addEventListener("submit", login);
