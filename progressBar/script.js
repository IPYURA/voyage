const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  //scrollHeight : 스크롤이 가능한 영역의 높이만 찾아옴.
  //현재 화면의 높이보다 내려가야 퍼센트가 증가해야하므로 window.innerHeight 빼준다.
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight) + '%';
  h1.innerText = per;
  progressBar.style.width = per;
});
