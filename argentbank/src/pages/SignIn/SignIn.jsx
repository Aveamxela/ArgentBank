import Footer from "../../components/Footer/Footer";
import HeaderLogIn from "../../components/Header_logIn/Header_logIn";
import SignInCard from "../../components/SignInCard/SignInCard";

export default function SignIn() {
    return (
        <div>
            <HeaderLogIn />
                <main className="main bg-dark">
                    <SignInCard/>
                </main>
            <Footer/>
        </div>
    );
}
