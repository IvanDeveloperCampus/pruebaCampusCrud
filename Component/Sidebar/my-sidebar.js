let pathName = new URL(import.meta.url).pathname; //direccion y entrar al pathname que es la ubicacion del component
let name = pathName.split("/").pop().replace(".js", ""); //separa la ubicacion y retorna el ultimo elemento y le quita el .js para que quede solo el nombre de la etiqueta

export default class mySidebar extends HTMLElement {
  static async components() {
    return await (await fetch(pathName.replace(".js", ".html"))).text(); //llama al componente y retorna en texto
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" }); //reserva
  }

  handleEvent(e) {
    e.type === "click" ? this.ocultarSidebar(e) : undefined;
  }

  ocultarSidebar(e) {
    this.sidebar.classList.toggle("active");
  }

  connectedCallback() {
    Promise.resolve(mySidebar.components()).then((html) => {
      this.shadowRoot.innerHTML = html;
      this.myToggle = this.shadowRoot.querySelector(".toggle");
      this.sidebar = this.shadowRoot.querySelector(".sidebar");
      this.myToggle.addEventListener("click", this.handleEvent.bind(this));
    });
  }
}

customElements.define(name, mySidebar); //renderiza
