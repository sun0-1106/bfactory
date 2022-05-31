import './App.css';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import GlobalStyles from './style/GlobalStyles';

const Container = styled.div`
  @media ${props => props.theme.desktop} {
    background-color: ${props => props.theme.mainColor};
    width: 100vw;
    height: 100vh;
  }
  @media ${props => props.theme.mobile} {
    background-color: ${props => props.theme.subColor};
    width: 100vw;
    height: 100vh;
  }
  position: relative;
  #canvas {
    @media ${props => props.theme.desktop} {
      width: 900px;
      height: 700px;
    }
    @media ${props => props.theme.mobile} {
      width: 400px;
      height: 300px;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    background-color: #fff;
  }
`;
const BtnBox = styled.div`
  @media ${props => props.theme.desktop} {
    left: 3%;
    width: 650px;
    height: 70px;
  }
  @media ${props => props.theme.mobile} {
    left: 2%;
    width: 480px;
    height: 70px;
  }
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Btn = styled.button`
  @media ${props => props.theme.desktop} {
    width: 100px;
    height: 30px;
  }
  @media ${props => props.theme.mobile} {
    width: 85px;
    height: 30px;
  }
  background-color: orange;
  border: 1px solid grey;
  border-radius: 5px;
  font-weight: 600;
`;
const Btn1 = styled(Btn)`
  background-color: yellowgreen;
`;
const Btn2 = styled(Btn)`
  background-color: skyblue;
`;
const Btn3 = styled(Btn)`
  background-color: purple;
`;
const Btn4 = styled(Btn)`
  background-color: yellow;
`;
function App() {
  const canvasRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <Container>
        <BtnBox>
          <Btn>이동</Btn>
          <Btn1>회전</Btn1>
          <Btn2>사이즈 변경</Btn2>
          <Btn3>crop</Btn3>
          <Btn4>제출</Btn4>
        </BtnBox>
        <canvas id='canvas' ref={canvasRef}></canvas>
      </Container>
    </>
  );
}

export default App;
