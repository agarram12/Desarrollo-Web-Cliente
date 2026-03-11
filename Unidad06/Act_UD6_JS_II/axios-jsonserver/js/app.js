const URL = "http://localhost:3000/alumnos";

const listaAlumnos = document.getElementById("lista-alumnos");
const mensaje = document.getElementById("mensaje");
const formulario = document.getElementById("form-alumno");

let alumnoEditandoId = null;

function mostrarAlumnos(alumnos) {
  listaAlumnos.innerHTML = "";
  alumnos.forEach(alumno => agregarAlumnoAlDOM(alumno));
}

function agregarAlumnoAlDOM(alumno) {
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>Nombre:</strong> ${alumno.nombre} <br>
    <strong>Email:</strong> ${alumno.email} <br>
    <strong>Curso:</strong> ${alumno.curso} <br>
    <button onclick="cargarAlumnoParaEditar(${alumno.id}, '${alumno.nombre}', '${alumno.email}', '${alumno.curso}')">
      Editar
    </button>
    <hr>
  `;

  listaAlumnos.appendChild(li);
}

async function obtenerAlumnos() {
  try {
    mensaje.textContent = "Cargando alumnos...";
    const response = await axios.get(URL);
    mensaje.textContent = "";
    mostrarAlumnos(response.data);
  } catch (error) {
    mensaje.textContent = "Error al cargar los alumnos.";
    mensaje.style.color = "red";
    console.error(error);
  }
}

window.cargarAlumnoParaEditar = function(id, nombre, email, curso) {
  document.getElementById("nombre").value = nombre;
  document.getElementById("email").value = email;
  document.getElementById("curso").value = curso;

  alumnoEditandoId = id;

  mensaje.textContent = "Editando alumno...";
  mensaje.style.color = "blue";
};

async function guardarAlumno(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const curso = document.getElementById("curso").value;

  const datosAlumno = { nombre, email, curso };

  try {

    if (alumnoEditandoId !== null) {

      await axios.put(`${URL}/${alumnoEditandoId}`, datosAlumno);

      mensaje.textContent = "Alumno actualizado correctamente.";
      mensaje.style.color = "green";

      alumnoEditandoId = null;

    } 

    else {

      await axios.post(URL, datosAlumno);

      mensaje.textContent = "Alumno creado correctamente.";
      mensaje.style.color = "green";
    }

    formulario.reset();
    obtenerAlumnos();

  } catch (error) {

    mensaje.textContent = "Error al guardar el alumno.";
    mensaje.style.color = "red";

    if (error.response) {
      console.error("Código HTTP:", error.response.status);
    }

    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", obtenerAlumnos);
formulario.addEventListener("submit", guardarAlumno);
