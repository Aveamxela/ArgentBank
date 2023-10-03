import { BiSolidUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
// Pas terminé 
export default function SignInCard() {
    return (
        <section className="sign-in-content">
            <BiSolidUserCircle className="sign-in-icon" />
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <Link className="link item" to="./profile">Sign In</Link>
                <button className="sign-in-button" type="submit">
                    Sign In
                </button>
            </form>
        </section>
    );
}
