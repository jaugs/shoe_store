import { Link } from "react-router-dom"

export default function AboutUs () {


        return (
            <section className="aboutContainer">
                <h2>Experience The Shoe Comfort You've Been Dreaming Of</h2>
                <div className="aboutText"> 
                    Get comfortable choices for your feet with our help. 
                    If you have feet that are difficult to fit, or are searching for good looking wide width shoes that feel great, 
                    our friendly staff is ready to  help you find footwear that fits.
                    Conveniently located in Tempe at Southern & McClintock, come see our huge inventory of wide shoes
                    and walk out in comfort and style! 
                </div>
                <Link
                    className="aboutLink"
                    to="/about_otherwides"
                >Learn more About Us
                </Link>


                

            </section>
        )
}