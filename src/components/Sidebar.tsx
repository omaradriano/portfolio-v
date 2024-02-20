import { Link, Outlet } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Icon from './Icon';

interface SidebarProps {
    visible: boolean
}

const Sidebar: React.FC<SidebarProps> = ({visible}) => {
    return (
        <>
            <div className="sidebar">
                <ul id='paths'>
                    <Link to="/">
                        <Icon icon='home' customIconClassName='color-light'></Icon>
                        <li>Home</li>
                    </Link>
                    <Link to="/profile">
                        <Icon icon='person' customIconClassName='color-light'></Icon>
                        <li>Profile</li>
                    </Link>
                    <Link to="/apps">
                        <Icon icon='apps' customIconClassName='color-light'></Icon>
                        <li>Apps</li>
                    </Link>
                    <div className='signuplogin'>
                        <Link to="/signup">
                            <Icon icon='app_registration' customIconClassName='color-light'></Icon>
                            <li>Sign Up</li>
                        </Link>
                        <Link to="/login">
                            <Icon icon='login' customIconClassName='color-light'></Icon>
                            <li>Sign In</li>
                        </Link>
                    </div>
                </ul>
                <Outlet />
            </div>
        </>
    )
}

export default Sidebar