import * as S from "./Header.styles";
import { BsSearch } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <S.Header>
        <div className="container">
          <h1>Buscador de CEP </h1>
          <S.WrapperSearch>
            <input placeholder="Digite seu cep" />
            <div className="containerIcon">
              <BsSearch size={20} />
            </div>
          </S.WrapperSearch>
        </div>
      </S.Header>
    </>
  );
};
