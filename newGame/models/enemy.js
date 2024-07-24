// Classe Enemy herda de Fighter
class Enemy extends Fighter {
    constructor({ position, velocity, dimensions, source }) {
        super({
            position,
            velocity,
            dimensions,
            source,
        });

        this.originalPosition = position; // Armazena a posição original do inimigo
        this.forwardMovement = true; // Indica se o inimigo está se movendo para a frente
        this.maxLeft = position.x - 100; // Limite esquerdo
        this.maxRight = position.x + 100; // Limite direito
    }

    // atualiza o estado do inimigo
    update() {
        if (this.forwardMovement) {
            this.velocity.x = 2; // Velocidade para a frente
        } else {
            this.velocity.x = -2; // Velocidade para trás
        }

        // Verifica os limites do movimento
        if (this.position.x >= this.maxRight) {
            this.forwardMovement = false; 
        } else if (this.position.x <= this.maxLeft) {
            this.forwardMovement = true; 
        }

        //lógica de ataque
        const randomAttack = Math.random() < 0.05; 
        if (randomAttack) {
            this.attack();
        }

        super.update(); 
    }
}

const enemy = new Enemy({
    position: {
        x: 300,
        y: 0,
    },
    dimensions: {
        width: 50,
        height: 150,
    },
    velocity: {
        x: 2,
        y: 10,
    },
    source: '' // Caminho para a imagem do inimigo
});