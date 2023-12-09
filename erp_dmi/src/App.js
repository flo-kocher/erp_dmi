import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import MedicalActs from './Components/MedicalActs';
import MedicalAct from "./Components/MedicalAct";

import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
//import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider, useUser } from "./Context/userContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


function App() {
    return (

        <div className="App">
            <UserProvider>
                {/* <BrowserRouter> */}
                    <Routes>
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<Navigate to="/signin" />} />
                    </Routes>
                {/* </BrowserRouter> */}
            </UserProvider>
            {/* <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pages/MedicalActs" element={<MedicalActs/>} />
                <Route path="/pages/MedicalActs/:id/form" element={<MedicalAct/>} />
            </Routes> */}
        </div>
    );
}

export default App;
