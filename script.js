let titulo = document.querySelector("h1");

titulo.className = "animacion-titulo"
console.log("titulo", titulo)
setTimeout(() => {
    titulo.className = "";
}, 1000000);

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    document.addEventListener('mousemove', (event) => {
        const { clientX: mouseX, clientY: mouseY } = event;
        const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
        const centerX = windowWidth / 2;
        const centerY = windowHeight / 2;
        const offsetX = (mouseX - centerX) / centerX;
        const offsetY = (mouseY - centerY) / centerY;
        const shadowX = offsetX * 20;
        const shadowY = offsetY * 20;
        header.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.8)`;
    });
});

const habilidades = document.querySelectorAll("#habilidades ul li");
console.log("habilidades",habilidades);

habilidades.forEach((habilidad) => {
    console.log("habilidad",habilidad);

    const porcentajeInicio = habilidad.getAttribute("data-porcentaje");
    const porcentajeFinal = 100 - parseInt(porcentajeInicio);
    const colorInicio = " rgba(240, 248, 255, 0.171)";
    const colorFinal = "rgba(13, 19, 28, 0.945)";
    habilidad.style.background = `linear-gradient(to right, ${colorInicio} ${porcentajeInicio}%, ${colorFinal} ${porcentajeFinal}%`;
    console.log(habilidad.style.background);
});