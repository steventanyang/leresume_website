import React from "react";
import styled from "styled-components";
import WindowSize from "./WindowSize";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  width: 100vw;
  height: 40vh;
  background-color: #E1E1E1;
`;

const TitleText = styled.h1`
  font-size: 2rem;
  color: #73698a;
  font-weight: 900;
  margin-right: 5vw;
  margin-left: 5vw;
  font-family: "Inter", sans-serif;
  text-align: center;
`;

const Button = styled.button`
  width: 30vw;
  height: 7vh;
  border-radius: 1rem;
  background-color: #73698a;
  border: 0.2rem solid #40394e;
  box-shadow: 0px 6px 0px #40394e;
  transition: all 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #615579;
  }

  &:active {
    box-shadow: 0px 2px 0px #40394e;
    position: relative;
    top: 2px;
  }
`;

const Text = styled.h1`
  color: #f3f3f3;
  font-weight: 900;
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  margin: 10vw;
`;

const SubText = styled.h2`
  color: #73698a;
  font-weight: 900;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  text-align: flex-start;
  margin-left: 10vw;
  margin-top: 5vh;
`;

const PhoneHeadDescription = () => {
  const { width, height } = WindowSize();
  return (
    <Container>
      <TitleText>Create resumes and cover letters with one</TitleText>

      <Button>
        <Text>click</Text>
      </Button>

      <SubText>
        Let us handle the tedious so you can focus on what’s important ...
      </SubText>
    </Container>
  );
};

export default PhoneHeadDescription;
