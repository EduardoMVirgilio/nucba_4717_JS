// Metodos y Propiedades de los Datos de tipo String

let palabra = "JavaScript"
let frase = "A caballero regalado, no se le miran los dientes"
console.log(palabra.length) // 10
console.log(palabra.toLowerCase()) // "javascript"
console.log(palabra.toUpperCase()) // "JAVASCRIPT"
console.log(palabra.indexOf("s")) // 4 encontro la letra en el caracter 4
console.log(frase.replace("caballero","caballo")) // "A caballo regalado, no se le miran los dientes"
console.log(palabra.replaceAll("a"," ")) // j v script


/* Practica de Validación */

function validar (){
    
    let usuario = prompt("Escriba su correo").toLowerCase().trim()
    let clave = prompt("Escriba su clave de acceso").trim()
    const usuarios = [["eduardo@gmail.com","test"],["luis@nucba.io","1234"],["braulio@gmail.com","aguanteElQA2024!"]]
    if(usuario.length == 0){
        return  alert("Debe completar los datos del usuario")
    }

    if(clave.length == 0){
        return alert("Debe completar la clave de acceso")
    }

    if(usuario.length < 6){
        return alert("Su correo debe contener minimo 6 caracteres")
    }

    if(!usuario.includes("@")){
        return alert("Su correo no es valido")
    }

    let estaValidado = false 
    
    for (const [nick,pass] of usuarios) {
        if(nick == usuario && pass == clave){
            estaValidado = true
        }
    }

    if(estaValidado){
        return alert("Puedes ingresar")
    }else{
        return alert("Verifica tus datos")
    }

}