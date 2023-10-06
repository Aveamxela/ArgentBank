import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User"
import Error from "./pages/Error/Error";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { currentToken } from "./Redux/reducers/authSlice";
import { Navigate } from "react-router-dom";

function App() {
        const token = useSelector(currentToken);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/user" element={token ? <User /> : <Navigate to="/sign-in" />}
                    />
                    {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
