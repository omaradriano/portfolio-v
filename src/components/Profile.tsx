import { useContext } from 'react'
import portrait from '../assets/portada.jpg'
import AuthContext from '../utils/AuthContext'

const Profile = () => {

    const {data} = useContext(AuthContext)

    console.log(data);

    return (
        <>
            <div className="profile">
                <div className="main_info">
                    <div className="profile__portrait">
                        <img src={portrait} alt="" />
                    </div>
                    <div className="profile__info">
                        <img src="https://i.pravatar.cc/300" alt="Imagen de perfil" />  
                        <h2 className='text-light'>@{data.auth === false && data ? 'Sin sesion' : data.data.user}</h2>
                        <p className='text-light'>Nacionalidad</p>  
                        <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi labore illo blanditiis exercitationem inventore deleniti ab adipisci! Est, hic facilis.</p>
                    </div>
                    <div className="profile__social_media">
                        <p className="text-light">Stats (Pending)</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile