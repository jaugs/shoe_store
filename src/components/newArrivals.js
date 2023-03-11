import '../styles/mensPageStyle.css'
import '../styles//photoCarouselStyle.css'
import AnimateOnScroll from './animate'
import PhotoDisplay from './carousel/photoDisplay'
import { useState } from 'react'
import { newShoes } from '../assets/newShoes'
import ModalGallery from './carousel/modal'

export default function NewArrivals() {

    const [category, setCategory] = useState(newShoes)
    const [modalOpen, setModalOpen] = useState(false)
    const [activeImage, setActiveImage] = useState('')

    // function changeCategory (type) {
    //     if (type === 'dress') {
    //     setCategory(mensDress)
    //     } else if (type === 'athletic') {
    //         setCategory(mensDress)
    //     }
    // }

    function openModal(image, index) {
        setActiveImage(image)
        setModalOpen(true)
    }

    return (
        <section className="mensContainer">
           <AnimateOnScroll
             children={
                <div className='descriptionMensContainer'>
                    <h3> New Arrivals </h3>
                    <div>Check out our newest styles from your favorite brands. Get ready for Spring and Summer
                    with our latest Sandals, Athletic Shoes and More. New Inventory arriving daily!
                    </div> 
                </div>
             }
             reappear={true}
             threshold={.3}
             right={true}
            />
            {/* <div className='categoryContainer'>
                <button 
                    onClick={() => changeCategory('casual')} 
                    className={category === mensDress ? 'activeButton' : 'categoryButton'}>Casual
                </button>
                <button 
                    onClick={() => changeCategory('athletic')} 
                    className={category === 'mensDress' ? 'activeButton' : 'categoryButton'}>Dress
                </button>
            </div> */}

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