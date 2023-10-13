import star from '../assets/star.png'
import starGold from '../assets/star.svg'
import images from '../assets/image4.png'

export const Ratings = () => {
    const stars = new Array(5);
    return (
        <div className="ratings">
            <div className='header'>
                <div>
                    <img src={star} alt="" /><h4>Ratings and Reviews (8)</h4>
                </div>
                <div style={{
                    borderBottom: '1.8px black solid',
                    width: 'max-content',
                    fontWeight: '500'
                }}>See More</div>
            </div>
            <div style={{
                margin: '25px',

            }}>

                <div className='profile'>
                    <div>
                        <img className='img-1' src={images} alt="" />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Allen Daniels</div>
                            {stars.fill(0).map(() => <img className='img-2' src={starGold} />)}
                            <span style={{ fontWeight: 'bold' }}>5.0</span>
                        </div>
                    </div>
                    <div>17 Hours Ago</div>
                </div>
                <div>
                    There has been a password update on your account. Kindly reach out to us immediately if this isn’t your doing. There has been a password update on your account. Kindly reach out to us immediately if this isn’t your doing. There has been a password update on your account. Kindly reach out to us immediately if this isn’t your doing.</div>

                <div className="hr"></div>

                <button>Write a Review</button>
            </div>
        </div>
    )
}
