const deepNum = document.querySelector(".depthWrap span");
const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const octo = document.querySelector(".octopus");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight);
  deepNum.innerText = (per / 2) * 100;
  progressBar.style.width = `${per}%`;
  octo.style.bottom = `${per * 0.5}%`;
  submarine.style.left = `${per * 0.8}%`;
  submarine.style.top = `${per * 0.7}%`;

  //   submarine.style.transform = `rotate(${per * 100}deg)`
});
