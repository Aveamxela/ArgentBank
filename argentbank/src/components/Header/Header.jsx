import Logo from "../../assets/img/argentBankLogo.webp";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currentToken, logOut } from "../../Redux/reducers/authSlice";
import { resetUserData } from "../../Redux/reducers/userSlice";

export default function Header() {
    // Utilisation du hook useSelector pour obtenir le nom d'utilisateur et le token depuis le store Redux
    const userName = useSelector((state) => state.user.userName);
    const token = useSelector(currentToken);
    // Utilisation du hook useDispatch pour obtenir la fonction dispatch pour effectuer des actions Redux
    const dispatch = useDispatch();

    // Fonction pour réinitialiser les données de l'utilisateur et se déconnecter
    const resetData = () => {
        // Déclenche l'action logOut pour réinitialiser le token
        dispatch(logOut());
        // Déclenche l'action resetUserData pour réinitialiser les données de l'utilisateur
        dispatch(resetUserData());
    };
    return (
        <nav className="main-nav">
            <Link className="link" to="/">
                <img className="image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {!token ? (
                <Link className="link item" to="./signin">
                    <BiSolidUserCircle className="iconUser" />
                    Sign In
                </Link>
            ) : (
                <div className="header-profile">
                    <Link className="link item" to="/user">
                        <BiSolidUserCircle className="iconUser" />
                        <p>{userName}</p>
                    </Link>
                    <Link className="link item" to="/" onClick={resetData}>
                        <FaSignOutAlt className="iconSignOut" />
                        Sign Out
                    </Link>
                </div>
            )}
        </nav>
    );
}
