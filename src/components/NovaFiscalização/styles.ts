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
    max-width: 1200px;
    @media (max-width: 1200px) {
      width: 80%;
    }

    h1 {
      font-size: 50px;
      line-height: 1.7;
      white-space: pre-line;
      margin: 50px 0;
    }

    .description {
      display: flex;
      gap: 100px;

      @media (max-width: 480px) {
        display: block;
      }
      p {
        font-size: 20px;
        line-height: 2.5;
        font-weight: 400;
        margin-bottom: 50px;
      }
    }
  }
`;
