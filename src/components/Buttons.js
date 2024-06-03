import React from "react";
import styled from "styled-components";
import WindowSize from "./WindowSize";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 3vh;
  padding-right: 5vw;
  width: 100vw;
`;

const ChromeButton = styled.button`
  width: 15vw;
  height: 5vh;
  border-radius: 10rem;
  background-color: #73698a;
  border: 0.2rem solid #40394e;
  margin: 1vw;
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
  width: 15vw;
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

const Buttons = () => {
  const { width } = WindowSize();

  const handleChromeClick = () => {
    window.open("https://chromewebstore.google.com/?pli=1", "_blank", "noopener,noreferrer");
  };

  const handleWwClick = () => {
    window.open("https://waterlooworks.uwaterloo.ca", "_blank", "noopener,noreferrer");
  };

  return (
    <Container>
      <ChromeButton onClick={handleChromeClick}>
        <Text>{width > 1000 ? "download on chrome" : "download"}</Text>
      </ChromeButton>
      <WwButton onClick={handleWwClick}>
        <Text>{width > 1000 ? "browse wloo works" : "wworks"}</Text>
      </WwButton>
    </Container>
  );
};

export default Buttons;
