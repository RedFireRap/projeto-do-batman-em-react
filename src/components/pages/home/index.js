import react from 'react'
import Header from '../../Header/header'
import './style.css';
import Video from '../../../assets/Batman.mp4';
import Cards from '../../cards/cards';
import Fundo from '../../footer/Footer';

function Home(){
    return (
        <>
            <Header /> 
            <div id='Banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>  
                        <source src={Video} />
                        seu navegador não possui suporte para vídeo
                    </video>
                
                    <div id='sinopse'>
                        <p className='descricao'>
                            Após dois anos espreitando as ruas como Batman, 
                            Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. 
                            Com poucos aliados confiáveis, o vigilante solitário
                            se estabelece como a personificação da vingança para a população.
                        </p>
                        <button className='button'>Comprar ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Fundo />
        </>
    )
}

export default Home;