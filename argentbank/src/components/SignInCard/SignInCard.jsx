import { BiSolidUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchUserLogin } from "../../Redux/fetch/fetchUserLogin";
import { logIn } from "../../Redux/reducers/authSlice";

// Pas terminé

export default function SignInCard() {
    // States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // Redux states
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let userCredentials = {
            email,
            password,
        };

        // stocke le resultat de la fonction donc fulfilled ou rejected
        const result = await dispatch(fetchUserLogin(userCredentials));
        // vérifie si le resultat correspond
        if (fetchUserLogin.fulfilled.match(result)) {
            // authentification réussie donc on stocke le token
            const token = result.payload;
            dispatch(logIn({ token }));

            console.log("Connexion réussie, token :", token);
            // Clear the form
            setEmail("");
            setPassword("");
            setErrorMsg("");

            navigate("/signin/user");
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
                    {/* changer type text en email + ajout requiered + value + onChange*/}
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
                    <input type="checkbox" id="remember-me" />
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
