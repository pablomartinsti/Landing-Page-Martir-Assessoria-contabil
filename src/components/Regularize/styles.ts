import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Section = styled.div`
  width: 1200px;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;

  .title {
    margin: 50px 0;
  }
  h1 {
    color: #ffe14d;
    text-align: start;
    font-size: 50px;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 350px;
    height: 350px;
    background: #46464a;
    margin: 0 25px;
    border-radius: 20px;
    padding: 20px;
    color: #d7d4cc;
    h4 {
      font-weight: bold;
      font-size: 22px;
      line-height: 1.5;
      margin: 20px 0;
    }
    p {
      font-size: 20px;
      font-weight: 300;
      line-height: 1.5;
    }
  }
`;

export const Img = styled.img`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  filter: brightness(0.2);
`;
