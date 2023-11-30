

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('navbarToggle');
    var navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', function() {
        navbarLinks.classList.toggle('show');
    });
});

function submitForm() {
    // Lógica para enviar el formulario
    alert('Formulario enviado con éxito');
}
