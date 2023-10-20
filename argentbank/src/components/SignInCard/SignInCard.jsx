import { BiSolidUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchUserLogin } from "../../Redux/fetch/fetchUserLogin";
import { logIn } from "../../Redux/reducers/authSlice";

export default function SignInCard() {
    // Local states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();
    // Utilisation du hook useNavigate pour gérer la navigation dans l'application
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let userCredentials = {
            email,
            password,
        };
        // Exécute et stocke le resultat de la fonction (fulfilled ou rejected)
        const result = await dispatch(fetchUserLogin(userCredentials));
        if (fetchUserLogin.fulfilled.match(result)) {
            // stockage du token dans le store Redux
            const token = result.payload;
            dispatch(logIn({ token }));
            if (rememberMe) {
                window.localStorage.setItem("token", token);
                window.sessionStorage.removeItem("token");
                console.log("dans local storage");
            } else {
                window.sessionStorage.setItem("token", token);
                window.localStorage.removeItem("token");
                console.log("dans session storage");
            }
            console.log("Connexion réussie, token :", token);
            // Clear the form
            setEmail("");
            setPassword("");
            setErrorMsg("");
            navigate("/user");
        } else if (fetchUserLogin.rejected.match(result)) {
            // Clear the form
            setEmail("");
            setPassword("");
            setErrorMsg("Invalid Credentials");
        }
    };

    return (
        <section className="sign-in-content">
            <BiSolidUserCircle className="sign-in-icon" />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="email"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit">
                    Sign In
                </button>
                {errorMsg && <div className="error-auth">{errorMsg}</div>}
            </form>
        </section>
    );
}