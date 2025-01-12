import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding: 50px 0;

  /* Ajuste para dispositivos menores */
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const Img = styled.img`
  width: 100vw;
  position: absolute;
  z-index: -1;
  filter: brightness(0.2);
  min-height: 170vh;
`;

export const Main = styled.div`
  width: 1200px;

  /* Ajuste para dispositivos menores */
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const Box = styled.div`
  h1 {
    margin: 50px 0;
    font-size: 50px;
    color: #ffe14d;
    line-height: 1.5;
    text-align: center;

    /* Responsividade para o título */
    @media (max-width: 768px) {
      font-size: 40px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  .card {
    margin: 20px 0;
    width: auto;
    border: 1px solid rgba(215, 212, 204, 0.5);
    padding: 20px;
    color: #d7d4cc;
    border-radius: 30px;
    display: flex;
    gap: 20px;

    /* Responsividade para cartões */
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
      padding: 15px;
    }
    @media (max-width: 480px) {
      padding: 10px;
    }

    h2 {
      margin: 10px 0;
      font-size: 22px;
      font-weight: bold;

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

      /* Responsividade para textos */
      @media (max-width: 768px) {
        font-size: 16px;
      }
      @media (max-width: 480px) {
        font-size: 14px;
      }
    }

    svg {
      flex-shrink: 0;
      /* Ajuste de ícones */
      @media (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
      @media (max-width: 480px) {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
