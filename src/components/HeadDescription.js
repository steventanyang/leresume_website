import React from "react";
import styled from "styled-components";
import WindowSize from "./WindowSize";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10vw;
  line-height: 1.5;
  width: 50vw;
  height: 40vh;
`;

const TitleText = styled.h1`
  font-size: 3rem;
  color: #73698a;
  font-weight: 900;
  font-family: "Inter", sans-serif;
  display: inline;
`;

const ButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
`;

const Button = styled.button`
  width: 10vw;
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

const TabletButton = styled(Button)`
  width: 15vw;
  height: 5.5vh;
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
  font-size: 1.5rem;
`;

const HeadDescription = () => {
  const { width, height } = WindowSize();
  return (
    <Container>
      <TitleText>
        Create resumes and cover letters with one{" "}
        <ButtonContainer>
          {width > 900 ? (
            <Button>
              <Text>click</Text>
            </Button>
          ) : (
            <TabletButton>
              <Text>click</Text>
            </TabletButton>
          )}
        </ButtonContainer>
      </TitleText>

      <SubText>
        Let us handle the tedious so you can focus on what’s important ...
      </SubText>
    </Container>
  );
};

export default HeadDescription;
