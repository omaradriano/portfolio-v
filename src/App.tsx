import Header from "./components/Header"
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Projects from "./components/Projects";
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "./utils/AuthContext";

import { User } from '../src/types/user.types'
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

  //State que almacena los datos del usuario dependiendo de la sesion
  const [data, setData] = useState<User | null>({ status: "offline", auth: false })

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}`,
    },
  };

  //Endpoint para verificar las credenciales activa, esta solucion es provisional, se debe de implementar un middleware
  useEffect(() => {
    fetch('http://localhost:3001/verifycredentials', options)
      .then(res => {
        return res.json()
      })
      .then((res: any) => {
        if (res.data) {
          //Si hay informacion de usuario, carga los datos al estado y cargalo a Context
          setData(() => {
            return { status: "online", auth: true, data: {...res.data} }
          })
          // { status: "online", auth: true, data: {...res.data} }
        }else{
          console.log('Sin sesion activa');
          setData({ status: "offline", auth: false, data: {user: ''} })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className="layout">
        {/* Con el provider agregamos la informacion que traemos de las credenciales si estan activas, en caso contrario se trae la informacion por defecto */}
        <AuthContext.Provider value={{ data, setData }}>
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