import logo from './logo.svg';
import './App.css';
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import TestDestination from "./Components/TestDestination";
import RequireAuth from "./Context/requireAuth";
//import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider, useUser } from "./Context/userContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
    // const queryClient = new QueryClient();
    return (
        //<QueryClientProvider client={queryClient}>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path={"/home/"} element={<RequireAuth />}>
                            <Route path="test" element={<TestDestination />} />
                            <Route path="*" element={<Navigate to="/home/test" />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/signin" />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        //</QueryClientProvider>
    );
    // return (
    //     <div className="App">
    //         <header className="App-header">
    //             <img src={logo} className="App-logo" alt="logo"/>
    //             <p>
    //                 Edit <code>src/App.js</code> and save to reload.
    //             </p>
    //             <a
    //                 className="App-link"
    //                 href="https://reactjs.org"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 Learn React
    //             </a>
    //         </header>
    //     </div>
    // );
}

export default App;
