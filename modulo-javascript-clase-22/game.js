let timeRandom = Math.floor(Math.random() * 10 + 5)
let numberRandom = Math.floor(Math.random() * 10 + 1)
let currentTime = timeRandom
let interval;

const time = document.querySelector("#time")
const number = document.querySelector("#number")
const send = document.querySelector("#send")
const message = document.querySelector("#message")
const startBtn = document.querySelector("#start")

const start = () => {
    interval = setInterval(() => {
        currentTime--
        time.innerHTML = `tiempo restante = ${currentTime}s`
        if (currentTime == 0) {
            clearInterval(interval)
            let value = number.value
            if (value != numberRandom) {
                gameover(false)
            }
        }
    }, 1000)
}

const gameover = (win) => {

    if (win) {
        message.innerHTML = "Ganaste"
        setTimeout(() => location.reload(), 1000)
    }

    message.innerHTML = "Perdiste"
    setTimeout(() => location.reload(), 5000)
}

send.addEventListener('click', () => {
    let value = Number(number.value)
    if (value == numberRandom) {
        clearInterval(interval)
        gameover(true)
    }
})

startBtn.addEventListener('click', () => start())