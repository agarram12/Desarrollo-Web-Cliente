window.onload = function() {
    let segundos = 0;
    let tiempo = document.getElementById("tiempo");
    setInterval(() => {
        segundos++;
        tiempo.innerText = segundos
    }, 1000);

}

let timeout = null;
function alerta3s() {
    timeout = setTimeout(() => {
        alert("¡3 segundos!")
    }, 3000);
}


function cancelarAlerta() {
    clearTimeout(timeout);
}

// texto parpadeante
let rojo = true;
setInterval(() => {
    let parrafo = document.getElementById("parpadeo");
    if (rojo) {
        parrafo.style.color = "red";
        rojo = false;
    } else {
        parrafo.style.color = "green";
        rojo = true;
    }
}, 500);