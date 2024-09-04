/*
const container = document.querySelector("#container__carrusel");
const wrapper = document.querySelector("#wrapper__carrusel");
const btnPrev = document.querySelector("#btn_prev_carrusel");
const btnNext = document.querySelector("#btn_next_carrusel");
let indice = 1;

btnNext.addEventListener("click", (event) => {
  wrapper.style.transform = `translateX(-${indice * container.clientWidth}px)`;
  indice++;
  if (indice == 4) {
    indice = 0;
  }
});

btnPrev.addEventListener("click", (event) => {
  if (indice > 0 && indice < 4) {
    wrapper.style.transform = `translateX(-${
      indice * container.clientWidth
    }px)`;
    indice--;
  } else {
    indice = 1;
  }
  console.log(indice);
});
*/

/*
document.querySelector("#btn_modal").addEventListener("click", () => {
  document.querySelector("#modal").showModal();
});

document.querySelector("#btn_close").addEventListener("click", () => {
  document.querySelector("#modal").close();
});
*/
