import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Error404 from './404.tsx'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Error404 />
    </StrictMode>
);
