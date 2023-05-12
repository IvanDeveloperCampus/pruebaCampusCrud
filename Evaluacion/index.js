import { addEvaluacion, eliminarEvaluacion } from "./ApiEvaluacion.js";

addEventListener("DOMContentLoaded", () => {
    obtenerDatos();
})


const obtenerDatos=()=>{
    const ws=new Worker("./worker.js", {type: "module"})
    ws.postMessage({module:"obtenerRegistrosEvaluacion"})
    ws.postMessage({module:"registrosModulos"})
    ws.postMessage({module:"registrosReclutas"})
    const selectores=["#evaluaciones", "#selectModulo", "#selectRecluta"]
    let cont=0;
    ws.addEventListener("message", (e)=>{
        document.querySelector(`${selectores[cont]}`).insertAdjacentHTML("beforeend", e.data)
        
        selectores.length - 1 == cont ? ws.terminate : cont++;
    })


}


const form =document.querySelector("#formularioEvaluacion")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
  const data=Object.fromEntries(new FormData(e.target))
 addEvaluacion(data)
})

const tableEvaluaciones=document.querySelector("#evaluaciones")

tableEvaluaciones.addEventListener("click", (e)=>{
    if(e.target.classList.contains("eliminar")){
        const id=e.target.getAttribute("id_evaluacion")
        eliminarEvaluacion(id)
    }
  })