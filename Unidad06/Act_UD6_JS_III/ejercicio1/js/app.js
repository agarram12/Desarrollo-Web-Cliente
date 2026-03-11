let infoDiv = document.getElementById("info");

async function cargarDatos() {
  try {
    let [usuariosResponse, tareasResponse] = await Promise.all([
      axios.get("http://localhost:3000/usuarios"),
      axios.get("http://localhost:3000/tareas")
    ]);

    let usuarios = usuariosResponse.data;
    let tareas = tareasResponse.data;

    console.log("Usuarios:", usuarios);
    console.log("Número total de tareas:", tareas.length);
    infoDiv.textContent = `Cargados ${usuarios.length} usuarios y ${tareas.length} tareas`;

  } catch (error) {
    console.error("Error al cargar los datos:", error);
    infoDiv.textContent = "Error al cargar la información.";
  }
}

cargarDatos();