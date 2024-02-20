interface HeaderProps {
    activateSidebar: Function
}

const Header: React.FC<HeaderProps> = ({activateSidebar}) => {
    return(
        <>
            <div className="header">
                <h2 className="title">Omaradriano's portofolio</h2>
                {/* <div className="burguer-menu">
                    <div className="burguer-menu__line"></div>
                    <div className="burguer-menu__line"></div>
                    <div className="burguer-menu__line"></div>
                </div> */}
            </div>
        </>
    )
}

export default Header