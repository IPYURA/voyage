import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App01 from "./App01";
import App02 from "./App02-theme";
import App03 from "./App03";
import { darkTheme, lightTheme } from "./theme";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
//themeprovider라는 타입이 없다 나옴 머냐 >> 우리가 만든게 아님 > src폴더에 새 파일 생성 ( styled.d.ts ) >> 외부에서 가져온 머시기 타입정의하는 법임
root.render(
  <ThemeProvider theme={lightTheme}>
    <App03 />
  </ThemeProvider>
);
