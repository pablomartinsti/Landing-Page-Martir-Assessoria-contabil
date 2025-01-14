import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe14d;
  height: 100vh;
  width: 100vw;

  .main {
    background-color: #27272b;
    width: 90%;
    padding: 50px;
    border-radius: 30px;

    /* Ajuste para dispositivos menores */
    @media (max-width: 1024px) {
      width: 90%;
    }
    @media (max-width: 768px) {
      padding: 30px;
    }

    h1 {
      font-size: 50px;
      color: #ffe14d;
      line-height: 1.5;
      white-space: pre-line;

      /* Ajuste para dispositivos menores */
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 300;
      color: #d7d4cc;
      margin-top: 40px;

      @media (max-width: 480px) {
        font-size: 1.2rem;
      }
    }

    .box-button {
      display: flex;
      gap: 20px;

      /* Ajuste para dispositivos menores */
      @media (max-width: 767px) {
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
      }

      a {
        font-size: 1.3rem;
        border-radius: 15px;
        border: 2px solid white;
        cursor: pointer;
        text-decoration: none;
        color: black;
        transition: 0.5s;
        padding: 15px;
        background-color: #ffe14d;
        margin-top: 50px;
        text-align: center;

        /* Ajuste para dispositivos menores */
        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      a:hover {
        background-color: white;
        border: 2px solid yellow;
      }

      a:active {
        opacity: 0.7;
        border: 2px solid black;
      }
    }
  }

  /* Responsividade para o container principal */
  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: #fff;
    border: 2px solid #27272b;
    padding: 2.5rem;
    border-radius: 0.5rem;
    max-width: 25rem;
    width: 100%;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    /* Ajuste para dispositivos menores */
    @media (max-width: 480px) {
      padding: 1.2rem;
      width: 90%;
    }

    h2 {
      margin: 1.2rem 0;
    }
  }

  .close-button {
    position: absolute;
    top: 0.625rem;
    right: 1.8rem;
    background: none;
    border: none;
    font-size: 2.5rem;
    cursor: pointer;

    /* Ajuste para dispositivos menores */
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: start;

    input {
      height: 45px;
      font-size: 20px;
      margin: 5px 0;
      border-radius: 5px;
      padding: 10px 0 10px 10px;

      /* Ajuste para dispositivos menores */
      @media (max-width: 480px) {
        font-size: 18px;
      }
    }

    textarea {
      font-size: 20px;
      border: 1px solid black;
      padding: 10px 0 10px 10px;

      /* Ajuste para dispositivos menores */
      @media (max-width: 480px) {
        font-size: 18px;
      }
    }

    button {
      margin-top: 20px;
      font-size: 25px;
      padding: 11px;
      border-radius: 5px;
      background: #ffe14d;
      border: 3px solid black;
      cursor: pointer;
      transition: 0.5s;

      /* Ajuste para dispositivos menores */
      @media (max-width: 480px) {
        font-size: 20px;
        padding: 10px;
      }
    }
  }
`;
