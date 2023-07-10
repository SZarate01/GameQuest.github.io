var isLoggedIn = false;

function iniciarSesion() {
    var dialogBox = document.createElement("div");
    dialogBox.className = "dialog-box";
    var dialogOverlay = document.getElementById("dialog-overlay");
    dialogOverlay.style.display = "block";

    var content = document.createElement("div");
    content.innerHTML = `
        <h2>Ingresa tus datos de inicio de sesión</h2>
        <label>Usuario o correo:</label>
        <input type="text" id="usuarioCorreo">
        <label>Contraseña:</label>
        <input type="password" id="contrasena">
        <button type="button" onclick="autenticar()">Iniciar sesión</button>
    `;
    dialogBox.appendChild(content);

    document.body.appendChild(dialogBox);

    document.body.classList.add("blur");
    hideLoginButtons();
}

function autenticar() {
    var usuarioCorreo = document.getElementById("usuarioCorreo").value;
    var contrasena = document.getElementById("contrasena").value;

    var usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    var usuarioEncontrado = usuariosRegistrados.find(function(usuario) {
        return usuario.correo === usuarioCorreo && usuario.contrasena === contrasena;
    });

    var dialogBox = document.querySelector(".dialog-box");
    dialogBox.parentNode.removeChild(dialogBox);

    var dialogOverlay = document.getElementById("dialog-overlay");
    dialogOverlay.style.display = "none";

    document.body.classList.remove("blur");

    if (usuarioEncontrado) {
        mostrarMensajeEmergente("¡Inicio de sesión exitoso!");
        isLoggedIn = true;
        setCookie("isLoggedIn", "true", 7);
        hideLoginButtons();
    } else {
        mostrarMensajeEmergente("Fallo en el inicio de sesión, revisa que el correo o contraseña estén bien escritos e inténtalo nuevamente.");
        showLoginButtons();
    }
}

function mostrarMensajeEmergente(mensaje) {
    var dialogBox = document.createElement("div");
    dialogBox.className = "dialog-box";

    var content = document.createElement("div");
    content.innerHTML = `<h2>${mensaje}</h2>`;
    dialogBox.appendChild(content);

    document.body.appendChild(dialogBox);

    setTimeout(function () {
        dialogBox.parentNode.removeChild(dialogBox);
    }, 3000);
}

function hideLoginButtons() {
    var loginButton = document.querySelector(".menu1 button");
    var registerButton = document.querySelector(".menu2 button");

    loginButton.style.display = "none";
    registerButton.style.display = "none";
}

function showLoginButtons() {
    var loginButton = document.querySelector(".menu1 button");
    var registerButton = document.querySelector(".menu2 button");

    loginButton.style.display = "inline-block";
    registerButton.style.display = "inline-block";
}
