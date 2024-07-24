//Canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const canvas_width = 1100;
const canvas_height = 450;
canvas.width = canvas_width;
canvas.height = canvas_height;



const animate_enginer = () => {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas_width, canvas_height);

    performance.now();

    handleControls();
    char.update()

    window.requestAnimationFrame(animate_enginer);
};


animate_enginer();