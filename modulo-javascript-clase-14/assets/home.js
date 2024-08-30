const logoutBtn = document.getElementById("logout-message");
const userName = document.getElementById("user-name");

// Nos traemos el usuario activo del sessionStorage

/**
 * Función para mostrar el nombre y apellido del usuario activo
 */
const showUserName = () => {
  let user = JSON.parse(sessionStorage.getItem("usuario")) || null;
  if (!user) {
    return (window.location.href = "./login.html");
  }
  userName.innerText = `${user.name} ${user.lastName}`;
};

/**
 * Función para cerrar sesion y regresar al index
 */
const logout = () => {
  if (confirm("¿Estas seguro que deseas cerrar sesion?")) {
    sessionStorage.removeItem("usuario");
    window.location.href = "../index.html";
  }
};

/**
 * Función incializadora para ejecutar las funciones al cargar la página y agregar los listeners
 */

showUserName();
logoutBtn.addEventListener("click", logout);
