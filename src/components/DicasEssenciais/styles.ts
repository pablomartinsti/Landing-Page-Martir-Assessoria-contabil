import styled from "styled-components";
import foto from "../../assets/Dicas-Essenciais.jpg";

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
    filter: brightness(0.2); /* Aplica o filtro apenas ao fundo */
    z-index: -1; /* Mantém a imagem atrás do conteúdo */
  }
`;

export const Main = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column; /* Alinha os elementos verticalmente */
  align-items: center; /* Centraliza o conteúdo */
  padding: 20px;
  z-index: 2; /* Coloca o conteúdo acima do fundo */
`;

export const Box = styled.div`
  h1 {
    font-size: 3.1rem;
    color: #ffe14d;
    line-height: 1.5;
    text-align: center;
    white-space: pre-line;
    margin: 5rem 0;

    /* Responsividade para cartões */
    @media (max-width: 1180px) {
      font-size: 2rem;
      text-align: start;
    }
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  .card {
    margin: 2rem 0;
    border: 1px solid rgba(215, 212, 204, 0.5);
    padding: 1rem;
    color: #d7d4cc;
    border-radius: 2.5rem;
    display: flex;
    gap: 2rem;

    @media (max-width: 1024px) {
      padding: 0.6rem;
    }

    @media (max-width: 480px) {
      padding: 1rem;
    }

    h2 {
      margin: 1rem 0;
      font-size: 1.7rem;
      font-weight: bold;

      @media (max-width: 1180px) {
        font-size: 1.4rem;
      }
      @media (max-width: 480px) {
        font-size: 1.3rem;
        text-decoration: underline;
      }
    }

    h3 {
      font-weight: 300;
      font-size: 1rem;
    }

    svg {
      flex-shrink: 0;
      /* Ajuste de ícones */
      @media (max-width: 768px) {
        max-width: 6rem;
        max-height: 6rem;
      }
      @media (max-width: 480px) {
        display: none;
      }
    }
  }
`;
