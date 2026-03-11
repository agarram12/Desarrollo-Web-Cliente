const lista = document.getElementById("listaEmpleados");

fetch("http://localhost:3000/empleados")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la petición, " + response.status);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(empleado => {
            const li = document.createElement("li");
            li.textContent = `
        ID: ${empleado.id} |
        Nombre: ${empleado.nombre} |
        Puesto: ${empleado.puesto} |
        Departamento: ${empleado.departamento} |
        Salario: €${empleado.salario}
      `;
            lista.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Ha ocurrido un problema con la petición:", error);
    });