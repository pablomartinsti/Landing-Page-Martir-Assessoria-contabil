import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #27272b;
  border-bottom: 1px solid #d7d4cc;

  /* Responsividade para o container */
`;

export const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 3.1rem 0;
  gap: 3.1rem;

  img {
    width: 40%;
    height: auto;
    border-radius: 2.5rem;

    /* Responsividade para imagem */
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  h1 {
    color: #ffe14d;
    text-align: start;
    font-size: 3.1rem;
    line-height: 1.5;
    white-space: pre-line;
    margin-bottom: 2rem;

    /* Responsividade para o título */
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: #d7d4cc;

  /* Responsividade para cartões */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .box-card {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: 480px) {
      flex-wrap: wrap;
    }
  }

  .card {
    width: 20rem;
    height: 20rem;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 2.5rem;
    padding: 1.2rem;
    text-align: center;
    line-height: 1.7;
    margin: 1.2rem;

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
      font-size: 1.3rem;
      margin: 1rem 0;
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
      font-size: 1rem;
      margin: 1rem 0;

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
