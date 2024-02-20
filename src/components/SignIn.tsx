import Icon from './Icon';
const SignIn = () => {
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
                    <input type="email" name="email" id="email" placeholder='Email...'/>
                </div>
                <div className="inputContainer">
                    <label className='text-light' htmlFor="password">Contrasena</label>
                    <input type="password" name="password" id="password" placeholder='Password'/>
                </div>

                <div className="signin__options">
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label className='text-light' htmlFor="remember">Recuerdame</label>
                    </div>
                    <p className='text-light'>Contrasena olvidada?</p>
                </div>

                <input className='btn btn__signin' type="button" value="Login" />

                <p className='text-light'>No te has registrado? <b className='text-light'>Crea una cuenta :)</b></p>
            </div>
        </>
    )
}

export default SignIn