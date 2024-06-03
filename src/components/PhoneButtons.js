import React from "react";
import styled from "styled-components";
import WindowSize from "./WindowSize";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1vh;
  width: 100vw;
`;

const ChromeButton = styled.button`
  width: 50vw;
  height: 5vh;
  border-radius: 10rem;
  background-color: #73698a;
  border: 0.2rem solid #40394e;
  margin: 3vw;
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

const WwButton = styled.button`
  width: 50vw;
  height: 5vh;
  border-radius: 10rem;
  background-color: #5267b1;
  border: 0.2rem solid #142669;
  margin: 1vw;
  box-shadow: 0px 6px 0px #142669;
  transition: all 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #445591;
  }

  &:active {
    box-shadow: 0px 2px 0px #142669;
    position: relative;
    top: 2px;
  }
`;

const Text = styled.h1`
  color: #f3f3f3;
  font-weight: 900;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
`;

const PhoneButtons = () => {
  return (
    <Container>
      <ChromeButton>
        <Text>download on chrome</Text>
      </ChromeButton>
      <WwButton>
        <Text>browse wloo works</Text>
      </WwButton>
    </Container>
  );
};

export default PhoneButtons;
