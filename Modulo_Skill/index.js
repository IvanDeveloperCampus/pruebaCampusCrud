import { getModulo } from "./ApiModulo.js"

addEventListener("DOMContentLoaded", () => {
    obtenerModulo();
})

async function obtenerModulo() {
    const modulos = await getModulo();
    const tableModulos = document.querySelector("#modulos")
    console.log(modulos);
    let html = "";
    modulos.map((item) => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.skillId}</td>
                <td ><a href="#" id_team=${item.id} class="btn btn-success editar"data-bs-toggle="modal"
   data-bs-target="#update">Editar</a></td>
   <td ><a href="#" id_team="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
 </tr>
            </tr>
        `
    })
    tableModulos.innerHTML = html;
}