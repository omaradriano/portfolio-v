import Icon from "./Icon"

const MessageToast = () => {
    return(
        <div className="toast">
            <div className="toast__header">
                <span>Estado del mensaje</span>
            </div>
            <div className="toast__body">
                <Icon icon="warning" />
                <p>Descripcion del problema</p>
            </div>
        </div>
    )
}

export default MessageToast