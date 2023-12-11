import logo from './logo.svg';
import './App.css';
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import TestDestination from "./Components/TestDestination";
import RequireAuth from "./Context/requireAuth";
//import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider, useUser } from "./Context/userContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from './Components/Home';
import MedicalActs from './Components/MedicalActs';
import MedicalAct from "./Components/MedicalAct";


function App() {
    // const queryClient = new QueryClient();
    return (
        //<QueryClientProvider client={queryClient}>
            <UserProvider>
                {/* <BrowserRouter> */}
                    <Routes>
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        
                        <Route path={"/userConnected/"} element={<RequireAuth />}>
                            <Route path="home" element={<Home />} />
                            <Route path="*" element={<Navigate to="/home" />} />
                            <Route path="pages/MedicalActs" element={<MedicalActs/>} />
                            <Route path="pages/MedicalActs/:id/form" element={<MedicalAct/>} />
                        </Route>
                        <Route path="*" element={<Navigate to="/signin" />} />
                    </Routes>
                {/* </BrowserRouter> */}
            </UserProvider>
        //</QueryClientProvider>
    );
}

export default App;
