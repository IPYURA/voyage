import React, { useState } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  //mycode - totalScore의 정의 변경
  const [totalScore, setTotalScore] = useState(0);
  const [mbti, setMbti] = useState("");
  console.log("질문 인덱스 : ", questionNo);
  const breakPoint = () => {
    if ((questionNo + 1) % 3 === 0) {
      switch (questionNo) {
        case 2:
          totalScore >= 2 ? setMbti(mbti + "E") : setMbti(mbti + "I");
          setTotalScore(0);
          break;
        case 5:
          totalScore >= 2 ? setMbti(mbti + "S") : setMbti(mbti + "N");
          setTotalScore(0);
          break;
        case 8:
          totalScore >= 2 ? setMbti(mbti + "T") : setMbti(mbti + "F");
          setTotalScore(0);
          break;
        case 11:
          totalScore >= 2 ? setMbti(mbti + "J") : setMbti(mbti + "P");
          setTotalScore(0);
          break;
        default:
          break;
      }
    }
  };

  const handleClickButtonA = (no) => {
    setQuestionNo(questionNo + 1);
    setTotalScore(totalScore + no);
    breakPoint();
  };

  const handleClickButtonB = (no) => {
    setQuestionNo(questionNo + 1);
    setTotalScore(totalScore + no);
    breakPoint();
  };

  //   if (questionNo === 11) {
  //     console.log(mbti);
  //   }
  //인자값을 주기 위해서 onClick 을 콜백으로 함
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / 12) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => handleClickButtonA(1)}
          variant="danger"
          style={{ width: "30%", fontSize: "24px", height: "200px" }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButtonB(0)}
          variant="danger"
          style={{ width: "30%", fontSize: "24px", height: "200px" }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
      {mbti.length === 4 ? (
        <Final>당신은 "{mbti}" 입니다~</Final>
      ) : (
        <Final></Final>
      )}
    </Wrapper>
  );
};

export default Question;

const Final = styled.div`
  margin-top: 30px;
  width: 100%;
  text-align: center;
  font-size: 40px;
`;
