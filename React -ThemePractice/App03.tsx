import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.bgColor};
`;

interface DummyProps {
  text: string;
  otherThingHere?: boolean;
}

const Dummy = ({ text, otherThingHere }: DummyProps) => {
  return <h1>{text}</h1>;
};

const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  alert("hello");
};

function App() {
  return (
    <Container>
      <Dummy otherThingHere={true} text="Hello" />
      <button onClick={onClick}>Click me!</button>
    </Container>
  );
}

export default App;
