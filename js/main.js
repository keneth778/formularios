let root = document.querySelector("#root");


let div_formulario= document.createElement("div");
div_formulario.className = "div_formularios";
let formularios = [
    {nombre:"login",link:https},
    {nombre:"login",link:https},
    {nombre:"login",link:https},
];

formularios.forEach(Element=>{

    let div_item = document.createElement("a");
    div_item.className= "item";
    div_item.href = item_lista.link;
    div_item.innerText=item_lista.nombre;

    div_formulario.appendChild(div_item);

});

root.appendChild(div_formulario);

