import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'
import MobileNav from './components/MobileNav/MobileNav'
import './styles/App.css'

function App() {
  const [darkMode] = useState(true)

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="app__container">
        <Sidebar />
        <Feed />
        <Widgets />
        <MobileNav />
      </div>
    </div>
  )
}

export default App