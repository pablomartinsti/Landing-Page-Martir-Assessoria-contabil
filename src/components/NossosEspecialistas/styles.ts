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
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #d7d4cc;

  h1 {
    margin: 3.1rem 0;
    color: #ffe14d;
    line-height: 1.7;
    font-size: 3.1rem;
    white-space: pre-line;
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  .box {
    display: flex;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      margin: 2rem 0;
    }
    /* Ajuste para telas menores */
    @media (max-width: 480px) {
      display: block;
      margin-bottom: 0;
    }
  }

  .cards {
    max-width: 40rem;
    width: 100%;
    height: auto;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 2.5rem;
    padding: 0.725rem;
    line-height: 1.5;
    margin-bottom: 3.5rem;
    text-align: center;
    @media (max-width: 480px) {
      width: 90%;
    }
  }

  .card {
    max-width: 20rem;
    width: 100%;
    height: auto;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 2.5rem;
    padding: 0.725rem;
    line-height: 1.5;
    text-align: center;
    margin: 0 0.625rem;

    /* Ajuste para telas menores */
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 1.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  h2 {
    font-weight: bold;
    text-decoration: underline;
    font-size: 1.4rem;
    margin-bottom: 0.625rem;

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 1rem;
  }
`;
