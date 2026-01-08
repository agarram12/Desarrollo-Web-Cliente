function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellidos").value.trim();
    const regex = /^[a-zA-Z\s]*$/;
    // Script
    if (nombre === "") {
        alert("¡El nombre no puede estar vacío!");
        return false;
    }
    if (!regex.test(nombre)) {
        alert("¡El nombre solo puede contener letras y espacios");
    }
    if (apellidos === "") {
        alert("¡El apellido no puede estar vacío!");
    }
    
}