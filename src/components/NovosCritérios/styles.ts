import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #27272b;
  padding: 50px 0;

  /* Responsividade para o container */
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const Main = styled.div`
  max-width: 1200px;
  display: flex;
  padding: 100px 0;

  gap: 40px;

  img {
    width: 450px;
    height: auto;
    border-radius: 40px;

    /* Responsividade para imagem */
    @media (max-width: 768px) {
      width: 300px;
    }
    @media (max-width: 480px) {
      width: 80%;
    }
  }

  h1 {
    margin-bottom: 50px;
    color: #ffe14d;
    text-align: center;
    font-size: 50px;
    line-height: 1.5;
    white-space: pre-line;

    /* Responsividade para o título */
    @media (max-width: 768px) {
      font-size: 40px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  /* Ajuste de layout para telas menores */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: #d7d4cc;
  justify-content: space-between;
  align-items: center;

  .card {
    width: 560px;
    height: 250px;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 40px;
    padding: 20px 10px;
    text-align: center;
    line-height: 1.7;
    margin: 20px;

    /* Responsividade para cartões */
    @media (max-width: 768px) {
      width: 90%;
      height: auto;
      margin: 15px 0;
    }
    @media (max-width: 480px) {
      width: 87%;
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
