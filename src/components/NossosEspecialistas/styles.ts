import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #27272b;
  padding: 100px 0;
  border-bottom: 1px solid #d7d4cc;

  /* Responsividade para o container */
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const Main = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  gap: 50px;

  img {
    width: 450px;
    height: auto;
    border-radius: 40px;

    /* Responsividade para imagem */
    @media (max-width: 768px) {
      width: 300px;
      margin: 30px 0;
    }
    @media (max-width: 480px) {
      width: 90%;
    }
  }

  h1 {
    margin: 50px 0;
    color: #ffe14d;
    text-align: start;
    font-size: 50px;
    line-height: 1.5;
    white-space: pre-line;

    /* Responsividade para o título */
    @media (max-width: 768px) {
      font-size: 40px;
      text-align: center;
    }
    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  /* Ajuste para layout geral */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: #d7d4cc;

  .box-card {
    display: flex;

    /* Responsividade para cartões */
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .card {
    width: 300px;
    height: 300px;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 40px;
    padding: 20px 10px;
    text-align: center;
    line-height: 1.7;
    margin: 20px 10px;

    /* Responsividade para os cartões */
    @media (max-width: 768px) {
      width: 90%;
      height: auto;
      margin: 10px 0;
    }
    @media (max-width: 480px) {
      width: 100%;
    }

    h2 {
      font-weight: bold;
      font-size: 22px;
      margin: 10px 0;
      text-decoration: underline;

      /* Responsividade para subtítulos */
      @media (max-width: 768px) {
        font-size: 20px;
      }
      @media (max-width: 480px) {
        font-size: 18px;
      }
    }

    h3 {
      font-weight: 300;
      font-size: 18px;
      margin: 20px 0;

      /* Responsividade para textos */
      @media (max-width: 768px) {
        font-size: 16px;
      }
      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }
`;
