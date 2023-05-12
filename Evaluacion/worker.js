import { getEvaluacion } from "./ApiEvaluacion.js"
import { getModulo } from "../Modulo_Skill/ApiModulo.js"
import { getRecluta } from "../Recluta/ApiRecluta.js"

let wsE={
    async obtenerRegistrosEvaluacion() {
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
        return html;
    },
    async registrosModulos(){
        const modulos=await getModulo();
        let html2 = "";
        modulos.map((modulo)=>{
            const { id, nombre } = modulo;
        html2 += `
        <option value=${id}>${nombre}</option>
              `;
      });
     return html2
    
     
    },
    async registrosReclutas(){
        const reclutas=await getRecluta();
     
        let html3= "";
        reclutas.map((recluta)=>{
            const { id, nombre } = recluta;
        html3 += `
        <option value=${id}>${nombre}</option>
              `;
      });
        return html3
    }
    
}

self.addEventListener("message", (e)=>{
    Promise.resolve(wsE[`${e.data.module}`]((e.data.data)? e.data.data : undefined).then(res=> postMessage(res)))
})