interface HeaderProps {
    activateSidebar: Function
}

const Header: React.FC<HeaderProps> = () => {
    return(
        <>
            <div className="header">
                <h2 className="title">Omaradriano's portofolio</h2>
            </div>
        </>
    )
}

export default Header