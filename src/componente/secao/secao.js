import React from "react";
import "./secao.css";
import ParagrafoMaiusculoColorido from "../paragrafo";
import Button from "../button";

const Secao = () => {
  return (
    <section className="secao box-shadow">
      <ParagrafoMaiusculoColorido
        texto="Essa paisagem de uma árvore destacada pelo sol poente é uma cena de tirar o fôlego. 
          O sol, com sua tonalidade dourada, fica perfeitamente alinhado no centro da copa da árvore, 
          criando uma visão espetacular. O céu se enche de cores quentes e suaves, pintando o horizonte 
          com tons de laranja e rosa, enquanto o sol se despede do dia."
        cor="red"
      />
      <ParagrafoMaiusculoColorido
        cor="blue"
        texto="não sabia o que colocar no paragafo peguei esse texto onde 
          ncontrei essa imagem para o background, tava meio feio sem vida"
      />

      <Button label="Baixar CV" />
    </section>
  );
};
export default Secao;
