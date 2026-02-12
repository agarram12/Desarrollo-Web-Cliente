let btnCrear = document.getElementById("btnCrear");
btnCrear.addEventListener("click", function () {
    let titulo = document.getElementById("titulo");
    let descripcion = document.getElementById("descripcion");
    let prioridad = document.getElementById("prioridad");

    let nuevaIncidencia = {
        titulo: titulo,
        descripcion: descripcion,
        prioridad: prioridad,
        fecha: new Date().toISOString()
    };

    fetch("http://localhost:3000/incidencias", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevaIncidencia)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la petición, " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("La incidencia se ha creado correctamente", data);
        })
        .catch(error => {
            console.error("No se ha podido crear la incidencia", error);
        });
});