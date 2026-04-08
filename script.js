AOS.init({
    once: true,
    duration: 800,
    offset: 100,
});

// Inicializaciones
document.addEventListener("DOMContentLoaded", () => {

    // Efecto Typewriter para el Hero
    if (document.getElementById('hero-typed-text')) {
        new Typed('#hero-typed-text', {
            strings: ['🚀 Construye <br /> tu futuro en <span class="text-gradient">tecnología desde cero</span> junto a una comunidad'],
            typeSpeed: 45, // Velocidad de escritura
            startDelay: 300, // Breve pausa antes de escribir
            showCursor: true,
            cursorChar: '|',
            contentType: 'html' // Permite tipear las clases text-gradient sin revelar las etiquetas
        });
    }

    // --- Efecto Fondo de Nodos Conectados (Partículas) ---
    if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#0EDAEA" }, // Cian
                "shape": { "type": "circle" },
                "opacity": { "value": 0.8, "random": false }, // Aumentada opacidad de puntos
                "size": { "value": 3.5, "random": true }, // Puntos sutilmente más grandes
                "line_linked": {
                    "enable": true,
                    "distance": 160,
                    "color": "#ad00ff", // Morado
                    "opacity": 0.85, // Líneas extremadamente visibles
                    "width": 1.5 // Líneas un poco más gruesas
                },
                "move": {
                    "enable": true,
                    "speed": 1.2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" }, /* Conecta al mouse */
                    "onclick": { "enable": false },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 180, "line_linked": { "opacity": 1, "color": "#0EDAEA" } }
                }
            },
            "retina_detect": true
        });
    }

});

// Binary Rain - Efecto Terminal Hacker
(function () {
    const canvas = document.getElementById('binaryRain');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const section = canvas.parentElement;

    function resize() {
        if (!section) return;
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1).map(() => Math.random() * -100);

    function draw() {
        ctx.fillStyle = 'rgba(3, 5, 18, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0EDAEA';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = Math.random() > 0.5 ? '1' : '0';
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += 0.5;
        }
    }

    setInterval(draw, 50);
})();

// Función para copiar número de Yape al portapapeles
function copyYapeNumber() {
    const number = "953508892";
    navigator.clipboard.writeText(number).then(() => {
        const copyIcon = document.getElementById('copyIcon');
        const checkIcon = document.getElementById('checkIcon');

        if (copyIcon && checkIcon) {
            copyIcon.classList.add('hidden');
            checkIcon.classList.remove('hidden');

            setTimeout(() => {
                copyIcon.classList.remove('hidden');
                checkIcon.classList.add('hidden');
            }, 2000);
        }
    });
}

// Interactividad para Bento Grid (Volteo en móviles)
document.addEventListener("DOMContentLoaded", () => {
    const bentoCards = document.querySelectorAll('.bento-card');

    bentoCards.forEach(card => {
        card.addEventListener('click', function () {
            const inner = this.querySelector('.bento-card-inner');
            if (!inner) return;

            // Si la tarjeta ya está volteada, la cerramos
            if (inner.classList.contains('is-flipped')) {
                inner.classList.remove('is-flipped');
            } else {
                // Cerramos cualquier otra tarjeta abierta para una mejor UX
                bentoCards.forEach(c => {
                    const otherInner = c.querySelector('.bento-card-inner');
                    if (otherInner) otherInner.classList.remove('is-flipped');
                });
                // Abrimos la tarjeta actual
                inner.classList.add('is-flipped');
            }
        });
    });
});