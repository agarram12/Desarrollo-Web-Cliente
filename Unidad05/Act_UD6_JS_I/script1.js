const fetchConRetardo = async (url, opciones = {}) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return fetch(url, opciones);
};

const lista = document.getElementById("listaEmpleados");

fetchConRetardo("http://localhost:3000/empleados")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la petición: " + response.status);
        }
        return response.json();
    })
    .then(empleados => {
        empleados.forEach(empleado => {
            const li = document.createElement("li");
            li.textContent = `
            ${empleado.nombre} - 
            ${empleado.puesto} - 
            ${empleado.departamento} - 
            ${empleado.salario}€
          `;
            lista.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });