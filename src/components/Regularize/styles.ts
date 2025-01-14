import styled from "styled-components";
import foto from "../../assets/Regularize-Sua-Situação-Fiscal.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${foto}); /* Caminho da imagem */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.2); /* Aplica o filtro apenas ao fundo */
    z-index: -1; /* Mantém a imagem atrás do conteúdo */
  }
`;

export const Section = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column; /* Alinha os elementos verticalmente */
  padding: 20px;
  z-index: 1; /* Coloca o conteúdo acima do fundo */
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  h1 {
    color: #ffe14d;
    text-align: start;
    font-size: 3.1rem;
    margin: 5rem 0;
    white-space: pre-line;
    line-height: 1.7;
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  .card {
    max-width: 23rem;
    height: 20rem;
    background: #46464a;
    margin: 10px;
    border-radius: 1rem;
    padding: 2rem;
    color: #d7d4cc;

    @media (max-width: 1180px) {
      padding: 1rem;
    }

    @media (max-width: 480px) {
      height: 16rem;
    }

    h2 {
      font-weight: bold;
      line-height: 1.7;
      font-size: 1.3rem;
      margin-bottom: 1.3rem;
      text-decoration: underline;

      @media (max-width: 1024px) {
        font-size: 1.1rem;
        line-height: 1.5;
      }
    }

    h3 {
      font-weight: 300;
      line-height: 1.7;
      font-size: 1rem;
      @media (max-width: 1024px) {
        line-height: 1.5;
      }
    }
  }
`;
