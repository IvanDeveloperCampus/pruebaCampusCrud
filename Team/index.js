import { getTeam, addTeam, eliminarTean } from "./ApiTeam.js"

addEventListener("DOMContentLoaded", () => {
    obtenerTeam();
})
const tableTrainer = document.querySelector("#teams")

async function obtenerTeam() {
    const teams = await getTeam();
   
    let html = "";
    teams.map((item) => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.trainer}</td>
               
   <td ><a href="#" id_team="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
 </tr>
            </tr>
        `
    })
    tableTrainer.innerHTML = html;
}

const form=document.querySelector("#formularioTeam")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(e.target))
    addTeam(data);
})

tableTrainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("eliminar")){
        const id=e.target.getAttribute("id_team")
        eliminarTean(id)
    }
  })