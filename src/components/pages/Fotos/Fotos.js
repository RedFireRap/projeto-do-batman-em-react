import reac from 'react'
import './Fotos.css'
import Header from '../../Header/header';
import Footer from '../../footer/Footer'
import logo from '../../../assets/logo.jpg'

function Fotos(){
    return (
        <>
            <Header/>
            <div className='atores-container'>
                <div className='cards-content'>
                    <div class="cards baner-1"></div>
                    <div class="cards baner-2"></div>
                    <div class="cards baner-3"></div>
                    <div class="cards baner-4"></div>
                    <div class="cards baner-5"></div>
                    <div class="cards baner-6"></div>
                </div>
            </div>
            <Footer />
            
        </>
    )
}

export default Fotos;