import Chart from '../assets/Chart.png'

export const Skills = () => {
  const skills: string[] = ["Fitting", 'Sewing', 'Measurement Taking', 'Amendment']

  return (
    <div className="skills">
      <div className='header'>
        <img src={Chart} alt="" /><h4>Skills</h4>
      </div>
      <div className='list'>
        {skills.map((e) => <div className='skills-list'>{e}</div>)}

      </div>

    </div>
  )
}
