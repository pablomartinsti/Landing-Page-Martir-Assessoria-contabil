import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;
export const Img = styled.img`
  width: 100vw;
  position: absolute;
  z-index: -1;
  filter: brightness(0.2);
`;
export const Main = styled.div`
  width: 1200px;
`;
export const Box = styled.div`
  .title {
    margin: 50px 0;
  }
  h1 {
    font-size: 50px;
    color: #ffe14d;
    line-height: 1.5;
  }
  .card {
    margin: 20px 0;
    width: auto;
    border: 1px solid rgba(215, 212, 204, 0.5);
    padding: 10px;
    color: #d7d4cc;
    border-radius: 30px;
    display: flex;
    gap: 20px;

    h4 {
      margin: 10px 0;
      font-size: 25px;
      font-weight: bold;
    }
    p {
      font-weight: 300;
      font-size: 18px;
    }
  }
`;
