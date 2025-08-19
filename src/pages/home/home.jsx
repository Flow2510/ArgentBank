import Card from "../../components/card/card";
import iconChat from "../../assets/images/icon-chat.png"
import iconMoney from "../../assets/images/icon-money.png"
import iconSecurity from "../../assets/images/icon-security.png"
import introBackground from "../../assets/images/bank-tree.jpeg"
import "./home.scss"

export default function Home(){
    return(
        <main>
            <section className="intro">
                <img className="intro__background" src={introBackground} alt="" />
                <div className="intro__content">
                    <h2 className="intro__content-title">No fees.</h2>
                    <h2 className="intro__content-title">No minimum deposit.</h2>
                    <h2 className="intro__content-title">High interest rates</h2>
                    <p className="intro__content-text">Open a savings account with Argent Bank today!</p>
                </div>
            </section>
            <section className="info">
                <Card 
                    source={iconChat}
                    alt="an icon of a chatbox"
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <Card 
                    source={iconMoney}
                    alt="an icon of a banknote"
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <Card 
                    source={iconSecurity}
                    alt="Shield icon representing security"
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money is always safe."
                />
            </section>
        </main>
    )
}