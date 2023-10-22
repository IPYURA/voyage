function fadeOut() {
  let upperScreen = document.querySelector(".upperScreen");
  const styleSheet = document.styleSheets[0];
  const keyframes = `
    @keyframes fade_out {
        0%{opacity:1;}
        100%{opacity:0}
    }`;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  upperScreen.style.animation = "fade_out 2s both";

  setTimeout(function () {
    upperScreen.style.display = "none";
  }, 2200);
}
