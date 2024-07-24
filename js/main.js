document.addEventListener("DOMContentLoaded", () => {
    let root = document.querySelector("#root");

    let div_formulario = document.createElement("div");
    div_formulario.className = "div_formularios";
    let formularios = [
        {nombre: "login", link: "componentes/login/login.html"},
        {nombre: "login", link: "#"},
        {nombre: "login", link: "#"},
        {nombre: "login", link: "#"},
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
