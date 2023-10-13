import './App.css'
import { Portfolio } from './components/Portfolio'
import { Ratings } from './components/Ratings'
import { Skills } from './components/Skills'
import { Summary } from './components/Summary'
import { UserInfo } from './components/UserInfo'
import { WorkExperience } from './components/WorkExperience'

function App() {

  return (
    <div className="App">
      <UserInfo />
      <Summary />
      <WorkExperience />
      <Skills />
      <Portfolio />
      <Ratings />
    </div>

  )
}

export default App
