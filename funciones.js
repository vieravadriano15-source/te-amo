function crearAmor() {

    for (let i = 0; i < 12; i++) {

        let palabra = document.createElement("div");

        palabra.className = "amor";
        palabra.innerHTML = "Te amo ❤️";

        document.body.appendChild(palabra);

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        let velocidadX = (Math.random() - 0.5) * 14;
        let velocidadY = -Math.random() * 12 - 3;

        let gravedad = 0.25;

        function animar() {

            x += velocidadX;
            y += velocidadY;

            velocidadY += gravedad;

            palabra.style.left = x + "px";
            palabra.style.top = y + "px";

            if (y < window.innerHeight + 50) {
                requestAnimationFrame(animar);
            } else {
                palabra.remove();
            }
        }

        animar();
    }
}