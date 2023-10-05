import Footer from "../../components/Footer/Footer";
import HeaderLogOut from "../../components/Header_logout/Header_logout";
import SignInCard from "../../components/SignInCard/SignInCard";

export default function SignIn() {
    return (
        <div>
            <HeaderLogOut />
                <main className="main bg-dark">
                    <SignInCard/>
                </main>
            <Footer/>
        </div>
    );
}
