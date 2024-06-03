import React from "react";
import styled from "styled-components";
import WindowSize from "./WindowSize";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 20vh;
  background-color: #73698a;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 5vh;
`;

const Links = styled.a`
  font-size: 1rem;
  color: #e1e1e1;
  font-weight: 900;
  font-family: "Inter", sans-serif;
  margin: 1vw;
  text-align: center;
`;

const Text = styled.h1`
  font-size: 1rem;
  color: #e1e1e1;
  font-weight: 900;
  font-family: "Inter", sans-serif;
`;

const Footer = () => {
  return (
    <Container>
      <TextContainer>
        <Links
          target="_blank"
          href="https://leresume.notion.site/Privacy-Policy-62e82065232c45218b696e798869812e"
        >
          privacy policy
        </Links>
        {/* <Links href=""></Links> */}
      </TextContainer>

      <TextContainer>
        <Text>Le Resume is not affiliated with the University of Waterloo</Text>
      </TextContainer>

      <TextContainer>
        <Text>© 2024 Le Resume</Text>
      </TextContainer>
    </Container>
  );
};

export default Footer;
