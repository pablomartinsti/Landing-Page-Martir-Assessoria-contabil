import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: 480px) {
    min-height: 135vh;
  }
`;

export const Section = styled.div`
  max-width: 1200px;

  /* Ajuste para telas menores */
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;

  .title {
    color: #ffe14d;
    text-align: start;
    font-size: 30px;
    white-space: pre-line;
    line-height: 1.7;

    @media (max-width: 1200px) {
      font-size: 24px;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      margin-bottom: 50px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .card {
    width: 380px;
    height: 380px;
    background: #46464a;
    margin: 10px;
    border-radius: 20px;
    padding: 20px;
    color: #d7d4cc;

    @media (max-width: 1200px) {
      width: 340px;
      height: 360px;
    }
    @media (max-width: 480px) {
      width: 280px;
      height: 250px;
    }
    h2 {
      font-weight: bold;
      line-height: 1.7;
      margin-bottom: 22px;
      text-decoration: underline;

      /* Responsividade para subtítulos */
      @media (max-width: 768px) {
        font-size: 18px;
      }
      @media (max-width: 480px) {
        font-size: 16px;
      }
    }

    h3 {
      font-weight: 300;
      line-height: 1.7;
      font-size: 18px;

      /* Responsividade para textos */
      @media (max-width: 768px) {
        font-size: 14px;
      }
      @media (max-width: 480px) {
        font-size: 12px;
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

  /* Ajuste para telas menores */
  @media (max-width: 768px) {
    height: auto;
  }
  @media (max-width: 480px) {
    height: 135vh;
  }
`;
