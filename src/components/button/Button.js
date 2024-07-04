import React from "react";
import './styles.css'

function Button({onClick}){

    return (
        <div className="containerButton"> 
            <button onClick={() => onClick(20)} className="botao1">salvar dados</button>       
        </div>
    )
}

export default Button

