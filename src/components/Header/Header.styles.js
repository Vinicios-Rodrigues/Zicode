import styled from "styled-components";

export const Header = styled.header`
  /* background: ; */
  height: 3rem;
  width: 100%;
  max-width: 1024px;
  box-shadow: 2px 2px 5px black;

  .container {
    margin: 0 auto;
    width: 90%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font: 600 1.2rem roboto;
    }
  }
`;

export const WrapperSearch = styled.div`
  display: flex;
  border: 1.8px solid black;
  border-radius: 5px;
  padding: 0.05rem;
  height: 1.5rem;
  margin-left: 1rem;

  input {
    border: 0;
    width: 7rem;
  }
`;
