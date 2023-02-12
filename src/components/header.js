import '../styles/headerStyle.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Hamburger (props) {
    const {isOpen} = props

    const style1 = {
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
    }
    const style2 = {
        transform: isOpen ? 'translateX(100%)' : 'translateX(0)',
        opacity: isOpen ? 0 : 1
        }
    const style3 = {
        transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'
    }
    return (
        <div className='hamburger'>
            <div style={style1} className='burger burger1' />
            <div style={style2} className='burger burger2' />
            <div style={style3} className='burger burger3' />
        </div>
    )
}

export default function Header() {
    
    const [navbarOpen, setNavbarOpen] = useState(false)

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

    const burgerStyle = {
        display: navbarOpen ? 'block' : 'none'
    }

    const handleBurgerClick = () => {
        setNavbarOpen(false)
    }

    return (
        <div className="header">
            <div className='navContainer'>
            <div className='hamburgerMenu' onClick={toggleNavbar}>
                <Hamburger isOpen = {navbarOpen} />
            </div>

            <div style={burgerStyle} className='navigation'>
                <ul>
                    <li>
                        <Link
                            onClick={handleBurgerClick}
                            className='mobileLink'
                            to='/womens'>For Women
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleBurgerClick}
                            className='mobileLink'
                            to='/mens'>For Men
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleBurgerClick}
                            className='mobileLink'
                            to='/brands'>Brands
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleBurgerClick}
                            className='mobileLink'
                            to='/about_otherwides'>About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleBurgerClick}
                            className='mobileLink'
                            to='/contact'>Contact
                        </Link>
                    </li>
                </ul>
            </div>
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
                    onClick={handleBurgerClick}
                    className='titleText'
                    to='/'>Otherwides Wide Shoes
                </Link>
                <div className='sloganText'>The Widest Selection in Town!</div>
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
            </div>
        </div>
    )
}