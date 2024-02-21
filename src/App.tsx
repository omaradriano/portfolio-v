import Header from "./components/Header"
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Projects from "./components/Projects";
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "./utils/AuthContext";
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

  const [user, setUser] = useState('username')

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}`,
    },
  };

  useEffect(() => {
    fetch('http://localhost:3001/verifycredentials', options)
      .then(res => {
        console.log('Debug');
        return res.json()
      })
      .then((res) => {
        if (res.data) {
          setUser(res.data)
        }
      })
  }, [])

  return (
    <>
      <div className="layout">
        <AuthContext.Provider value={[user, setUser]}>
          <Header activateSidebar={toggleSidebar} />
          <Sidebar visible={visibleSidebar} />
          <Body />
          <Projects />
          <Footer />
        </AuthContext.Provider>
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