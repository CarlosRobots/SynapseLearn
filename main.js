// Selección de elementos del DOM
const toggle = document.querySelector("navbar-toggler");
const menu = document.querySelector("navbar-Nav");

// Función para alternar clases activas en el botón y el menú
toggle.addEventListener("click", () => {
    // Cambia el estado del botón de hamburguesa
    toggle.classList.toggle("active");
    
    // Muestra u oculta el menú con una transición
    menu.classList.toggle("show");

    // Opcional: Añade un pequeño retraso para la animación
    if (menu.classList.contains("show")) {
        menu.style.transition = "transform 0.3s ease-in-out";
    } else {
        menu.style.transition = "transform 0.3s ease-in-out";
    }
});

// Opcional: Cierra el menú al hacer clic fuera de él
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("show");
        toggle.classList.remove("active");
    }
});
