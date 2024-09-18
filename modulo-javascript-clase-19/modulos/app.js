import { read, save } from "./modules/utils.js";

let user = read("usuario", sessionStorage)

if (!user) {
    save("usuario", { nombre: "Eduardo" }, sessionStorage)
    user = read('usuario', sessionStorage)
}

console.log(user)