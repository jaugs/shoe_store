
export default function SignUpForm() {
    return(
        <div className="signupContainer">
            <form>
                <label>Sign Up with your Email to recieive exclusive offers, deals and more!</label>
                <input type='text' name='email' className='emailInput'></input>
                <input className='submitButton' type='submit' value='Submit'></input>
            </form>
        </div>
    )
}