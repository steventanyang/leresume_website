import React from "react";
import styled from "styled-components";

import Demo from "../assets/leresume_demo.mp4";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const VideoElement = styled.video`
  margin-top: 3vh;
  width: 50vw;
  border: 2px solid #ccc;
  border-radius: 1.5rem;
  margin-bottom: 15vh;
`;

const Video = () => {
  return (
    <Container>
      <VideoElement controls>
        <source src={Demo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoElement>
    </Container>
  );
};

export default Video;
