import { getModulo, addModulo, eliminarModulo, getModuloBySkill } from "./ApiModulo.js"
import { getSkill } from "../Skill/ApiSkill.js"

addEventListener("DOMContentLoaded", () => {
  obtenerModulo();
})

const tableModulos = document.querySelector("#modulos")

async function obtenerModulo() {
  const ws = new Worker("./worker.js", { type: "module" })
  ws.postMessage({ module: "obtenerRegistrosModulo" })
  ws.postMessage({ module: "obtenerSkills" })
  let cont = 0
  ws.addEventListener("message", (e) => {

    if (cont === 0) {
      tableModulos.insertAdjacentHTML("beforeend", e.data)
      cont++;
    }
    if (cont === 1) {
      document.querySelector("#selectSkill").insertAdjacentHTML("beforeend", e.data)
      document.querySelector("#idSkill").insertAdjacentHTML("beforeend", e.data)
    }

  })





}




const formm = document.querySelector("#porSkill")
console.log(formm);
const input = document.querySelector("#idSkill")

formm.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = input.value
  listar(id);
})

async function listar(id) {
  const modulos = await getModuloBySkill(id);

  let html = "";
  modulos.map((item) => {
    html += `
          <tr>
              <td>${item.id}</td>
              <td>${item.nombre}</td>
              <td>${item.skillId}</td>
              <td ><a href="#" id_team=${item.id} class="btn btn-success editar"data-bs-toggle="modal"
 data-bs-target="#update">Editar</a></td>
 <td ><a href="#" id_modulo="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
</tr>
          </tr>
      `
  })
  tableModulos.innerHTML = html;
}







const form = document.querySelector("#formularioModulo")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target))
  addModulo(data)
})


tableModulos.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const id = e.target.getAttribute("id_modulo")
    eliminarModulo(id)
  }
})