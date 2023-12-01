//clientX, clientY = 현재 내가 보고 있는 웹 브라우저 화면 안에서의 좌표값
//pageX, pageY = 만약 내가 현재 작업 중인 문서의 height값이 5000px이었다고하면, 현재 내 눈에 보여지지 않는 영역까지도 좌표값을 찾아와주는 값! (가장 많이 쓴다.)
//screenX, screenY = 만약 내가 듀얼모니터를 사용중이라면, 한 모니터의 왼쪽 위 좌표는 0,0이 아니게 될 수 있다. (거의 안씀)

const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

//마우스를 이동했을 떄의 지점
let x = 0;
let y = 0;
//목표를 지정했을 때
let targetx = 0;
let targety = 0;
let speed = 0.5;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  h1.innerHTML = `x : ${x}, y : ${y}`;
//   box.style.top = e.pageY - 30 + "px";
//   box.style.left = e.pageX - 30 + "px";

//   const loop = () => {
//     targetx += (x - targetx) * speed;
//     targety += (y - targety) * speed;
//     box.style.top = targety - 30 + "px";
//     box.style.left = targetx - 30 + "px";
//     window.requestAnimationFrame(loop);
//   };
//   loop();

    setTimeout(() => {
      box.style.top = e.pageY + 50 + "px";
      box.style.left = e.pageX - 50 + "px";
    }, 100);

  if (x % 100 == 0 || y % 100 == 0) {
    ranBG();
  }
});

const ranBG = () => {
  let part1 = Math.floor(Math.random() * 16 + 1);
  let part2 = Math.floor(Math.random() * 16 + 1);
  let part3 = Math.floor(Math.random() * 16 + 1);
  document.querySelector("body").style.background = `#${part1}${part2}${part3}`;
};
