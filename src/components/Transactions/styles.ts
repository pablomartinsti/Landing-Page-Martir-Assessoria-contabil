import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #27272b;
  width: 100vw;
  img {
    width: 450px;
    height: auto;
    margin: 50px 0;
    border-radius: 40px;
  }
`;
export const Main = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d7d4cc;
  .title {
    margin: 50px 0;
    color: #ffe14d;
    line-height: 1.5;
    font-size: 25px;
  }
  .box {
    display: flex;
    margin-bottom: 50px;
  }
  .cards {
    width: 600px;
    height: 160px;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 40px;
    padding: 10px 10px;
    text-align: center;
    line-height: 1.7;
    margin-bottom: 50px;
  }
  .card {
    width: 300px;
    height: 300px;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 40px;
    padding: 5px 10px;
    text-align: center;
    line-height: 1.7;
    margin: 0 10px;
  }
  h4 {
    font-weight: bold;
    font-size: 22px;
    text-decoration: underline;
    margin: 10px 0;
  }
  p {
    font-weight: 300;
    font-size: 18px;
  }
`;
