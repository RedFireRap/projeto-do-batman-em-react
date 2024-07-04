import react, { useContext } from 'react'
import { UserContext } from '../../contexts/useContext';

function Profile(){
    const {login} = useContext(UserContext);

    return (
        <div>
            {login? 'dados do usuário' : 'faça o seu login para ter acesso'}
        </div>
    )
}

export default Profile;