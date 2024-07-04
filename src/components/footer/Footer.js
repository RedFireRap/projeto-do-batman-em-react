import React from "react";
import './Footer.css'
import Logo from '../../assets/logo.jpg'

function Fundo() {
    return (
        <div id="Fundo-container" >
            <img id="logo" src={Logo}/>
            <span> Todos os direitos reservados  ©  </span>
            <span> Desenvolvido Por: <strong id="meunome"> Paulo Henrique </strong> </span>
        </div>
    )
}

export default Fundo;