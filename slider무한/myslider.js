const slides = document.querySelector(".slides");
const slide = document.querySelectorAll("li");
let currentIndex = 0;
const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//li 너비값 정의
const updateWidth = () => {
  let currentSlides = document.querySelectorAll(".slides li");
  let newSlideCount = currentSlides.length;
  let newWidth = `
    ${(slideWidth + slideMargin) * newSlideCount - slideMargin}px
    `;
  slides.style.width = newWidth;
  console.log(newWidth);
};
updateWidth();

//ul & li 위치값 세팅
const setInitialPos = () => {
  let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue})`;
};
setInitialPos();

//li 복제
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    //cloneNode : 그대로 복제시킴
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    //cloneNode : 그대로 복제시킴
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};
makeClone();

//슬라이드 이동 함수
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIndex = num;
  console.log(currentIndex, slideCount);

  if (currentIndex === slideCount || currentIndex === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIndex = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

//자동 슬라이드
let timer = undefined;
const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIndex + 1);
    }, 3000);
  }
};
autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});
slides.addEventListener("mouseleave", () => {
  autoSlide();
});

//버튼 클릭 이벤트
prevBtn.addEventListener("click", () => {
  moveSlide(currentIndex - 1);
});
nextBtn.addEventListener("click", () => {
  moveSlide(currentIndex + 1);
});
