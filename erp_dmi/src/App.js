import './App.css';
import './Css/Stylesheet.css'
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import RequireAuth from "./Context/requireAuth";
import { UserProvider } from "./Context/userContext";
import { Navigate, Route, Routes } from "react-router-dom";

import MedicalActList from './Components/MedicalActList';
import MedicalActView from "./Components/MedicalActView";
import AppointmentScreen from "./Components/AppointmentScreen";



function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                
                <Route path={"/user/:idGr/"} element={<RequireAuth />}>
                    <Route path="*" element={<Navigate to="MedicalActList"/>} />
                    <Route path="MedicalActList" element={<MedicalActList/>} />
                    <Route path="Appointment" element={<AppointmentScreen/>} />
                    <Route path="MedicalActList/:id/form" element={<MedicalActView/>} />
                </Route>
                <Route path="*" element={<Navigate to="/signin" />} />
            </Routes>
        </UserProvider>
    );
}

export default App;
