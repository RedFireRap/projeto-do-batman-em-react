import React from "react";
import './comments.css';
import Header from "../../Header/header";
import Fundo from '../../footer/Footer'
import Robert from '../../../assets/robert.jpg';
import Zoe from '../../../assets/zoe-kravitz.jpg'
import Paul from '../../../assets/paul dano.jpg'
import Jeffrey from '../../../assets/Jeffrey.jpg'
import Alfred from '../../../assets/alfred.jpg'
import Colin from '../../../assets/colin farrell.jpg'

function Comments(){
    return (
        <div>
            <Header />
            <div id="fotos">
                <img id="atores" src={Robert} alt="Robert pattinson" />
                    <p id="texto"> <strong className="nomes">Robert Pattinson </strong> 
                        Na verdade, Pattinson disse que The Batman foi o primeiro filme de quadrinhos
                        para o qual ele fez audição. Isso porque o ator é especialmente atraído pelo personagem,
                        e diz que ele sempre teve um apego diferente com os filmes do Batman em comparação
                        com outros filmes de super-heróis.
                    </p>

                <img id="atores" src={Zoe} alt="Zoe-kravitz" />
                    <p id="texto"> <strong className="nomes"> Zoë Kravitz </strong> 
                        A atriz Zoë Kravitz, de 33 anos, que integra o elenco de "The Batman", 
                        ao interpretar a Mulher-Gato, revelou que já perdeu papel em um filme anterior do Homem-Morcego por ser uma 
                        "mulher de cor", 
                        expressão que é considerada racista.
                    </p>

                <img id="atores" src={Paul} alt="Paul Dano Ator" />
                    <p id="texto"> <strong className="nomes"> Paul Dano </strong>
                        O Charada do Paul Dano traz uma brutalidade jamais vista pelo personagem, 
                        algo a la Jogos Mortais dentro de uma mente perturbadora. 
                        Ele é muito diferente dos quadrinhos. 
                        O próprio Jim Carrey provou que o lado caricato não era a melhor escolha para o vilão. 
                        Ser autoral não é o problema.
                    </p>

                <img id="atores" src={Jeffrey} alt="Jeffrey-Wright" />
                    <p id="texto"> <strong className="nomes"> Jeffrey wright </strong>
                        Ator afirmou que seu personagem fará bem mais que só acender o Bat-sinal!
                        The Batman promete apresentar Gotham e seus grandes 
                        personagens sob um olhar diferente do que vimos nos cinemas até agora.
                    </p>

                    <img id="atores" src={Alfred} alt="Andy Serkis" />
                        <p id="texto"> <strong className="nomes"> Andy Serkis </strong> 
                            O roteiro de Batman 2 está em desenvolvimento e Andy Serkis, 
                            que interpreta Alfred no filme de 2022, 
                            pode contribuir com algumas ideias interessantes. 
                            Em entrevista ao Screen Rant, o ator revelou que gostaria de ver Sandman, 
                            personagem de Neil Gaiman, na continuação.
                        </p>

                    <img id="atores" src={Colin} alt="Colin Farrell" />
                        <p id="texto"> <strong className="nomes"> Colin Farrell </strong>
                            Colin Farrell ainda disse que o filme tem uma visão única da mitologia 
                            do Cavaleiro das Trevas,
                            e que Reeves tem cuidadosamente elaborado sua própria versão de Gotham City
                            que agradará os fãs. Por fim, o intérprete do Pinguim 
                            declarou que o maquiador Mike Marino ajudou a definir o personagem.
                        </p>      
            </div>
            <Fundo />           
        </div>
    )
}

export default Comments;