import {getRecluta} from "./ApiRecluta.js" 



document.addEventListener("DOMContentLoaded", () => {
    obtenerReclutas();
  });


async function obtenerReclutas(){
    const result=await getRecluta();
    console.log(result);
    const rec=document.querySelector("#reclutadores")
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