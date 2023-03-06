import '../styles/mensPageStyle.css'
import '../styles//photoCarouselStyle.css'
import AnimateOnScroll from './animate'
import PhotoDisplay from './carousel/photoDisplay'
import { useState } from 'react'
import { mensDress } from '../assets/mensDress'
import ModalGallery from './carousel/modal'

export default function Mens() {

    const [category, setCategory] = useState(mensDress)
    const [modalOpen, setModalOpen] = useState(false)
    const [activeImage, setActiveImage] = useState('')

    function changeCategory (type) {
        if (type === 'dress') {
        setCategory(mensDress)
        } else if (type === 'athletic') {
            setCategory(mensDress)
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
                    <div>Otherwides has the best selection of Men's dress, casual and athletic wide shoes and boots in the Valley.
                        Take a look through a sample of some of our styles
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
                    className={category === mensDress ? 'activeButton' : 'categoryButton'}>Casual
                </button>
                <button 
                    onClick={() => changeCategory('athletic')} 
                    className={category === 'mensDress' ? 'activeButton' : 'categoryButton'}>Dress
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