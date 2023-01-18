import '../styles/headerStyle.css'

export default function Header(props) {
    

    return (
        <div className="header">

            <div className='leftLinks'>
                <div className='headerLink'>For Women</div>
                <div className='headerLink'>For Men</div>
                <div className='headerLink'>Brands</div>
            </div>
            <div className="title">
                <div className='titleText'>Otherwides Wide Shoes</div>
                <div>The Widest Selection in Town!</div>
                <div>(480) 730-2730</div>
            </div>
            <div className='rightLinks'>
                <div className='headerLink'>About Us</div>
                <div className='headerLink'>Contact</div>
                <div className='headerLink'>Location</div>
            </div>

          
            
        </div>
    )
}