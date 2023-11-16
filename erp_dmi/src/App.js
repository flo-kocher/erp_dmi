import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './Components/Home';
import MedicalActs from './Components/MedicalActs';
import MedicalAct from "./Components/MedicalAct";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pages/MedicalActs" element={<MedicalActs/>} />
                <Route path="/pages/MedicalActs/:id/form" element={<MedicalAct/>} />
            </Routes>
        </div>
    );
}

export default App;
