import { ToastOptions, Zoom, toast } from 'react-toastify';
// import MessageToast from './Toast';
import 'react-toastify/dist/ReactToastify.css';
import Icon from '../components/Icon';

interface LaunchToastOptions {
    mode: 'success' | 'error' | 'warning';
    message: string;
}

export default function launchToast(options: LaunchToastOptions): void {
    const toastOptions: ToastOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
    }
    let icon: JSX.Element | undefined;
    switch (options.mode) {
        case 'success':
            icon = <Icon icon="check" />;
            break;
        case 'error':
            icon = <Icon icon="error" />;
            break;
        case 'warning':
            icon = <Icon icon="warning" />;
            break;
        default:
            break;
    }

    if (icon) {
        toast[options.mode](options.message, { ...toastOptions, icon });
    }
}