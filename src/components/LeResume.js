import React from 'react';
import styled from 'styled-components';
import smile from '../assets/leresume_logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5vw;
  padding-top: 3vh;
  width: 100vw;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1.5vw;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #73698A;
  font-weight: 900;
  font-family: 'Inter', sans-serif;
`;

const LeResume = () => {
    return (
        <Container>
            <Logo src={smile}></Logo>
            <Title>LeResume</Title>
        </Container>
    );
}

export default LeResume;