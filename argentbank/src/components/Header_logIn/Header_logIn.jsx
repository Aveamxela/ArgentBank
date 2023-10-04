import Logo from "../../assets/img/argentBankLogo.png";
import { BiSolidUserCircle } from "react-icons/bi";
import {FaSignOutAlt} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeaderLogIn() {
    return (
        <nav className="main-nav">
            {/* Vérifier routes */}
            <Link className="link" to="./">
                <img className="image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className="header-profile">
                <Link className="link item" to="./">
                    <BiSolidUserCircle className="iconUser" />
                    Nom
                </Link>
                <Link className="link item" to="./">
                    <FaSignOutAlt className="iconSignOut" />
                    Sign Out
                </Link>
            </div>
        </nav>
    );
}