// Objeto que armazena o estado das teclas
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    space: {
        pressed: false,
        hold: false 
    }
};

// Evento
window.addEventListener("keydown", e => {
    let key = e.key;
    switch (key) {
        case "ArrowLeft":
        case "a":
            keys.a.pressed = true;
            char.ulTecla = key; // Armazena a última tecla pressionada para determinar a direção
            break;

        case "ArrowRight":
        case "d":
            keys.d.pressed = true;
            char.ulTecla = key;
            break;

        case "ArrowUp":
        case "w":
            keys.w.pressed = true;
            break;

        case "z":
        case " ":
            keys.space.pressed = true;
            break;
    }
});

// Evento que solta a tecla
window.addEventListener("keyup", e => {
    let key = e.key;

    switch (key) {
        case "ArrowLeft":
        case "a":
            keys.a.pressed = false;
            break;

        case "ArrowRight":
        case "d":
            keys.d.pressed = false;
            break;

        case "ArrowUp":
        case "w":
            keys.w.pressed = false;
            break;

        case "z":
        case " ":
            keys.space.pressed = false;
            keys.space.hold = false; // Define a flag de pressionamento para falso ao soltar a tecla
            break;
    }
});

// controles e movimentos
function handleControls() {
    movement();
    attack();

    function movement() {
        char.velocity.x = 0;

        // Verifica se as teclas de movimento estão pressionadas
        if (keys.a.pressed && ["a", "ArrowLeft"].includes(char.ulTecla)) {
            char.velocity.x = -1.5 * 3.4; 
        }

        if (keys.d.pressed && ["d", "ArrowRight"].includes(char.ulTecla)) {
            char.velocity.x = 1.5 * 3.4; 
        }

        if (keys.w.pressed) {
            char.jump();
        }
    }

    // função de ataques
    function attack() {
        if (keys.space.pressed && !keys.space.hold) {
            char.attack(); 
            keys.space.hold = true; 
        }
    }
}