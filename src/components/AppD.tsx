interface AppProps {
    url: string
    title: string,
    tags: Array<string>
}

const DevelopedApp: React.FC<AppProps> = ({ url, title, tags }) => {

    return (
        <>
            <div className="app_card">
                <div className="app_card__img" style={{ backgroundImage: `url(${url})` }}></div>
                <h3 className='text-light'>{title}</h3>
                <div className="app_card__languages">
                    {tags.map(elem => {
                        return <span key={elem} className="tag">{elem}</span>
                    })}
                </div>
            </div>
        </>
    )
}

export default DevelopedApp