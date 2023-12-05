import React, { useReducer } from "react";

function reducer(state, action) {
  //버튼이벤트 -> 함수엔 타입정의됨 -> action객체에 값 담김 -> 타입일 경우에 값을 바꿔줘! -> count에 값 들어감
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "RESET":
        return 0;
    default:
      return state;
  }
}

const TestComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  //count : 상태변화의 값을 담고 있었던 state변수값이 담겨지는 요소
  //dispatch : 상태변화를 일으키고, 구분짓는 함수
  //reducer : 상태 변화에 따라서 실제 실행하게 하는 실행부의 함수
  // 0 : state변수에 담길 초기값

  //data는 optional
  const onIncrease = () => dispatch({ type: "INCREASE", data: 1 });

  const onDecrease = () => dispatch({ type: "DECREASE", data: 1 });

  const onReset = () => dispatch({type: "RESET"});
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onReset}>초기화</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default TestComp;
