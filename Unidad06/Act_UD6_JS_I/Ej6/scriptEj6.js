const btnCrear = document.getElementById("btnCrear");
const resultado = document.getElementById("resultado");

btnCrear.addEventListener("click", async () => {

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    try {

        // 1️⃣ Crear cliente
        const responseCliente = await fetch("http://localhost:3000/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, email })
        });

        if (!responseCliente.ok) {
            throw new Error("Error al crear el cliente: " + responseCliente.status);
        }

        const clienteCreado = await responseCliente.json();
        const clienteId = clienteCreado.id;

        console.log("Cliente creado:", clienteCreado);

        // 2️⃣ Crear proyecto asociado usando el id del cliente
        const nuevoProyecto = {
            nombre: "Proyecto inicial",
            fechaInicio: new Date().toISOString(),
            clienteId: clienteId
        };

        const responseProyecto = await fetch("http://localhost:3000/proyectos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoProyecto)
        });

        if (!responseProyecto.ok) {
            throw new Error("Error al crear el proyecto: " + responseProyecto.status);
        }

        const proyectoCreado = await responseProyecto.json();

        console.log("Proyecto creado:", proyectoCreado);

        resultado.textContent = "Cliente y proyecto creados correctamente ✅";

    } catch (error) {
        console.error("Error en el proceso:", error);
        resultado.textContent = "Hubo un error al crear los datos ❌";
    }

});
