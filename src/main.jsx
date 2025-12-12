import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TopBar from './components/TopBar.jsx'
import Home from '/src/pages/Home.jsx'
import Member from '/src/pages/Member.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";


createRoot(document.getElementById('root')).render(
    <StrictMode>
    <BrowserRouter>
    <TopBar/>
    <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/member" element={<Member/>}/>
    </Routes>
    </BrowserRouter>
    </StrictMode>
);
