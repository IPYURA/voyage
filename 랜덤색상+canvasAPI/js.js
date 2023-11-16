const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const btn = document.querySelector("button");
const origin = {
    x:200,
    y:200,
}
const alpha = 0.5;
const colorArr = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

const randomRGB = () => {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
}

ctx.fillStyle = "#ccc";
ctx.fillRect(200,200,100,100);

btn.addEventListener("click", () => {
    let color = randomRGB();

    ctx.globalAlpha = alpha;
    ctx.translate(origin.x, origin.y);
    ctx.rotate(30 * (Math.PI / 180));
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 100, 100);
    ctx.translate(-origin.x,-origin.y);
});
