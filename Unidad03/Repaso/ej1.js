let segundos = 0;
setInterval(() => {
    segundos++;
    document.getElementById("tiempo").textContent = segundos;
}, 1000);

let timeOut = null;
function alerta3s() {
    timeOut = setTimeout(() => {
        alert("¡3 segundos!");
    }, 3000);
}

function cancelarAlerta() {
    clearTimeout(timeOut);
}

let rojo = true
setInterval(() => {
    if (rojo) {
        document.getElementById("parpadeo").style.color = "red";
        rojo = false;
    } else {
        document.getElementById("parpadeo").style.color = "green";
        rojo = true;
    }
}, 500);