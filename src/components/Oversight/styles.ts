import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffe14d;
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 100px 0;
  main {
    display: flex;
    flex-direction: column;
    width: 1200px;
    .title {
      margin: 50px 0;

      h1 {
        font-size: 50px;
        line-height: 1.5;
      }
    }
    .description {
      display: flex;
      gap: 100px;
      p {
        font-size: 20px;
        line-height: 2.5;
        font-weight: 400;
        margin-bottom: 50px;
      }
    }
  }
`;
