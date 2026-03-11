const lista = document.getElementById("listaEmpleados");
const filtroInput = document.getElementById("filtro");

let empleados = [];

// Función para mostrar empleados en el DOM
function mostrarEmpleados(listaEmpleados) {
    lista.innerHTML = "";

    listaEmpleados.forEach(emp => {
        const li = document.createElement("li");
        li.textContent = `
      ${emp.nombre} | 
      ${emp.puesto} | 
      ${emp.departamento} | 
      €${emp.salario}
    `;
        lista.appendChild(li);
    });
}

async function obtenerEmpleados() {
    try {
        const response = await fetch("http://localhost:3000/empleados");

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        empleados = await response.json();

        mostrarEmpleados(empleados);

    } catch (error) {
        console.error("Error al obtener empleados:", error);
    }
}

filtroInput.addEventListener("input", function () {
    const texto = filtroInput.value.toLowerCase();

    const filtrados = empleados.filter(emp =>
        emp.departamento.toLowerCase().includes(texto)
    );

    mostrarEmpleados(filtrados);
});

obtenerEmpleados();
