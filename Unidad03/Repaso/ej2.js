function establecerCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    let caduca = "expires=" + fecha.toUTCString;
    document.cookie = `${nombre}=${valor}; ${caduca}; path=/`;
}

establecerCookie("nombre", "alvaro", 365);
console.log(document.cookie);

function eliminarCookie(nombre) {
    establecerCookie(nombre, null, null);
}

eliminarCookie("email");
eliminarCookie("email");
eliminarCookie("email");
eliminarCookie("email");
console.log(document.cookie);

function obtenerCokie(nombre) {
    let cDecodificada = decodeURIComponent(document.cookie);
    let cArray = cDecodificada.split("; ");
    let resultado = null;
    cArray.forEach(c => {
        if (c.lastIndexOf(nombre) == 0) {
            resultado = c.substring(name.length);
        }
    })
    return resultado;
}
console.log(obtenerCokie("nombre"))

function comprobarCoookie(nombre) {
    let usuario = obtenerCokie(nombre);
    if (usuario) {
        alert("Bienvenido, " + usuario);
    } else {
        let nuevoUsuario = prompt("Introduce tu nombre: ");
        if (nuevoUsuario != "" && nuevoUsuario != null) {
            nuevoUsuario = nuevoUsuario.toUpperCase();
            establecerCookie(nombreCookie, nuevoUsuario, 30);
            alert ("Hola " + nuevoUsuario + ", tu nombre ha sido guardado");
        }
    }
}

