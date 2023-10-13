import suitcase from '../assets/Work.png'

export const WorkExperience = () => {

    const experience = [
        {
            positionHeld: 'CEO/Founder',
            organization: 'Samdom Fashion House',
            date: 'June 2018- Present'
        },
        {
            positionHeld: 'Tailoring Apprentice',
            organization: 'Maydan Tailoring House',
            date: 'June 2011- May 2018'
        }
    ]

    return (
        <div className='work-experience'>
            <div className='header'>
                <img src={suitcase} alt="" /><h4>Work Experience</h4>
            </div>

            {experience.map((e) =>
                <div className='experience-1'>
                    <h1 className='box'>{e.organization.substring(0, 1)}</h1>
                    <div>
                        <div style={{ fontWeight: 'bold', color: '#0044c0' }}>{e.positionHeld}</div>
                        <div style={{ fontWeight: '600' }}>{e.organization}</div>
                        <div style={{ fontWeight: '500', color: 'grey', fontSize: '14px' }}>{e.date}</div>
                    </div>
                </div>
            )}



        </div>
    )
}
