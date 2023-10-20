import ImgError from "../../assets/img/error.webp";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Error() {
    return (
        <div>
            <Header />
            <main className="bg center">
                <img src={ImgError} alt="error 404" className="img-error" />
                <h1>
                    {" "}
                    Oops ! This page was removed, renamed or doesn't exist.
                </h1>
                <Link className="button-home" to="/">
                    Go Home
                </Link>
            </main>
        </div>
    );
}