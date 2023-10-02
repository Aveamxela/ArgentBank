import Banner from "../../components/Banner/banner";
import Feature from "../../components/Feature/Feature";
import HeaderLogOut from "../../components/Header_logout/Header_logout";
import Chat from "../../assets/img/icon-chat.png";
import Money from "../../assets/img/icon-money.png";
import Security from "../../assets/img/icon-security.png";
import Footer from "../../components/Footer/Footer";


export default function Home() {
    return (
        <div>
            <HeaderLogOut />
            <main>
                <Banner />
                <section className="features">
                    <h2 class="sr-only">Features</h2>
                    <Feature
                        image={Chat}
                        altText="Chat Icon"
                        title="You are our #1 priority"
                        description="Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <Feature
                        image={Money}
                        altText="Money Icon"
                        title="More savings means higher rates"
                        description="The more you save with us, the higher your interest rate will be!"
                    />
                    <Feature
                        image={Security}
                        altText="Security Icon"
                        title="Security you can trust"
                        description="We use top of the line encryption to make sure your data and money
                        is always safe."
                    />
                </section>
            </main>
            <Footer/>
        </div>
    );
}
