import {addRecluta ,eliminarRecluta} from "./ApiRecluta.js" 


const rec=document.querySelector("#reclutadores")

document.addEventListener("DOMContentLoaded", () => {
    obtenerReclutas();
  });
  const ws=new Worker("./worker.js", {type:"module"})

function obtenerReclutas(){
   
    ws.postMessage({module:"obtenerRegistroReclutas"})
    ws.postMessage({module:"obtenerTeams"})
    let cont=0
    ws.addEventListener("message", (e)=>{
      if (cont === 0) {
        rec.insertAdjacentHTML("beforeend", e.data)
        cont++;
      }
      if (cont === 1) {
        document.querySelector("#selectTeam").insertAdjacentHTML("beforeend", e.data)
        document.querySelector("#idTeamm").insertAdjacentHTML("beforeend", e.data)
      }
    })
   
}

const form=document.querySelector("#porTeam")
const input=document.querySelector("#idTeamm")

form.addEventListener("submit", (e)=>{
e.preventDefault();
  const id=input.value
  listar(id);
})

function listar(id){
  ws.postMessage({module:"obtenerReclutaById", data:id})
  ws.addEventListener("message", (e)=>{
    rec.innerHTML="";
    rec.insertAdjacentHTML("beforeend", e.data)
  })
}



const formularioAgregar=document.querySelector("#formularioRecluta")
formularioAgregar.addEventListener("submit", (e)=>{
  e.preventDefault()
  const data=Object.fromEntries(new FormData(e.target))
  addRecluta(data)

})

rec.addEventListener("click", (e)=>{
  if(e.target.classList.contains("eliminar")){
      const id=e.target.getAttribute("id_reclutador")
      eliminarRecluta(id)
  }
})


