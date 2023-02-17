
export default function SignUpForm() {
    return(
        <div className="signupContainer">
            <form method="POST" name="email">
                <input type="hidden" name="form-name" value="emailForm" />
                <label>Sign Up with your Email to recieive exclusive offers, deals and more!</label>
                <input type='email' name='email' className='emailInput'></input>
                <input className='submitButton' type='submit' value='Submit'></input>
            </form>
        </div>
    )
}