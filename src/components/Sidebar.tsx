import { Link, Outlet, useNavigate } from 'react-router-dom'
import Icon from './Icon';
import { useContext } from 'react';
import AuthContext from '../utils/AuthContext';

interface SidebarProps {
    visible: boolean
}

const Sidebar: React.FC<SidebarProps> = () => {

    const { data, setData } = useContext(AuthContext)

    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem('token')
        setData({ status: "offline", auth: false, data: { user: '' } })
        navigate("/")
    }

    return (
        <>
            <div className="sidebar">
                <ul id='paths'>
                    <Link to="/">
                        <Icon icon='home' customIconClassName='color-light'></Icon>
                        <li>Home</li>
                    </Link>
                    {data.auth === false ? (
                        null
                    ) : (
                        <Link to="/profile">
                            <Icon icon='person' customIconClassName='color-light'></Icon>
                            <li>Profile</li>
                        </Link>
                    )}
                    <Link to="/apps">
                        <Icon icon='apps' customIconClassName='color-light'></Icon>
                        <li>Apps</li>
                    </Link>
                    <div className='signuplogin'>
                        {data.auth === false ? (
                            <>
                                <Link to="/signup">
                                    <Icon icon='app_registration' customIconClassName='color-light'></Icon>
                                    <li>Sign Up</li>
                                </Link>
                                <Link to="/login">
                                    <Icon icon='login' customIconClassName='color-light'></Icon>
                                    <li>Sign In</li>
                                </Link>
                            </>
                        ) : (
                            <Link to="/" onClick={()=>logout()}>
                                <Icon icon='logout' customIconClassName='color-light'></Icon>
                                <li>Logout</li>
                            </Link>
                        )}
                    </div>
                </ul>
                <Outlet />
            </div>
        </>
    )
}

export default Sidebar