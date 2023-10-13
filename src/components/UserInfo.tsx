import avatar from '../assets/img1.svg'
import stars from '../assets/star.svg'
import call from '../assets/Call.png'
import email from '../assets/email.png'
import send from '../assets/send.png'
import location from '../assets/Location.png'


export const UserInfo = () => {
    const star = new Array(5);
    return (
        <div className="userInfo">
            <h2 style={{ color: '#0044c0' }}>View Profile</h2>
            <div className="avatar">
                <img src={avatar} />
                <div className="circle"></div>
            </div>
            <p className='name'>Samuel Dominic</p>
            <span >Fashion Designer, Male</span>
            <div className='stars'>
                <div>
                    {star.fill(0).map(() => <img src={stars} />)}
                </div>
                <span>5.0</span>
            </div>
            <div className='contacts'>
                <div>
                    <img src={location} /><span className='grey'>Lagos, Nigeria.</span>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <img src={call} /><span className='grey'>+234 813 970 3721</span>
                </div>
                <div>
                    <img src={email} /><span className='grey'>samdee@gmail.com</span>
                </div>
                <div className='experience'>
                    <span className='grey'>Experience</span><div>Expert</div>
                </div>
            </div>
            <button className='btn-send'>
                <img src={send} />
                <span>Send Message</span>
            </button>
            <div className="hr"></div>

            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                width: '100%'
            }}>
                <span> <b style={{ color: '#0044c0' }}>Join Date:</b> 19th August, 2021</span>
                <span> <b style={{ color: '#0044c0' }}>Completed Jobs:</b> 300</span>
                <span> <b style={{ color: '#0044c0' }}>Last Seen:</b> 4 Hours Ago</span>
            </div>

        </div>
    )
}
