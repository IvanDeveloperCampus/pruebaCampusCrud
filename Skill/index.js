import { getSkill, addSkill } from "./ApiSkill.js"

addEventListener("DOMContentLoaded", () => {
    obtenerSkill();
})

async function obtenerSkill() {
    const skills = await getSkill();
    const tableSkill = document.querySelector("#skills")
    let html = "";
    skills.map((item) => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td ><a href="#" id_skill=${item.id} class="btn btn-success editar"data-bs-toggle="modal"
   data-bs-target="#update">Editar</a></td>
   <td ><a href="#" id_skill="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
 </tr>
            </tr>
        `
    })
    tableSkill.innerHTML = html;
}

const form =document.querySelector("#formularioSkill")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
  const data=Object.fromEntries(new FormData(e.target))
  addSkill(data)
})