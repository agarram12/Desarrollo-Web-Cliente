let listaAvisos = document.getElementById("listaAvisos");
let btnAgregar = document.getElementById("btnAgregar");
let btnEliminar = document.getElementById("btnEliminar");

btnAgregar.addEventListener("click", function() {
    let li = document.createElement("li");
    li.className = "aviso";
    let texto = document.createTextNode("Nuevo aviso importante");
    li.appendChild(texto);
    listaAvisos.appendChild(li);
});

btnEliminar.addEventListener("click", function() {
    if (listaAvisos.lastChild) {
        listaAvisos.removeChild(listaAvisos.lastChild);
    }
});
