import '../styles/contactpageStyle.css'

export default function Contact(props) {


    return (
        <section className="contactContainer">
            <div className="contactTitle">
                Please fill out the form below and we will get in touch with you as soon as possible. Thanks!
            </div>
            <form className="contactForm">
                <label>Your Name (required)
                <input
                    type='text'
                    name='name'
                    placeholder='Name...'
                    required
                />
                </label>
                <label>Your Email
                <input
                    type='email'
                    name='email'
                    placeholder='Email...'
                />
                </label>
                <label>Your Phone Number
                  <input
                    type='phone'
                    name='phone'
                    placeholder='Phone Number...'
                />
                </label>
                <label>Your Message (required)
                  <input
                    type='textarea'
                    name='message'
                    required
                />
                </label>
                <button
                    type="submit"
                    className="submitButton"
                >Submit</button>
                


            </form>
            
        </section>
    )
}