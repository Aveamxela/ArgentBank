import Logo from "../../assets/img/argentBankLogo.png";
import { BiSolidUserCircle } from "react-icons/bi";
import {FaSignOutAlt} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currentToken, logOut } from "../../Redux/reducers/authSlice";

export default function HeaderLogIn() {

 const userName = useSelector((state)=> state.user.userName)
 console.log(userName)
const token = useSelector(currentToken);
console.log({token})
 const dispatch = useDispatch();

 const resetData = () => {
    dispatch(logOut())
 }

    return (
        <nav className="main-nav">
            {/* Vérifier routes */}
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
                    <Link className="link item" to="/">
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