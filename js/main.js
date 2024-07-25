document.addEventListener("DOMContentLoaded", () => {
    let root = document.querySelector("#root");

    let div_formulario = document.createElement("div");
    div_formulario.className = "div_formularios";
    let formularios = [
        {nombre: "login", link: "componentes/login/login.html"},
        {nombre: "formulario2", link: "#"},
        {nombre: "formulario3", link: "#"},
        {nombre: "formulario4", link: "#"},
    ];

    formularios.forEach(element => {
        let div_item = document.createElement("a");
        div_item.className = "item";
        div_item.href = element.link;
        div_item.innerText = element.nombre;

        div_formulario.appendChild(div_item);
    });

    root.appendChild(div_formulario);
});
