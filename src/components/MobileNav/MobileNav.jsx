import { useState } from 'react'
import { FaHome, FaSearch, FaBell, FaEnvelope } from 'react-icons/fa'
import './MobileNav.css'

function MobileNav() {
  const [activeTab, setActiveTab] = useState('home')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <div className="mobileNav">
      <div className="mobileNav__tabs">
        <div 
          className={`mobileNav__tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          <FaHome />
        </div>
        <div 
          className={`mobileNav__tab ${activeTab === 'search' ? 'active' : ''}`}
          onClick={() => handleTabClick('search')}
        >
          <FaSearch />
        </div>
        <div 
          className={`mobileNav__tab ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => handleTabClick('notifications')}
        >
          <FaBell />
        </div>
        <div 
          className={`mobileNav__tab ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => handleTabClick('messages')}
        >
          <FaEnvelope />
        </div>
      </div>
    </div>
  )
}

export default MobileNav