import document from '../assets/doc.png'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'

export const Portfolio = () => {

    const images = [
        {
            image: Image1,
            text: 'Ankara Gown'
        },
        {
            image: Image2,
            text: '3- Piece Suit'
        },
        {
            image: Image3,
            text: 'Jumpsuit Dress'
        }
    ]

    return (
        <div className="portfolio">
            <div className='header'>
                <img src={document} alt="" /><h4>Job Portfolio</h4>
            </div>
            <div className="grid">
                {images.map((e) => <div>
                    <img src={e.image} alt="" />
                    <div>{e.text}</div>
                </div>)}

            </div>
        </div>
    )
}
