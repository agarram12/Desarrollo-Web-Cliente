let btnAlta = document.getElementById("btnAlta");
btnAlta.addEventListener("click", async function() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let empresa = document.getElementById("empresa").value;

    let nuevoCliente = {
        nombre: nombre,
        email: email,
        empresa: empresa
    };

    try {
        let response = await fetch("http://localhost:3000/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoCliente)
        });

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        let data = await response.json();
        console.log("El cliente se ha creado " + data);
    } catch (error) {
        console.error("Error al crear el cliente: " + error);
    }
});