import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextProvider } from './Context/Context.jsx';
import { FlashContextProvider } from './Context/FlashContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
    <FlashContextProvider>
    <App />
    </FlashContextProvider>
    </ContextProvider>
  </BrowserRouter>,
)
