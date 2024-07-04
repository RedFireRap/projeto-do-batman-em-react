import './header.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpg'

function Header(){
    return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none' }} to={'./'}>
                        <li>Home</li>                   
                    </Link>
                    <Link style={{textDecoration: 'none' }} to={'./Contact'}>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none' }} to={'./Fotos'}>
                        <li>fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'./Comments'}>
                        <li>Comentarios</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;