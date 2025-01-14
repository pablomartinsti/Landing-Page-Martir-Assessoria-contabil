import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 480px) {
    min-height: 130vh;
  }
`;

export const Section = styled.div`
  width: 90%;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  h1 {
    color: #ffe14d;
    text-align: start;
    font-size: 3.1rem;
    margin: 3rem;
    white-space: pre-line;
    line-height: 1.7;
    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  .card {
    width: 21rem;
    height: 23rem;
    background: #46464a;
    margin: 0.5rem;
    border-radius: 20px;
    padding: 1rem;
    color: #d7d4cc;

    @media (max-width: 480px) {
      height: 16rem;
    }

    h2 {
      font-weight: bold;
      line-height: 1.7;
      margin-bottom: 1.3rem;
      text-decoration: underline;

      @media (max-width: 820px) {
        font-size: 1.1rem;
      }
    }

    h3 {
      font-weight: 300;
      line-height: 1.7;
      font-size: 1rem;
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`;

export const Img = styled.img`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  filter: brightness(0.2);
  @media (max-width: 480px) {
    min-height: 130vh;
  }
`;
