type MI = 'material-icons'
interface Icon {
    icon:string,
    readonly className?: MI
    customIconClassName?: string
}

const Icon: React.FC<Icon> = ({icon, className='material-icons', customIconClassName=''}) => {
    let style = `${className} ${customIconClassName}`
    return(
        <>
            <span className={style}>{icon}</span>
        </>
    )
}

export default Icon