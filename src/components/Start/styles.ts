import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

export const Img = styled.img`
  width: 100vw;
  height: 100vh;
  z-index: -2;
  position: absolute;

  @media (max-width: 1200px) {
    height: 150vh;
  }
`;

export const Main = styled.div`
  height: 100vh;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 90%; /* Ajusta a largura para caber em tablets */
    flex-direction: column; /* Empilha os elementos */
    justify-content: center;
    align-items: center;
    text-align: start;
    height: 150vh;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  @media (max-width: 1200px) {
    gap: 50px;
    width: 90%;
  }

  h1 {
    color: #ffe14d;
    font-size: 40px;
    white-space: pre-line;
    line-height: 1.7;

    @media (max-width: 768px) {
      font-size: 32px; /* Reduz tamanho em tablets */
      text-align: start; /* Centraliza o texto */
      margin-top: 50px;
    }

    @media (max-width: 480px) {
      font-size: 28px; /* Reduz tamanho ainda mais para celulares */
      text-align: start; /* Centraliza o texto */
    }
  }

  h2 {
    color: white;
    font-size: 25px;
    font-weight: 400;
    line-height: 1.7;
    white-space: pre-line;

    @media (max-width: 768px) {
      font-size: 20px; /* Reduz tamanho em tablets */
      text-align: start; /* Centraliza o texto */
      margin: 10px 0;
    }

    @media (max-width: 480px) {
      font-size: 18px; /* Reduz tamanho ainda mais para celulares */
      text-align: start; /* Centraliza o texto */
    }
  }

  a {
    background-color: #ffe14d;
    padding: 20px 30px;
    border: 3px solid white;
    border-radius: 10px;
    font-size: 25px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    transition: background-color 0.5s;
    max-width: 400px;

    &:hover {
      background-color: white;
      border: 3px solid yellow;
    }

    &:active {
      opacity: 0.7;
      border: 3px solid black;
    }
    @media (max-width: 1200px) {
      text-align: center;
      align-self: center; /* Centraliza o botão */
    }

    @media (max-width: 768px) {
      font-size: 16px; /* Reduz tamanho do botão em tablets */
      padding: 15px 20px; /* Ajusta o espaçamento interno */
      text-align: center;
      align-self: center; /* Centraliza o botão */
    }

    @media (max-width: 480px) {
      font-size: 14px; /* Ainda menor para celulares */
      padding: 10px 15px;
      text-align: center;
      align-self: center; /* Centraliza o botão */
    }
  }
`;
