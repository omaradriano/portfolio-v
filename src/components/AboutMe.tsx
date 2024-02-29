import jslogo from '../assets/jslogo.png'
import tslogo from '../assets/ts-logo-128.svg'
import webpacklogo from '../assets/webpacklogo.svg'
import csslogo from '../assets/cssloog.png'
import htmllogo from '../assets/htmllogo.png'
import reactlogo from '../assets/reactlogo.svg'
import mongologo from '../assets/mongologo.svg'
import expresslogo from '../assets/express-js-seeklogo.svg'

import me from '../assets/me.jpg'
const AboutMe = () => {

    return (
        <>
            <div className="aboutme">
                <span className='advice text-light'>Sitio en desarrollo. Aun no hay conexion al backend.</span>
                <h1 className="text-light fw-light align-self-center">About the Developer</h1>
                <div className='aboutme__ppalInfo'>
                    <img className='img body__img' src={me} alt="Imagen de mi xd" />
                    <div className="aboutme__ppalInfo__data">
                        <p className='text-light'>Omar Adrian Acosta Santiago</p>
                        <h5 className='text-light'>Ingeniero en sistemas</h5>
                    </div>
                </div>
                <p className='text-light fs-5'>I'm pretty new at the programming things, i've been learning for some time stuff like Javascript, Webpack, NodeJs, the basics (HTML,CSS) and my most recently passion, Typescript with ReactJs. I'm looking for some oportunities in the tech company and learn a lot with a team that want adopt me :)</p>
                <div className="technologies">
                    <img src={jslogo} alt="Javascript logo" />
                    <img src={tslogo} alt="Typescript logo" />
                    <img src={webpacklogo} alt="Webpack logo" />
                    <img src={csslogo} alt="CSS logo" />
                    <img src={htmllogo} alt="HTML5 logo" />
                    <img src={reactlogo} alt="ReactJs logo" />
                    <img src={mongologo} alt="MongoDB logo" />
                    <img src={expresslogo} alt="ExpressJs logo" />
                </div>
            </div>
        </>
    )
}

export default AboutMe