// Menu

/*
const btnMenu = document.querySelector("#actions button");
const menu = document.querySelector("#menu");
//btnMenu.onclick = () => menu.classList.toggle("active");
const showMenu = (evento) => {
  //menu.style.display = "flex";
  evento.preventDefault();
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    evento.target.innerText = "Menu";
  } else {
    menu.classList.add("active");
    evento.target.innerText = "Ocultar";
  }
};
btnMenu.addEventListener("click", showMenu);
*/
// Contraseña
/*
const btnPassword = document.querySelector("#login button");
const showPassword = function (evento) {
  const btn = evento.target;
  const form = btn.parentElement;
  const input = form.querySelector("input");
  if (input.type == "password") {
    input.setAttribute("type", "text");
    btn.innerText = "Ocultar";
  } else {
    input.setAttribute("type", "password");
    btn.innerText = "Mostrar";
  }
};
btnPassword.onclick = showPassword;
*/
// Galería
const gallery = [{ mini: "", original: "" }];
const minis = document.querySelectorAll(".mini img");
const preview = document.querySelector("#previa");
const showPreview = function (evento) {
  preview.setAttribute("src", evento.target.src.replace("400", "1080"));
};

minis.forEach(function (miniatura) {
  miniatura.addEventListener("click", showPreview);
});
