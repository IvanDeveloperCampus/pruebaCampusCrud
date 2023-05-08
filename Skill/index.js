import { getSkill, addSkill, eliminarSkill } from "./ApiSkill.js"

addEventListener("DOMContentLoaded", () => {
    obtenerSkill();
})

const tableSkill = document.querySelector("#skills")

async function obtenerSkill() {
    const skills = await getSkill();
  
    let html = "";
    skills.map((item) => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
               
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

tableSkill.addEventListener("click", (e)=>{
    if(e.target.classList.contains("eliminar")){
        const id=e.target.getAttribute("id_skill")
        eliminarSkill(id)
    }
  })