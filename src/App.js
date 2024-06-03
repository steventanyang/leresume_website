import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import WindowSize from "./components/WindowSize";

import LeResume from "./components/LeResume";
import Buttons from "./components/Buttons";
import PhoneButtons from "./components/PhoneButtons";
import HeadDescription from "./components/HeadDescription";
import PhoneHeadDescription from "./components/PhoneHeadDescription";
import Video from "./components/Video";
import Footer from "./components/Footer";

import Carousel from "./components/Carousel";

import bruh from "./assets/bruh_holo.png";
import erm from "./assets/erm_holo.png";
import hehe from "./assets/hehe_holo.png";
import man from "./assets/man_holo.png";
import sad from "./assets/sad_holo.png";
import smile from "./assets/smile_holo.png";
import uh from "./assets/uh_holo.png";
import what from "./assets/what_holo.png";

const images = [
  bruh,
  erm,
  hehe,
  man,
  sad,
  smile,
  uh,
  what,
  bruh,
  erm,
  hehe,
  man,
  sad,
  smile,
  uh,
  what,
];

const Main = styled.div`
  background-color: "E1E1E1";
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e1e1e1;
  z-index: 0; /* Ensure it's behind other elements */
  overflow: scroll;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 15vh;
  background-color: #e1e1e1;
`;

const PhoneButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;
  background-color: #e1e1e1;
`;

const App = () => {
  const { width, height } = WindowSize();

  return (
    <Main>
      <Overlay>
        <Header>
          <LeResume />
          {width > 700 ? <Buttons /> : null}
        </Header>

        {width <= 700 ? (
          <PhoneButtonContainer>
            <PhoneButtons />
          </PhoneButtonContainer>
        ) : null}

        {width > 800 ? <HeadDescription /> : <PhoneHeadDescription />}

        <Video />
        
        <Footer />
        <Carousel images={images} />

      </Overlay>
    </Main>
  );
};

export default App;
