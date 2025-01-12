import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Img = styled.img`
  width: 100vw;
  height: 100vh;
  z-index: -2;
  position: absolute;
`;
export const Main = styled.div`
  height: 100vh;
  width: 1200px;
  height: 100vh;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-top: 50px;
  h1 {
    color: #ffe14d;
    font-size: 50px;
    margin: 10px 0;
  }
  h3 {
    color: white;
    margin-top: 70px;
    margin-bottom: 100px;
    font-size: 30px;
    font-weight: 400;
    width: 80%;
    line-height: 1.8;
  }

  button {
    background-color: #ffe14d;
    padding: 20px 30px;
    border: 3px solid white;
    border-radius: 10px;
    font-size: 25px;
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
      background-color: white;
      border: 3px solid yellow;
    }
    &:active {
      opacity: 0.7;
      border: 3px solid black;
    }
  }
`;
