import { getSkill } from "./ApiSkill.js";

let wsS={
    async obtenerRegistroSkills(){
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
        return  html;
    }
}

self.addEventListener("message", (e) => {
    Promise.resolve(wsS[`${e.data.module}`]((e.data.data) ? e.data.data : undefined).then(res => postMessage(res)))
})