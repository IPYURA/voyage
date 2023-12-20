import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/question" element={<Question />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
}

export default App;
