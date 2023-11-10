const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;

let currentIndex = 0;
let topHeight = 0;

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

//개별 슬라이드 컨텐츠 높이값 지정함수
const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      //offsetHeight는 높이값을 찾아오는 속성
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

const color = ["red", "orange", "gold", "greenyellow", "skyblue", "navy"];

//개별 슬라이드 가로 배열
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
  slides[i].style.color = `${color[i]}`;
}

//버튼기능 업데이트함수
const updateNav = () => {
  if (currentIndex == 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }

  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
};

//슬라이드 이동함수
const goToslide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  updateNav();
};

//버튼 클릭 시 이벤트
navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    goToslide(currentIndex - 1);
  } else {
    goToslide(slideCount - 1);
  }
});

navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    //현재 index값이 마지막이 아닌 경우
    goToslide(currentIndex + 1);
  } else {
    goToslide(0);
  }
});

//웹 브라우저 화면이 시작될 떄
goToslide(0);
//처음 로드되었을 떄 왼쪽 슬라이드 버튼 없애기
calculateTallestSlide();
