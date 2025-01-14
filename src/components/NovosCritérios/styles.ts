import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #27272b;
`;

export const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  gap: 2.5rem;

  img {
    width: 40%;
    border-radius: 2.5rem;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  h1 {
    margin-bottom: 3rem;
    color: #ffe14d;
    text-align: center;
    font-size: 3.1rem;
    line-height: 1.5;
    white-space: pre-line;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  /* Ajuste de layout para telas menores */
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
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
    max-width: 40rem;
    height: 16rem;
    border: 1px solid rgba(215, 212, 204, 0.5);
    border-radius: 2.5rem;
    padding: 2rem;
    text-align: center;
    line-height: 1.7;
    margin: 2rem;

    @media (max-width: 480px) {
      padding: 0;
      height: 18rem;
    }

    h2 {
      font-weight: bold;
      font-size: 1.4rem;
      margin: 1rem 0;
      text-decoration: underline;
    }

    h3 {
      font-weight: 300;
      font-size: 1rem;
      margin: 1rem;

      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
  }
`;
