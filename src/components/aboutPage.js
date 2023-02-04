import '../styles/aboutuspageStyle.css'
import AnimateOnScroll from './animate'

export default function AboutOtherwides () {

    return (
        <div className="aboutStoreContainer">
            
            <AnimateOnScroll 
                children={
                    <div className='aboutTextContainer'> 
                        <h2>Welcome to Otherwides Wide Shoes</h2>
                        <div className='aboutTextDescription'>  
                        We are a local Tempe small business with years of experiance in providing our 
                        custormers with a wide range of quality shoes that cater to their specific needs and fit comfortably. 
                        From casual sneakers to formal dress shoes, we have a huge variety of styles and sizes to choose from, 
                        including wide and extra-wide options.


                        
                        </div>
                    </div>
                }
                reappear={true}
                threshold={.3}
                right={true}
            />
            <div className='aboutText'>
                hello
            </div>

        </div>
    )
}

// Welcome to our local wide shoe retail store, where comfort and style come together. 

// Our mission is to provide our customers with a wide range of quality shoes that cater to their specific needs
//  and fit comfortably.

// With years of experience in the shoe retail industry, our team of experts handpicks each item to ensure that
//  it meets our high standards for both style and comfort. 
 
//  From casual sneakers to formal dress shoes, we have a variety of styles and sizes to choose from, 
//  including wide and extra-wide options.

// We believe that finding the perfect pair of shoes is a journey, 
// and we are here to make that journey as easy and comfortable as possible. 

// Our knowledgeable staff is always available to assist with fittings and answer any questions you may have.

// At our store, you can shop with confidence, knowing that you're getting the best in quality, 
// value, and customer service. 

// So whether you're in the market for a new pair of shoes or just want to browse our latest collections, 
// stop by and see us today.

// Thank you for choosing our store, and we look forward to serving you soon!