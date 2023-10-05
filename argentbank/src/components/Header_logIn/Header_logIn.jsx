import Logo from "../../assets/img/argentBankLogo.png";
import { BiSolidUserCircle } from "react-icons/bi";
import {FaSignOutAlt} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserData } from "../../Redux/reducers/userSlice";

export default function HeaderLogIn() {
 const userData = useSelector(getUserData);
 console.log({ userData });

 const userName = userData.payload.user.userName;
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
                    {userName}
                </Link>
                <Link className="link item" to="./">
                    <FaSignOutAlt className="iconSignOut" />
                    Sign Out
                </Link>
            </div>
        </nav>
    );
}