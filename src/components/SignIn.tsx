import { useContext, useState } from 'react';
import Icon from './Icon';
// import MessageToast from './Toast';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import launchToast from '../utils/launchToast';
import AuthContext from '../utils/AuthContext';
const SignIn: React.FC = () => {

    const [_user, setUser] = useContext(AuthContext)

    const navigate = useNavigate()

    interface Login {
        email: string,
        password: string
    }

    const [data, setData] = useState<Login>({
        email: "",
        password: ""
    })

    function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    async function login() {
        fetch('http://127.0.0.1:3001/login', options)
            .then(res => {
                return res.json()
            }).then((res) => {
                if (!res.token) {
                    launchToast({mode: 'error', message: res.message})
                } else {
                    console.log(res);
                    localStorage.setItem('token', res.token)
                    setUser(res.data)
                    launchToast({mode: 'success', message: res.message})
                    navigate("/")
                }
                console.log(res);
            })
    }
    return (
        <>
            <div className="signin">
                <h1 className='text-light'>Login</h1>
                <h5 className='text-light'>Bienvenido de nuevo :D</h5>

                <a className='auth__btn auth__signin'>
                    <Icon icon='add_link' />
                    <p className='text-light'>Login with google</p>
                </a>

                <p className='hr'>or login with email</p>

                <div className="inputContainer">
                    <label className='text-light' htmlFor="email">Email</label>
                    <input onChange={handleForm} type="email" name="email" id="email" placeholder='Email...' />
                </div>
                <div className="inputContainer">
                    <label className='text-light' htmlFor="password">Contrasena</label>
                    <input onChange={handleForm} type="password" name="password" id="password" placeholder='Password' />
                </div>

                <div className="signin__options">
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label className='text-light' htmlFor="remember">Recuerdame</label>
                    </div>
                    <p className='text-light'>Contrasena olvidada?</p>
                </div>

                <input className='btn btn__signin' type="button" value="Login" onClick={() => { login() }} />

                <p className='text-light'>No te has registrado? <b className='text-light'>Crea una cuenta :)</b></p>
            </div>
        </>
    )
}

export default SignIn