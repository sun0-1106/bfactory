import './App.css';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import GlobalStyles from './style/GlobalStyles';

const Container = styled.div`
  width: 80%;
  height: 90%;
  border: 1px solid blue;
  #canvas {
    display: flex;
    border: 1px solid black;
    width: 80%;
    height: 80%;
  }
`;
const BtnBox = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  border: 1px solid green;
`;
const Btn = styled.button`
  width: 100px;
  height: 30px;
`;
function App() {
  const canvasRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <Container>
        <BtnBox>
          <Btn>이동</Btn>
          <Btn>회전</Btn>
          <Btn>사이즈 변경</Btn>
          <Btn>crop</Btn>
          <Btn>제출</Btn>
        </BtnBox>
        <canvas id='canvas' ref={canvasRef}></canvas>
      </Container>
    </>
  );
}

export default App;
