import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Img = styled.img`
  width: 100vw;
  height: 100vh;
  z-index: -2;
  position: absolute;
`;

export const Main = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;

  h1 {
    color: #ffe14d;
    font-size: 2.4rem;
    white-space: pre-line;
    line-height: 1.7;

    @media (max-width: 480px) {
      font-size: 1.9rem;
    }
  }

  h2 {
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.7;
    white-space: pre-line;
  }

  a {
    background-color: #ffe14d;
    padding: 1.25rem 2rem;
    border: 0.18rem solid white;
    border-radius: 10px;
    font-size: 1.4rem;
    cursor: pointer;
    text-decoration: none;
    color: black;
    transition: background-color 0.5s;
    max-width: 37rem;
    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 1rem 1.3rem;
    }
    &:hover {
      background-color: white;
      border: 0.18rem solid #ffe14d;
    }

    &:active {
      opacity: 0.7;
      border: 0.18rem solid black;
    }
  }
`;
