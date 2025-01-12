import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe14d;
  height: 100vh;
  width: 100vw;

  .main {
    background-color: #27272b;
    width: 1200px;
    padding: 50px;
    border-radius: 30px;

    h1 {
      font-size: 50px;
      color: #ffe14d;
      line-height: 1.5;
    }
    h3 {
      font-size: 25px;
      font-weight: 300;
      color: #d7d4cc;
      margin-top: 40px;
    }
    button {
      padding: 15px;
      background-color: #ffe14d;
      margin-top: 50px;
    }

    .box-button {
      display: flex;
      gap: 20px;
      button {
        font-size: 20px;
        border-radius: 15px;
        border: 2px solid white;
      }

      button:hover {
        background-color: white;
        border: 2px solid yellow;
      }
      button:active {
        opacity: 0.7;
        border: 2px solid black;
      }
    }
  }
`;
