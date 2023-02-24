import '../../styles/mensPageStyle.css'
import Arrows from './carouselArrows'

export default function ModalGallery (props) {
    const { modalOpen, setModalOpen, activeImage, images, setActiveImage } = props
    const len = images.length - 1

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div className={modalOpen ? 'modalOpen' : 'modalClosed'}>
                <span className='closeIcon' onClick={closeModal}>&times;</span>
                <div className='modalContent'>
                    <img className='modalImage' src= {activeImage.image} alt={activeImage.name}></img>
                    <div className='modalName'>{activeImage.name}</div>
                </div>
                <Arrows 
                    prevCard = {() => 
                        {activeImage.id < 1 ? setActiveImage(images[len]) : setActiveImage(images[activeImage.id - 1])}
                    }
                    nextCard = {() =>
                        {activeImage.id === len ? setActiveImage(images[0]) : setActiveImage(images[activeImage.id + 1])}
                }
                componentName = {'modalArrows'}
                />
        </div>
    )

}