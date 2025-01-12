import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #27272b;
  padding: 100px 0;
`;

export const Main = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  img {
    width: 450px;
    height: auto;
    border-radius: 40px;
  }

  .title {
    margin-bottom: 50px;
    h1 {
      color: #ffe14d;
      text-align: start;
      font-size: 50px;
      line-height: 1.5;
    }
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: #d7d4cc;

  .card {
    width: 560px;
    height: 250px;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 40px;
    padding: 20px 10px;
    text-align: center;
    line-height: 1.7;
    margin: 10px;
    h4 {
      font-weight: bold;
      font-size: 22px;
      margin: 10px 0;
    }
    p {
      font-weight: 300;
      font-size: 18px;
      margin: 20px 0;
    }
  }
`;
