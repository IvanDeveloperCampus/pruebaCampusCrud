import { addTeam, eliminarTean } from "./ApiTeam.js"

addEventListener("DOMContentLoaded", () => {
    obtenerTeam();
})
const tableTrainer = document.querySelector("#teams")

function obtenerTeam() {
    const ws = new Worker("./worker.js", { type: "module" })
    ws.postMessage({ module: "obtenerRegistroTeams" })
    ws.addEventListener("message", (e) => {

        tableTrainer.insertAdjacentHTML("beforeend", e.data)
    })

}

const form = document.querySelector("#formularioTeam")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    addTeam(data);
})

tableTrainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
        const id = e.target.getAttribute("id_team")
        eliminarTean(id)
    }
})