function registrarse() {
    var dialogBox = document.createElement("div");
    dialogBox.className = "dialog-box";
    var dialogOverlay = document.getElementById("dialog-overlay");
    dialogOverlay.style.display = "block";

    var content = document.createElement("div");
    content.innerHTML = `
        <h2>Ingresa tus datos de registro</h2>
        <label>Nombre:</label>
        <input type="text" id="nombre">
        <label>Correo:</label>
        <input type="email" id="correo">
        <label>Contraseña:</label>
        <input type="password" id="contrasena">
        <span id="password-strength"></span>
        <label>Ciudad:</label>
        <input type="text" id="ciudad">
        <button type="button" onclick="guardarRegistro()">Registrarse</button>
    `;
    dialogBox.appendChild(content);

    document.body.appendChild(dialogBox);

    document.body.classList.add("blur");

    var passwordInput = document.getElementById("contrasena");
    passwordInput.addEventListener("input", verificarFortalezaContrasena);
}

function verificarFortalezaContrasena() {
    var passwordInput = document.getElementById("contrasena");
    var passwordStrengthText = document.getElementById("password-strength");
    var password = passwordInput.value;
    var passwordLength = password.length;

    if (passwordLength <= 4) {
        passwordStrengthText.textContent = "Muy poco seguro";
    } else if (passwordLength >= 5 && passwordLength <= 9) {
        passwordStrengthText.textContent = "Seguro";
    } else if (passwordLength >= 10 && passwordLength <= Infinity) {
        passwordStrengthText.textContent = "Muy seguro";
    } else {
        passwordStrengthText.textContent = "";
    }
}

function guardarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var ciudad = document.getElementById("ciudad").value;

    var nuevoUsuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        ciudad: ciudad
    };

    // Obtener usuarios registrados del LocalStorage
    var usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Agregar el nuevo usuario al array
    usuariosRegistrados.push(nuevoUsuario);

    // Guardar usuarios registrados en el LocalStorage
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

    var dialogBox = document.querySelector(".dialog-box");
    dialogBox.parentNode.removeChild(dialogBox);

    var dialogOverlay = document.getElementById("dialog-overlay");
    dialogOverlay.style.display = "none";

    document.body.classList.remove("blur");

    mostrarMensajeEmergente("¡Registrado con éxito!");
    isLoggedIn = true;
    hideLoginButtons();
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
