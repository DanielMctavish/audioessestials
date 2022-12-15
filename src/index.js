import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Acousticguitar from "./pages/Acousticguitar"
import Bass from "./pages/Bass"
import Daws from "./pages/Daws"
import Drumskit from "./pages/Drumskit"
import Guitar from "./pages/Guitarfx"
import Kontakt from "./pages/Kontakt"
import Linux from "./pages/Linux"
import Mac from "./pages/MAC"
import Orchestra from "./pages/Orchestra"
import Percussion from "./pages/Percussion"
import Piano from "./pages/Pianos"
import Pluguins from "./pages/Pluguins"
import Windows from "./pages/Windows"
import Worldmusic from "./pages/Worldmusic"
import PainelItem from './pages/PainelItem';
import Synth from './pages/Synth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/acousticguitar" element={<Acousticguitar />} />
            <Route path="/bass" element={<Bass />} />
            <Route path="/daws" element={<Daws />} />
            <Route path="/drumskit" element={<Drumskit />} />
            <Route path="/guitarfx" element={<Guitar />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/linux" element={<Linux />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/orchestra" element={<Orchestra />} />
            <Route path="/percussion" element={<Percussion />} />
            <Route path="/piano" element={<Piano />} />
            <Route path="/pluguins" element={<Pluguins />} />
            <Route path="/windows" element={<Windows />} />
            <Route path="/worldmusic" element={<Worldmusic />} />
            <Route path="/synth" element={<Synth/>} />
            <Route path="/painel/:id" element={<PainelItem/>} />
        </Routes>
    </Router>
);



