import React from "react";
import "./button.css";

const Button = (props) => {
    function clickEvent(){
        alert(`A label desse botão é ${props.label}`)
    
    }
  return <button className="button box-shadow" onClick={clickEvent} type="button">{props.label}</button>;
};
Button.defaultProps = {
  label: "Clique Aqui",
};

export default Button;
