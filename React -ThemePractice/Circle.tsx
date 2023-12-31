import React, { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 5px solid ${(props) => props.borderColor};
`;

//받아오는 속성 값 조차 타입을 정의해 주어야 한다.
//꼼수 1. any
//2. option추가 "noImplicitAny": false >> 이거 넣으면 받아오는 props 의 타입을 일시적으로 정의해주지 않아도 된다. >> 알아서 any값으로 넣어줘 !! 하는거임

//react에서 props는 객체이다.  >> 타입정의를 객체로 해주어야함 > 객체? type정의 혹은 Interface로 지정 해 줘야 한다.

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  // console.log(bgColor); // object >> 그러므로 props를 받아올때 구조분해 할당을 해서 받아온다. { props } 이렇게
  // console.log(bgColor.bgColor)

  //useState
  // const [counter, setCounter] = useState(1);

  //초기값의 형태가 number이므로 string값을 받을 수 없어서 오류가 발생함
  // setCounter("hello")
  //근데 만약 counter라는 변수에, 숫자와 문자가 동시에 들어가고싶다면 ??
  //제네릭타입으로 ! >> number도 들어 갈 수 있고, string타입도 들어갈 수 있게 했다
  const [counter, setCounter] = useState<number | string>(1);

  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
      // borderColor가 정상적으로 들어온다면?? bgColor로 하겠다/ 쓸수있도록하겠다??
    >
      text를 받아오지 못했을 때에는 default text를 출력시켜라 {text}
    </Container>
  );
};

export default Circle;

//그니까 결론은 받아오는 props의 타입정의필요, props로 주는 값의 타입정의 필요, styled
//react에서 ts사용시 자주나오는 문법
// ??=> 좌항의 값이 null거나 undefine인 경우에만 우항의 값을 반환하고, 그렇지 않은 경우 좌항을 반환해라
