import { getRecluta, getReclutByTeam } from "./ApiRecluta.js";
import { getTeam } from "../Team/ApiTeam.js";


let wsR = {
    async obtenerRegistroReclutas() {
        const result = await getRecluta();
        return this.template(result)
    },
    async obtenerTeams() {
        const teams = await getTeam();

        let html2 = "";
        teams.forEach((team) => {
            const { id, nombre } = team;
            html2 += `
          <option value=${id}>${nombre}</option>
                `;
        });
        return html2;

    },

    async obtenerReclutaById(id) {
        const result = await getReclutByTeam(id);
        return this.template(result)

    },
    template(arr) {
        let html = "";
        arr.map((item) => {
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
        return html;
    }
}

self.addEventListener("message", (e) => {
    Promise.resolve(wsR[`${e.data.module}`]((e.data.data) ? e.data.data : undefined).then(res => postMessage(res)))
})