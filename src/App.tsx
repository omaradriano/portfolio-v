import Header from "./components/Header"
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Projects from "./components/Projects";
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

    const [visibleSidebar, setVisibleSidebar] = useState<boolean>(false)

    useEffect(() => {
        let user = window.navigator
        // console.log(user);
        console.log(user.userAgent);
    }, [])

    function toggleSidebar() {
        setVisibleSidebar(!visibleSidebar)
    }

    return (
        <>
            <div className="layout">
                <Header activateSidebar={toggleSidebar} />
                <Sidebar visible={visibleSidebar} />
                <Body />
                <Projects />
                <Footer />
            </div>
            <ToastContainer 
                stacked
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
        </>
    )
}

export default App