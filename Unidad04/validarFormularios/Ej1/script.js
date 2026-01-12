function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let edad = document.getElementById("edad").value.trim();
    const regexTexto = /^[a-zA-Z\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexLetra = /[a-zA-Z]/;
    const regexNumero = /[0-9]/;

    if (nombre === "" || !regexTexto.test(nombre)) {
        alert("Solo letras y espacios. No se acepta valores vacios.");
    }
    if (apellidos === "" || !regexTexto.test(apellidos)) {
        alert("Apellidos inválidos. Solo letras y espacios. No se acepta valores vacios.");
    }
    if (email === "" || !regexEmail.test(email)) {
        alert("Email inválido. Debe tener formato nombre@dominio.extensión.");
    }
    if (password === "" || password.length < 8 || !regexLetra.test(password) || !regexNumero.test(password)) {
        alert("Contraseña inválida. Debe tener mínimo 8 caracteres, al menos una letra y un número.");
    }
    if (edad === "" || isNaN(edad) || edad < 18 || edad > 99) {
        alert("Edad inválida. Debe ser un número entre 18 y 99.");
    }
}
