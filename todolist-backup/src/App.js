import "./App.css";
import { useState, useRef } from "react";
//useRef 로 가상 DOM 내의 요소를 찾아올 수 있다.
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
// import TestComp from "./components/TestComp";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습 하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  //데이터는 부모가 자삭한테만 뿌려줄 수 있으므로 App에서 데이터를 관리하도록
  const [todo, setTodo] = useState(mockTodo); //List가 key값을 가지고 있어야 그 특정한 key를 찾아서 삭제할 수 있기 때문에 배열로 만듦.
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      //current : 현재 값을 찾아와서 반환(객체에서 쓸 수 있는 메서드)
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    //기존에 작성된 todo는 밑으로 내려가게 되고, 새로운 todo는 최상단에 위치하게 된다.
    idRef.current += 1;
  };

  const onUpdate = (targetID) => {
    setTodo(
      //선택이 되었다면
      todo.map((it) =>
        it.id === targetID ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  const onDelete = (targetID) => {
    setTodo(todo.filter((it) => it.id !== targetID));
  };
  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
