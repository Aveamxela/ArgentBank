import HeaderLogIn from "../../components/Header_logIn/Header_logIn";
import Footer from "../../components/Footer/Footer"
import Account from "../../components/Account/Account";
export default function Profile(){
    // S'occuper du bouton Edit
    return (
        <div>
            <HeaderLogIn />
            <main class="main bg-dark profile">
                <div class="header">
                    <h1>
                        Welcome back
                        <br />
                        Tony Jarvis!
                    </h1>
                    <button class="edit-button">Edit Name</button>
                </div>
                <h2 class="sr-only">Accounts</h2>
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