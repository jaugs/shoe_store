import '../styles/footerStyle.css'
import facebookLogo from '../brands/facebook_icon.svg'
import twitterLogo from '../brands/twitter-logo.svg'
export default function Footer() {


    return (
        <section className="footer">
            <div className="addressContainer">
                <h3>Contact</h3>
                <p>1804 E Southern Ave</p>
                <p>Tempe, AZ 85282</p>
                <p>(480) 730-2730</p>
                <a className="emailLink" href="mailto:otherwides@yahoo.com">Email</a>
            </div>
            <div className='hoursContainer'>
                <h3>Store Hours</h3>
                <div className='hours'>
                    <p>Monday: 10am-5pm</p>
                    <p>Tuesday: 10am-5pm</p>
                    <p>Wednesday: 10am-5pm</p>
                    <p>Thursday: 10am-5pm</p>
                    <p>Friday: 10am-5pm</p>
                    <p>Saturday: 10am-5pm</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
            <div className="socialContainer">
                <h3>Follow Us </h3>
                <p>Keep up to date on any special offers, promotions and events!</p>
                <div className='socialIcons'>
                    <a className='socialLink' href='https://www.facebook.com/OtherWideShoes/'>
                        <img className='socialMediaLogo' src={facebookLogo} alt='FaceBook link'></img>
                    </a>
                    <a className='socialLink' href='https://www.facebook.com/OtherWideShoes/'>
                        <img className='socialMediaLogo' src={twitterLogo} alt='Twitter link'></img>
                    </a>
                </div>
            </div>
          

        </section>
    )
}