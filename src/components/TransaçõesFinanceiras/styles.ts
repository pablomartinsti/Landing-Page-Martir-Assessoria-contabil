import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #27272b;
  width: 100vw;

  img {
    width: 40%;
    height: auto;
    border-radius: 40px;

    /* Responsividade para imagens */
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
`;

export const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 3.1rem;
  margin: 3.1rem 0;

  /* Ajuste para telas menores */
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
      max-width: 25rem;
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
      max-width: 25rem;
      margin: 1rem 0;
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
