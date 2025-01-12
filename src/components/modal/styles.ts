import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 480px) {
    width: 90%;
  }
  .modal-content {
    background: #ffe14d;
    border: 2px solid #27272b;
    padding: 40px;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
    margin-top: 50px;
    color: #27272b;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      margin: 10px 0;
    }

    @media (max-width: 768px) {
      padding: 20px; /* Reduz o padding em telas menores */
      max-width: 100%; /* Ajusta a largura para caber na tela */
      height: auto;
    }

    @media (max-width: 480px) {
      padding: 15px; /* Ainda menor para celulares */
    }
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 3px;

    input,
    textarea {
      font-size: 16px;
      margin: 5px 0;
      border-radius: 5px;
      padding: 10px 0 10px 10px;
      border: 1px solid black;
      text-transform: capitalize;
    }

    input {
      height: 45px;
    }

    button {
      margin-top: 20px;
      font-size: 18px; /* Ajusta o tamanho do botão para telas menores */
      padding: 11px;
      border-radius: 5px;
      background: #fff;
      border: 1px solid black;
      cursor: pointer;
      transition: 0.5s;
    }

    button:hover {
      background: #000;
      color: #fff;
    }

    button:active {
      transform: scale(0.9);
    }

    @media (max-width: 768px) {
      input,
      textarea {
        font-size: 14px; /* Reduz o tamanho da fonte dos campos */
      }

      button {
        font-size: 16px; /* Botão menor para tablets */
      }
    }

    @media (max-width: 480px) {
      input,
      textarea {
        font-size: 12px; /* Ainda menor para celulares */
      }

      button {
        font-size: 14px; /* Botão ajustado para telas menores */
        padding: 8px; /* Reduz o padding */
      }
    }
  }
`;
