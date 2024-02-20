import githubLogo from "../assets/github-mark-white.svg"
import threadsLogo from '../assets/threads_logo_white.png'
import linkedInLogo from '../assets/linkedin-logo.svg'

const Footer = () => {
    return(
        <>
            <div className="footer">
                <p className="text-light">Mis redes</p>
                <div className="social_media">
                    <div className="social_media__github logo">
                        <a href="https://github.com/omaradriano"><img src={githubLogo} alt="Logo de github" /></a>
                    </div>
                    <div className="social_media__threads logo">
                        <a href="https://www.threads.net/@oadriano02"><img src={threadsLogo} alt="Logo de Threads" /></a>
                    </div>
                    <div className="social_media__linkedin logo">
                        <a href="https://www.linkedin.com/in/omar-adrian-1a50b215a/"><img src={linkedInLogo} alt="Logo de LinkedIn" /></a>
                    </div>
                </div>
                <button className="btn btn__contact">Contactar</button>
            </div>
        </>
    )
}

export default Footer