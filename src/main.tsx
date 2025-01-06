import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

const isProdaction = process.env.NODE_ENV === 'production';
console.log(isProdaction);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/price-monitoring-website/' : '/'}>
            <App />
        </BrowserRouter>
    </StrictMode>
);
