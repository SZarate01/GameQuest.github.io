function setCookie(nombre, valor, expiracion) {
    var fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + expiracion * 24 * 60 * 60 * 1000);
    var expires = "expires=" + fechaExpiracion.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
}

setCookie("miCookie", "valorDeEjemplo", 7);