import * as S from "./Header.styles";
import { useState, React } from "react";


export const Header = () => {
  return (
    <>
      <S.Header>
        <div className="container">
          <h1 className="animation">Buscador de CEP </h1>
        </div>
      </S.Header>
    </>
  );
};
