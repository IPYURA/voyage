//마우스를 이동했을 떄의 지점
let x = 0;
let y = 0;
//circle 좌표
let targetX = 0;
let targetY = 0;
//속도 정의
const speed = 0.09;

const cursorItem = document.querySelector(".cursorItem");
const circle = document.querySelector(".circle");
const btnAll = document.querySelectorAll("a");

btnAll.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  el.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px,${targetY}px)`;
  window.requestAnimationFrame(loop);
};
loop();



// // 목표지점
// let x = 0;
// let y = 0;
// // 타겟지점
// let targetX = 0;
// let targetY = 0;
// // 속도
// const speed = 0.09;
// // DOM에서 찾아와야 하는 값들에 대한 정의
// const cursorItem = document.querySelector(".cursorItem")
// const circle = cursorItem.querySelector(".circle");
// const buttonAll = document.querySelectorAll("a");

// buttonAll.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     circle.style.transform = "scale(0.3)";
//   });
//   item.addEventListener("mouseleave", () => {
//     circle.style.transform = "scale(1)";
//   });
// });

// window.addEventListener("mousemove", (e) => {
//   x = e.pageX;
//   y = e.pageY;
// });

// const loop = () => {
//   targetX += (x - targetX) * speed;
//   targetY += (y - targetY) * speed;
//   cursorItem.style.transform = `translate(${targetX}px,${targetY}px)`;
//   window.requestAnimationFrame(loop);
// };
// loop();