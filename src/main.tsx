import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/js/bootstrap.bundle.min";

import 'material-icons/iconfont/material-icons.css';

import './styles/base.css'
import './styles/custom-576.css'
import './styles/custom-768.css'
import './styles/custom-992.css'
import './styles/custom-1200.css'
import './styles/custom-1400.css'

import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(<BrowserRouter><App/></BrowserRouter>)