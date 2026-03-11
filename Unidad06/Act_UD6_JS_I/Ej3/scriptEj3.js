let lista = document.getElementById("listaProyectos");
async function obtenerProyectos() {
    try {
        let response = await fetch("http://localhost:3000/proyectos");
        if (!respone.ok) {
            throw new Error("Error con el HTTP, " + response.status);
        }
        let proyectos = await response.json();
        proyectos.forEach(proyecto => {
            let li = document.createElement("li");
            li.textContent = `
                ID: ${proyecto.id} |
                Nombre: ${proyecto.nombre} |
                Cliente: ${proyecto.cliente} |
                Estado: ${proyecto.estado} |
                Inicio: ${proyecto.fechaInicio} |
                Fin: ${proyecto.fechaFin} |
                Responsable: ${proyecto.responsable}
            `;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error("Error al intentar obtener los proyectos: ", error);
    }
}

obtenerProyectos();