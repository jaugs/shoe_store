import '../styles/headerStyle.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header(props) {
    
    const [navbarOpen, setNavbarOpen] = useState(false)

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div className="header">

            <div className='navigation'>
                <ul>
                    <li>For Women</li>
                    <li>For Men</li>
                    <li>Brands</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className='hamburger' onClick={toggleNavbar}>

            </div>


            <div className='leftLinks'>
                <Link 
                    className='headerLink'
                    to='/womens'>For Women
                </Link>
                <Link 
                    className='headerLink'
                    to="/mens">For Men
                </Link>
                <Link
                    className='headerLink'
                    to='/brands'>Brands
                </Link>
            </div>
            <div className="title">
                <Link
                    className='titleText'
                    to='/'>Otherwides Wide Shoes
                </Link>
                <div> The Widest Selection in Town!</div>
                <div className='phoneNumber'> (480) 730-2730</div>
            </div>
            <div className='rightLinks'>
                <Link
                    className='headerLink'
                    to='/about_otherwides'>About Us
                </Link>
                <Link
                    className='headerLink'
                    to='contact'>Contact
                </Link>
                <div className='headerLink'>Social</div>
            </div>

          
            
        </div>
    )
}