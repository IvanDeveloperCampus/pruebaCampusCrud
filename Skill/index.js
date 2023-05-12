import { getSkill, addSkill, eliminarSkill } from "./ApiSkill.js"

addEventListener("DOMContentLoaded", () => {
    obtenerSkill();
})

const tableSkill = document.querySelector("#skills")

function obtenerSkill() {
    const ws = new Worker("./worker.js", { type: "module" })
    ws.postMessage({ module: "obtenerRegistroSkills" })
    ws.addEventListener("message", (e) => {

        tableSkill.insertAdjacentHTML("beforeend", e.data)
    })
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