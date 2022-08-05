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
      font: 600 1.5rem roboto;
    }
  }
`;

export const WrapperSearch = styled.div`
  display: flex;
  margin-left: 2rem;
  height: 1.7rem;

  input {
    height: 100%;
    border: 1px solid black;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .containerIcon {
    width: 2rem;
    background: lightgray;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-left: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
