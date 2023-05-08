import { getTeam } from "./ApiTeam.js"

addEventListener("DOMContentLoaded", () => {
    obtenerTeam();
})

async function obtenerTeam() {
    const teams = await getTeam();
    const tableTrainer = document.querySelector("#teams")
    console.log(teams);
    let html = "";
    teams.map((item) => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.trainer}</td>
                <td ><a href="#" id_team=${item.id} class="btn btn-success editar"data-bs-toggle="modal"
   data-bs-target="#update">Editar</a></td>
   <td ><a href="#" id_team="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
 </tr>
            </tr>
        `
    })
    tableTrainer.innerHTML = html;
}