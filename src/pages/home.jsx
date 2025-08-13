import iconChat from '../assets/images/icon-chat.png';
import iconMoney from '../assets/images/icon-money.png';
import iconSecurity from '../assets/images/icon-security.png';
import heroBackground from '../assets/images/bank-tree.jpeg';
import Card from '../components/card/card';
import './home.scss'

export default function Home(){
    
    return(
        <div className='home'>
            <div className="hero">
                <img src={heroBackground} alt="" className='hero__background'/>
                <section className="hero__content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="hero__subtitle">No fees.</p>
                    <p className="hero__subtitle">No minimum deposit.</p>
                    <p className="hero__subtitle">High interest rates.</p>
                    <p className="hero__text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Card 
                    image={iconChat} 
                    alt="Chat icon" 
                    title="You are our #1 priority" 
                    text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <Card 
                    image={iconMoney} 
                    alt="Money icon" 
                    title="More savings means higher rates" 
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <Card 
                    image={iconSecurity} 
                    alt="Security icon" 
                    title="Security you can trust" 
                    text="We use top of the line encryption to make sure your data and money is always safe."
                />
            </section>
        </div>
    )
}