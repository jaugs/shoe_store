
export default function SignUpForm() {
    return(
        <div className="signupContainer">
            <form method="POST" name="emailSignUp" data-netlify='true' netlify-honeypot="bot-field">
                <input name="bot-field"></input>
                <label>Sign Up with your Email to recieive exclusive offers, deals and more!</label>
                <input type='email' name='email' className='emailInput'></input>
                <input className='submitButton' type='submit' value='Submit'></input>
            </form>
        </div>
    )
}