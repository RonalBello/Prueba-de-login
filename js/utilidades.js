usuarioValido = "RonalBello";
contrasenaValida = "2529Bello";

function validarCredenciales() {
  usuario = document.getElementById("usuario");
  contrasena = document.getElementById("contrasena");

  if (usuario.value != "") {
    if (contrasena.value != "") {
      if (usuario.value == usuarioValido) {
        if (contrasena.value == contrasenaValida) {
          alert("Sesión iniciada");
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        alert("Usuario Incorrecto");
      }
    } else {
      alert("Debe ingresar una contraseña");
    }
  } else {
    alert("Debe ingresar un nombre de usuario");
  }
}
