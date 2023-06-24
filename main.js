const botonesBuscar = document.querySelectorAll(".buscar")
const voyATenerSuerte = document.getElementById("voyATenerSuerte")
const inputBusqueda = document.getElementById("busqueda")


botonesBuscar.forEach((boton) => {
    boton.addEventListener("click", realizarBusqueda);
});

inputBusqueda.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        realizarBusqueda();
    }
})

voyATenerSuerte.addEventListener("click", () => {
    window.location.href = "https://www.google.com/doodles"
})


function realizarBusqueda() {
    let url = "https://www.google.com/search?q=" + inputBusqueda.value;
    window.location.href = url
}