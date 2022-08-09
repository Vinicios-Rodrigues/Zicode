import * as S from "./Header.styles";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import api from "../../services/api";

export const Header = () => {
  const [input, setInput] = useState();

  async function handleSearch() {
    if (!input) {
      alert("falta");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setInput(response.data);
      setInput("");
    } catch (error) {
      alert(` falogu`);
      setInput("");
    }
  }
  return (
    <>
      <S.Header>
        <div className="container">
          <h1 className="animation">Buscador de CEP </h1>
          <S.WrapperSearch>
            <input
              type="number"
              placeholder="Digite seu cep"
              onChange={(event) => setInput(event.target.value)}
              value={input}
            />
            <button className="containerIcon" onClick={handleSearch}>
              <BsSearch size={16} color="white" />
            </button>
          </S.WrapperSearch>
        </div>
      </S.Header>
    </>
  );
};
