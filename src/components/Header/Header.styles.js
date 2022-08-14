import styled from "styled-components";

export const Header = styled.header`
  /* background: ; */
  height: 5rem;
  width: 100%;
  box-shadow: 2px 2px 5px black;

  .container {
    margin: 0 auto;
    width: 90%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font: 400 2.5rem "Special Elite", cursive;
      color: white;
      border-right: 2px solid white;
      padding-top: 1rem ;
      white-space: nowrap; /* impede que quebra de linha */
      overflow: hidden;
    }

    .animation {
      animation: cursor 1s steps(40) infinite normal,
        textEffect normal 2s steps(40) both;
    }
    /* Efeito de digitar  */
    @keyframes textEffect {
      from {
        width: 0;
      }
      to {
        width: 20.5rem;
      }
    }
    /* Animação do cursor  */
    @keyframes cursor {
      from {
        border-right-color: rgba(255, 255, 255, 0.75);
      }
      to {
        border-right-color: transparent;
      }
    }
  }
`;


