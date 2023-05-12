import { getTeam } from "./ApiTeam.js";

let wsT = {
    async obtenerRegistroTeams() {
        const teams = await getTeam();

        let html = "";
        teams.map((item) => {
            html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.trainer}</td>
               
   <td ><a href="#" id_team="${item.id}" class="btn btn-danger eliminar">Eliminar</a></td>
 </tr>
            </tr>
        `
        })
        return html;
    }
}

self.addEventListener("message", (e) => {
    Promise.resolve(wsT[`${e.data.module}`]((e.data.data) ? e.data.data : undefined).then(res => postMessage(res)))
})