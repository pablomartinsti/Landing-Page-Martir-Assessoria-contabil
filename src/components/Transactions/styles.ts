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

    /* Responsividade para imagens */
    @media (max-width: 768px) {
      width: 300px;
    }
    @media (max-width: 480px) {
      width: 200px;
      min-height: 171vh;
    }
  }
`;

export const Main = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 100px 0;

  /* Ajuste para telas menores */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 85%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #d7d4cc;

  h1 {
    margin: 50px 0;
    color: #ffe14d;
    line-height: 1.7;
    font-size: 50px;
    white-space: pre-line;

    /* Responsividade para títulos */
    @media (max-width: 768px) {
      font-size: 40px;
      text-align: center;
    }
    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  .box {
    display: flex;
    margin-bottom: 50px;

    /* Ajuste para telas menores */
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .cards {
    width: 660px;
    height: auto;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 40px;
    padding: 10px 10px;
    line-height: 1.5;
    margin-bottom: 50px;
    text-align: center;

    /* Responsividade para cards */
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  .card {
    width: 330px;
    height: auto;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 40px;
    padding: 10px;
    line-height: 1.5;
    text-align: center;
    margin: 0 10px;

    /* Ajuste para telas menores */
    @media (max-width: 768px) {
      width: 90%;
      margin-bottom: 20px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  h2 {
    font-weight: bold;
    text-decoration: underline;
    font-size: 22px;
    margin-bottom: 10px;

    /* Responsividade para subtítulos */
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 18px;

    /* Responsividade para textos */
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;
