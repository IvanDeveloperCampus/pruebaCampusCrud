import {getRecluta, addRecluta ,getReclutByTeam, eliminarRecluta} from "./ApiRecluta.js" 
import {getTeam} from "../Team/ApiTeam.js"

const rec=document.querySelector("#reclutadores")

document.addEventListener("DOMContentLoaded", () => {
    obtenerReclutas();
  });


async function obtenerReclutas(){
    const result=await getRecluta();
    let html="";
    result.map((item)=>{
        html += `
   <tr>
            
   <td>${item.id}</td>
   <td>${item.nombre}</td>
   <td>${item.identificacion}</td>
   <td>${item.edad}</td>
   <td>${item.telefono}</td>
   <td>${item.fechaIngreso}</td>
   <td>${item.teamId}</td>
   <td ><a href="#" id_reclutador="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
 </tr>
         `;
    })
    rec.innerHTML=html;

    const teams= await getTeam();
  const teamSelect= document.querySelector("#selectTeam");
  let html2 = "";
  teams.forEach((team) => {
    const { id, nombre } = team;
    html2 += `
    <option value=${id}>${nombre}</option>
          `;
  });
  teamSelect.innerHTML = html2;

  const idTeamm=document.querySelector("#idTeamm")
  let html3=""
  teams.forEach((team) => {
    const { id, nombre } = team;
    html3 += `
    <option value=${id}>${nombre}</option>
          `;
  });
  idTeamm.innerHTML = html3;
  
}

const form=document.querySelector("#porTeam")
const input=document.querySelector("#idTeamm")

form.addEventListener("submit", (e)=>{
e.preventDefault();
  const id=input.value
  listar(id);
})

async  function listar(id){
  const result=await getReclutByTeam(id);
  
  let html="";
  result.map((item)=>{
      html += `
 <tr>
          
 <td>${item.id}</td>
 <td>${item.nombre}</td>
 <td>${item.identificacion}</td>
 <td>${item.edad}</td>
 <td>${item.telefono}</td>
 <td>${item.fechaIngreso}</td>
 <td>${item.teamId}</td>
 <td ><a href="#" idReclutador=${item.id} class="btn btn-success editar"data-bs-toggle="modal"
 data-bs-target="#update">Editar</a></td>
 <td ><a href="#" id_reclutador="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
</tr>
       `;
  })
  rec.innerHTML=html; 
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


