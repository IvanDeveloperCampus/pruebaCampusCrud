import { getModulo } from "./ApiModulo.js";
import { getSkill } from "../Skill/ApiSkill.js";

let wsM = {
    async obtenerRegistrosModulo() {
        const modulos = await getModulo();

        let html = "";
        modulos.map((item) => {
            html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.skillId}</td>
                
   <td ><a href="#" id_modulo="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
 </tr>
            </tr>
        `
        })
        return html;

    },
    async obtenerSkills() {
        const skills = await getSkill();
        let html2 = "";
        skills.forEach((skill) => {
            const { id, nombre } = skill;
            html2 += `
    <option value=${id}>${nombre}</option>
          `;
        });
        return html2;
    }
}

self.addEventListener("message", (e)=>{
    Promise.resolve(wsM[`${e.data.module}`]((e.data.data) ? e.data.data : undefined).then(res=>postMessage(res)))
})