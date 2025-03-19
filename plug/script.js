document.addEventListener("DOMContentLoaded", function () {
    // --- Carrusel ---
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    let index = 0;

    document.getElementById("nextBtn").addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    // --- SweetAlert (Ventana emergente) ---
    document.getElementById("alertBtn").addEventListener("click", function () {
        let nombre = document.getElementById("nombreUsuario").value.trim();
    
        if (nombre) {
            Swal.fire({
                title: `¡Hola, ${nombre}!`,
                text: "Bienvenido a nuestro sitio web. Explora nuestros productos y disfruta de la mejor experiencia.",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "¡Bienvenido!",
                text: "Por favor, ingresa tu nombre para una experiencia más personalizada.",
                icon: "info"
            });
        }
    });

    // --- AOS (Animaciones) ---
    AOS.init();

    // --- Leaflet.js (Mapa Interactivo) ---
    var map = L.map('map', {
        center: [10.98439, -74.78981], // Ubicación exacta del Parque Central en Barranquilla
        zoom: 16,
        scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([10.98439, -74.78981]).addTo(map)
        .bindPopup("<b>Centro Comercial Parque Central</b><br>Ubicado en Barranquilla.")
        .openPopup();

    setTimeout(() => {
        map.invalidateSize();
    }, 500);
});
