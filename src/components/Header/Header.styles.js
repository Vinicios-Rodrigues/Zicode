import styled from "styled-components";

export const Header = styled.header`
  /* background: ; */
  height: 4rem;
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
      font: 400 1.5rem "Special Elite", cursive;
      color: white;
      border-right: 2px solid white;
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
        width: 12.5rem;
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

export const WrapperSearch = styled.div`
  display: flex;
  margin-left: 2rem;
  height: 1.7rem;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: -1px 1px 5px #525151;
  padding: 1px;

  input {
    height: 100%;
    border: 0;
    background: #171717;
    outline: none;
    color: white ;
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
    padding-left: 0.5rem;
    font: 400 0.8rem "Special Elite", cursive;
  }

  .containerIcon {
    width: 2rem;
    background: #171717;
    height: 100%;
    border: 0;
    transition: transform 0.5s;
  }
  .containerIcon :hover {
    filter: brightness(0.7);
    transform: scale(1.1);
  }
`;
