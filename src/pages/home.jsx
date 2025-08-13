import iconChat from '../assets/images/icon-chat.png';
import iconMoney from '../assets/images/icon-money.png';
import iconSecurity from '../assets/images/icon-security.png';

export default function Home(){
    
    return(
        <main>
            <div className="hero">
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
                <div className="features__item">
                    <img src={iconChat} alt="Chat Icon" className="features__item-icon" />
                    <h3 className="features__item-title">You are our #1 priority</h3>
                    <p className='features__item-text'>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>
                <div className="features__item">
                    <img src={iconMoney} alt="Money Icon" className="feature__item-icon" />
                    <h3 className="features__item-title">More savings means higher rates</h3>
                    <p className='features__item-text'>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>
                <div className="features__item">
                    <img src={iconSecurity} alt="Security Icon" className="feature__item-icon" />
                    <h3 className="features__item-title">Security you can trust</h3>
                    <p className='features__item-text'>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
        </main>
    )
}