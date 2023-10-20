import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SignInCard from "../../components/SignInCard/SignInCard";

export default function SignIn() {
    return (
        <div>
            <Header />
                <main className="main bg-dark">
                    <SignInCard/>
                </main>
            <Footer/>
        </div>
    );
}
