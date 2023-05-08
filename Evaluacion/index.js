import { getEvaluacion, addEvaluacion, eliminarEvaluacion } from "./ApiEvaluacion.js"
import { getModulo } from "../Modulo_Skill/ApiModulo.js"
import { getRecluta } from "../Recluta/ApiRecluta.js"

addEventListener("DOMContentLoaded", () => {
    obtenerEvaluacion();
})

const tableEvaluaciones = document.querySelector("#evaluaciones")

async function obtenerEvaluacion() {
    const evaluaciones = await getEvaluacion();
  
    console.log(evaluaciones);
    let html = "";
    evaluaciones.map((item) => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nota}</td>
                <td>${item.reclutaId}</td>
                <td>${item.moduloId}</td>
                
   <td ><a href="#" id_evaluacion="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
 </tr>
            </tr>
        `
    })
    tableEvaluaciones.innerHTML = html;


    const modulos=await getModulo();
    const moduloSelect=document.querySelector("#selectModulo")
    let html2 = "";
    modulos.map((modulo)=>{
        const { id, nombre } = modulo;
    html2 += `
    <option value=${id}>${nombre}</option>
          `;
  });
  moduloSelect.innerHTML=html2

  const reclutas=await getRecluta();
    const reclutaSelect=document.querySelector("#selectRecluta")
    let html3= "";
    reclutas.map((recluta)=>{
        const { id, nombre } = recluta;
    html3 += `
    <option value=${id}>${nombre}</option>
          `;
  });
  reclutaSelect.innerHTML=html3
   

}


const form =document.querySelector("#formularioEvaluacion")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
  const data=Object.fromEntries(new FormData(e.target))
 addEvaluacion(data)
})

tableEvaluaciones.addEventListener("click", (e)=>{
    if(e.target.classList.contains("eliminar")){
        const id=e.target.getAttribute("id_evaluacion")
        eliminarEvaluacion(id)
    }
  })