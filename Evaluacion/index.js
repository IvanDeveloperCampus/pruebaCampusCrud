import { getEvaluacion } from "./ApiEvaluacion.js"

addEventListener("DOMContentLoaded", () => {
    obtenerEvaluacion();
})

async function obtenerEvaluacion() {
    const evaluaciones = await getEvaluacion();
    const tableEvaluaciones = document.querySelector("#evaluaciones")
    console.log(evaluaciones);
    let html = "";
    evaluaciones.map((item) => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nota}</td>
                <td>${item.reclutaId}</td>
                <td>${item.moduloId}</td>
                <td ><a href="#" id_team=${item.id} class="btn btn-success editar"data-bs-toggle="modal"
   data-bs-target="#update">Editar</a></td>
   <td ><a href="#" id_team="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
 </tr>
            </tr>
        `
    })
    tableEvaluaciones.innerHTML = html;
}