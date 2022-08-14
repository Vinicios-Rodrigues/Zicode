import * as S from "./Main.style";
import { BsSearch } from "react-icons/bs";
import api from "../../services/api";
import { useState, React } from "react";

export const Main = () => {
  const [input, setInput] = useState("");
  const [test, setTest] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("digite seu cep");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setTest(response.data);
      setInput("");
    } catch {
      alert(` ok`);
      setInput("");
    }
  }
  return (
    <S.Container>
      <S.WrapperSearch>
        <input
          type="text"
          placeholder="Digite seu cep"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="containerIcon" onClick={handleSearch}>
          <BsSearch size={16} color="white" />
        </button>
      </S.WrapperSearch>
      {Object.keys(test).length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Rua</th>
              <th>Bairro</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{test.logradouro}</td>
              <td>{test.bairro}</td>
              <td>{test.localidade}</td>
            </tr>
          </tbody>
        </table>
      )}
    </S.Container>
  );
};
