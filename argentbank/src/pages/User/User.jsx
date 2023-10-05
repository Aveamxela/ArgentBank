import HeaderLogIn from "../../components/Header_logIn/Header_logIn";
import Footer from "../../components/Footer/Footer";
import Account from "../../components/Account/Account";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../Redux/fetch/fetchUserData";
import EditUserData from "../../components/UserData/EditUserData";
import { currentToken } from "../../Redux/reducers/authSlice";
import { getUserData } from "../../Redux/reducers/userSlice";
import {useEffect} from "react";

export default function User() {
    const dispatch = useDispatch();
    const token = useSelector(currentToken);
    const userData = useSelector(getUserData)
    const firstName = userData.payload.user.firstName;
    const lastName = userData.payload.user.lastName;

useEffect(() => {
    dispatch(fetchUserData(token));
}, [dispatch, token]);

    return (
        <div>
            <HeaderLogIn />
            <main className="main bg-dark profile">
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {firstName} {lastName} !
                    </h1>
                    <EditUserData />
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                />
                <Account
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                />
                <Account
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                />
            </main>
            <Footer />
        </div>
    );
}
