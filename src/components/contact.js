import '../styles/contactpageStyle.css'
import AnimateOnScroll from './animate'
import MapMarker from './createMap'

export default function Contact(props) {

    return (
        <section className="contactContainer">
           
            <form className="contactForm" method='POST' name='contact'>
            <input type="hidden" name="form-name" value="contact" />
                <div className="contactTitle">
                    Please fill out the form below and we will get in touch with you as soon as possible. Thanks!
                </div>

                <div className='row'>
                    <label>Your Name (required)
                    <input
                        className='contactInput'
                        type='text'
                        name='name'
                        placeholder='Name...'
                        required>
                    </input>
                    </label>
                    <label>Your Email (required)
                    <input
                        className='contactInput'
                        type='email'
                        name='email'
                        placeholder='Email...'>
                    </input>
                    </label>
                </div>

                <label>Your Message
                    <textarea
                        className='contactMessage'
                        name='message'
                        required>
                    </textarea>
                </label>
                <button
                    type="submit"
                    className="submitButton">Submit
                </button>
            </form>
            <AnimateOnScroll
                children={
                    <div className='infoContainer'>
                        <h2>Contact Information</h2>
                        <div className='address'>1804 E Southern Ave Tempe, AZ 85282</div>
                        <div className='phoneNumber'>(480) 730-2730</div>
                        <a className="email" href="mailto:otherwides@yahoo.com">Email Us</a>
                    </div>
                }
                reappear={true} 
                threshold={.5}
                right={true}
            />
            <AnimateOnScroll
                children={
                    <MapMarker />
                }
                reappear={true} 
                threshold={.5}
                right={true}
            />
        </section>
    )
}