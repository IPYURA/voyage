import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

//darkMode 값을 자식에게 모두 전달할 수 있다.
export default App;
