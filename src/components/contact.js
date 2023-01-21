

export default function Contact(props) {


    return (
        <div className="contactContainer">
            <form className="contactForm">
                <label>Contact Us!</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Name...'
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email...'
                />
                  <input
                    type='phone'
                    name='phone'
                    placeholder='Phone Number...'
                />
                  <input
                    type='text'
                    name='message'
                    placeholder='Message...'
                />
                <button
                    type="submit"
                    className="submitButton"
                >Submit</button>
                


            </form>


        </div>
    )
}