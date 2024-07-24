class Sprite_matriz {
    constructor({ position, velocity, dimensions}){

        this.position = position;
        this.velocity = velocity;
        this.width = dimensions?.width;
        this.height = dimensions?.height;
    };

    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        if (this.isAttacking) {
            ctx.fillStyle = "blue";
            ctx.fillRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height);
        };
    };

    update() {
        this.draw();
    };
}; // Fim do Sprite_matriz




// Classe Fighter herda do pai: Sprite_matriz
class Fighter extends Sprite_matriz {
    constructor({ position, velocity, dimensions }) {
        super({ position, velocity, dimensions });

        this.velocity = velocity;
        this.width = dimensions.width;
        this.height = dimensions.height;

        // Hitbox é uma área de colisão para ataques
        this.hitBox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            width: 125,
            height: 50,
        };


        this.isAttacking = false;
        this.attackCooldown = 500; // Tempo de recarga do ataque
        this.onAttackCooldown = false; // Verifica se o personagem está em recarga

        this.onGround = false;
    }

    // atualiza o estado do personagem
    update() {

        // gravidade
        if (this.position.y + this.height > canvas.height) {
            this.position.y = canvas.height - this.height;
            this.velocity.y = 0;
        } 
        else {
            this.velocity.y += gravity;
        };

        if (this.position.y + this.height >= canvas.height) {
            this.onGround = true;
        }
         else {
            this.onGround = false;
        };
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.hitBox.position.x = this.position.x;
        this.hitBox.position.y = this.position.y;

        this.draw();
    };

    // Método para executar um ataque
    attack() {
        if (this.onAttackCooldown) return;

        this.isAttacking = true;
        this.onAttackCooldown = true;

        setTimeout(() => {
            this.isAttacking = false;
        }, 100);

        setTimeout(() => {
            this.onAttackCooldown = false;
        }, this.attackCooldown);

    };

    jump() {
        if (!this.onGround){ 
            return null;
        }
        this.velocity.y -= 8;
    };

};