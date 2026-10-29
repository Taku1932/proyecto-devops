document.getElementById("formReserva").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;

    document.getElementById("mensaje").textContent =
        `Reserva registrada para ${nombre} el d\u00eda ${fecha}.`;
});