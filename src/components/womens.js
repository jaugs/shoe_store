import '../styles/mensPageStyle.css'
import '../styles//photoCarouselStyle.css'
import AnimateOnScroll from './animate'
import PhotoDisplay from './carousel/photoDisplay'
import { useState } from 'react'
import { womensCasual } from '../assets/womensCasual'
import { womensAthletic } from '../assets/womensAthletic'
import { womensDress } from '../assets/womensDress'
import ModalGallery from './carousel/modal'


export default function Womens() {

    const [category, setCategory] = useState(womensCasual)
    const [modalOpen, setModalOpen] = useState(false)
    const [activeImage, setActiveImage] = useState('')

    function changeCategory(type) {
        if (type === 'casual') {
        setCategory(womensCasual)
        } else if (type === 'athletic') {
            setCategory(womensAthletic)
        } else if (type === 'dress') {
            setCategory(womensDress)
        }
    }

    function openModal(image, index) {
        setActiveImage(image)
        setModalOpen(true)
    }

   

    return (
        <section className="mensContainer">
           <AnimateOnScroll
             children={
                <div className='descriptionMensContainer'>
                    <h3> Quality Footwear That Fits </h3>
                    <div>Otherwides has the widest selection of Women's dress shoes, 
                        casual, and athletic shoes, as well as sandals and boots. Scroll through our galleries to see a sample of our amazing styles.
                    </div> 
                </div>
             }
             reappear={true}
             threshold={.3}
             right={true}
            />
             <div className='categoryContainer'>
                <button 
                    onClick={() => changeCategory('casual')} 
                    className={category === womensCasual ? 'activeButton' : 'categoryButton'}>Casual
                </button>
                <button 
                    onClick={() => changeCategory('dress')} 
                    className={category === womensDress ? 'activeButton' : 'categoryButton'}>Dress
                </button>
                <button 
                    onClick={() => changeCategory('athletic')} 
                    className={category === womensAthletic ? 'activeButton' : 'categoryButton'}>Athletic
                </button>
            </div>
                
            <PhotoDisplay images = {category} openModal = {openModal} />
            
            <ModalGallery 
                modalOpen = {modalOpen} 
                setModalOpen = {setModalOpen} 
                activeImage = {activeImage} 
                setActiveImage = {setActiveImage}
                images = {category}
            />
        </section>
    )
}