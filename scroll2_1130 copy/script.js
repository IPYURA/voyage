const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");

let scrollNum = 0;
let x = 0;
let targetX = 0;
let speed = 0.1;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imageAll.forEach((item, index) => {
    if (index < 4) {
      //입체감 구현
      item.style.transform = `translateY(${
        -scrollNum / (2 * (totalNum - index))
      }px)`;
    }
    // if(index === 4){
    //   item.style.transform = `translateY`
    // }
  });
});

//이벤트 포인트가 필요하므로 이벤트 변수 넣어준다!
window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.05) translate(${-targetX / 200}px, ${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;
  imageAll[5].style.transform = `scale(1.05) translate(${-targetX / 100}px, ${
    -scrollNum / (2 * (totalNum - 5))
  }px)`;
  subPageImage.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;
  window.requestAnimationFrame(loop);
  //이동할 때마다 프레임단위로 끊어서 이동하게끔
};
loop();
