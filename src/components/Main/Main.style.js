import styled from "styled-components";

export const WrapperSearch = styled.div`
  display: flex;
  margin-left: 2rem;
  width: 14.5rem;
  height: 2.5rem;
  border: 1px solid transparent;
  border-radius: 6px;
  box-shadow: -1px 1px 5px #525151;
  padding: 1px;
  margin: 0 auto 2rem;
  background: #525151;

  input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width:100%;
    height: 100%;
    border: 0;
    background: #171717;
    outline: none;
    color: white;
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
    padding-left: 0.5rem;
    font: 400 0.9rem "Special Elite", cursive;
  }

  .containerIcon {
    width: 20%;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
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

export const Container = styled.main`
  margin: 2rem auto 0;
  max-width: 60rem;

  table {
    width: 100%;
    background: #929692;
  }

  th {
    border: 1px solid white;
    padding: 0.5rem;
    color: white;
    background: #454745;
  }
  td {
    text-align: center;
    border: 1px solid white;
    padding: 0.5rem 0;
  }
`;
