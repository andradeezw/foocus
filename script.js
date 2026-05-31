const timer = document.getElementById("timer");

const botaoIniciar = document.querySelector(".botao-iniciar");
const botaoPausar = document.querySelector(".botao-pausar");
const botaoResetar = document.querySelector(".botao-resetar");

let tempo = 25 * 60;
let intervalo = null;

function atualizarTimer() {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    timer.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

}

function iniciarTimer() {

    timer.classList.remove("timer-pausado");

    if (intervalo !== null) return;

    intervalo = setInterval(() => {

        if (tempo > 0) {

            tempo--;

            atualizarTimer();

        } else {

            clearInterval(intervalo);

            intervalo = null;

            alert("Pomodoro finalizado!");

        }

    }, 1000);

}

function pausarTimer() {

    clearInterval(intervalo);

    intervalo = null;

    timer.classList.add("timer-pausado");

}

function resetarTimer() {

    clearInterval(intervalo);

    intervalo = null;

    tempo = 25 * 60;

    timer.classList.remove("timer-pausado");

    atualizarTimer();

}

botaoIniciar.addEventListener("click", iniciarTimer);

botaoPausar.addEventListener("click", pausarTimer);

botaoResetar.addEventListener("click", resetarTimer);

atualizarTimer();