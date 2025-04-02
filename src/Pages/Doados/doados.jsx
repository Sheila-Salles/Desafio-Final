import S from "../Doados/doados.module.scss";
import livros from "../../assets/livros.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Doados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    const response = await axios.get(
      "https://projeto-api-6-n4e8.onrender.com/livros"
    );
    setLivros(response.data);
  };

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>
      <section className={S.boxcard}>
        <article>
          <img
            src={livros}
            alt="imagem de um livro que se chama o protagonista"
          />

          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
        {livros.map((item) => (
          <article key={item.id}>
            <img src={item.imagem_url} alt="" />
            <h3>{item.titulo}</h3>
            <p>{item.categoria}</p>
            <p>{item.autor}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
