const fullScreenBtn = document.querySelector("#btn");
const bodyContent = document.querySelector("body");
const exitBtn = document.querySelector("#btnExit");

const myRequestFullScreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
};

fullScreenBtn.addEventListener("click", () => {
  myRequestFullScreen(bodyContent);
});

const myCancelFullScreen = (element) => {
  if (element.exitFullScreen) {
    document.exitFullscreen();
  }
};

exitBtn.addEventListener("click", () => {
  myCancelFullScreen();
});
