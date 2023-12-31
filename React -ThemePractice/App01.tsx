import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  //이럴땐 event에 타입을 뭐로 정의해야하는가 ?.. >> :React.FormEvent<HTMLInputElement> 머냐 개어렵네 >> 아 HTMLinput 된 요소에 맞춰서 만약 숫자가 늘어오면 number로 인식해라! string이 들어오면 string으로 인식해라 ~ 라고 하는거임
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // setValue(event.target.value) >> target 속성이 없다 뜸 왜 ?근데 currentTarget쓰라면서 그것도 안된다.. 왜? currentTarget에 대한 type정의 필요
    const {
      currentTarget: { value },
    } = event; // value 초기값 문자열추가 >> 만약 문자로 값이 들어온다 ? 먼소리냐
    setValue(event.currentTarget.value);
  };

  return (
    <div>
      <form>
        <input
          value={value}
          type="text"
          placeholder="username"
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default App;
