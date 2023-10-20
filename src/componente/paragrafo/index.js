import React from "react";

const ParagrafoMaiusculoColorido = (props) => {
  return <p style={{color: props.cor}}>{props.texto.toUpperCase()}</p>;
  
};
export default ParagrafoMaiusculoColorido;
