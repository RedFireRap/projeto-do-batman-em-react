import reac from 'react'
import './contact.css'
import Header from '../../Header/header';
import Footer from '../../footer/Footer'

function Contact(){
    return (  
        <>
            <Header />
            <div className='section'>
                <section>
                    <form id='form'>
                        <h1>Inicio</h1>
                        <div className='inputbox'>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type='email' required />
                            <label for="">Usúario</label> 
                        </div>
                        <div className='inputbox'>
                            <ion-icon name='lock-closed-outline'></ion-icon>
                            <input type='password' required />
                            <label for="">Senha</label>
                        </div>
                        <div className='forget'>
                            <label for=""> <imput type="checkbox"/>lembrar</label>
                            <a href='#'>Esqueci a Senha</a>
                        </div>
                        <button>Iniciar</button>
                        <div className='registrar'></div>
                        <p>Não possui login <a href='#'>Registrar</a></p>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Contact;