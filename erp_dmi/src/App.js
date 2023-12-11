import './App.css';
import './Css/Stylesheet.css'
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import RequireAuth from "./Context/requireAuth";
import { UserProvider } from "./Context/userContext";
import { Navigate, Route, Routes } from "react-router-dom";

import MedicalActs from './Components/MedicalActs';
import MedicalAct from "./Components/MedicalAct";


function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                
                <Route path={"/user/:idGr/"} element={<RequireAuth />}>
                    <Route path="*" element={<Navigate to="MedicalActs"/>} />
                    <Route path="MedicalActs" element={<MedicalActs/>} />
                    <Route path="MedicalActs/:id/form" element={<MedicalAct/>} />
                </Route>
                <Route path="*" element={<Navigate to="/signin" />} />
            </Routes>
        </UserProvider>
    );
}

export default App;
