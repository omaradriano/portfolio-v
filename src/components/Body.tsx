
import { Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Profile from './Profile';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const Body: React.FC = () => {
    
    return (
        <>
            <div className="body">
                <Routes>
                    <Route path='/' element={<AboutMe />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/apps' element={<><h1>Games</h1></>} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<SignIn />} />
                </Routes>
                {/* <MessageToast /> */}
            </div>
        </>
    )
}

export default Body