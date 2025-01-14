import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffe14d;
  display: flex;
  justify-content: center;
  width: 100vw;

  main {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin: 2rem 0;

    h1 {
      font-size: 3.1rem;
      line-height: 1.7;
      white-space: pre-line;
      margin: 3.1rem 0;

      @media (max-width: 480px) {
        font-size: 1.8rem;
      }
    }

    .description {
      display: flex;
      gap: 6.25rem;

      @media (max-width: 480px) {
        display: block;
      }
      p {
        font-size: 1.3rem;
        line-height: 2.5;
        font-weight: 400;
        margin-bottom: 3.1rem;
      }
    }
  }
`;
