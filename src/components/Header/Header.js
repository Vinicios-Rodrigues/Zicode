import * as S from "./Header.styles";
import { BsSearch } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <S.Header>
        <div className="container">
          <h1 className="animation">Buscador de CEP </h1>
          <S.WrapperSearch>
            <input placeholder="Digite seu cep" />
            <button className="containerIcon">
              <BsSearch size={16} color="white" />
            </button>
          </S.WrapperSearch>
        </div>
      </S.Header>
    </>
  );
};
