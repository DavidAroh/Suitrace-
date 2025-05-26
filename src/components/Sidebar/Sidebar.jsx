import { useState } from 'react'
import SidebarOption from './SidebarOption'
import ProfileButton from './ProfileButton'
import TweetButton from './TweetButton'
import './Sidebar.css'
import { 
  FaHome, 
  FaHashtag, 
  FaBell, 
  FaEnvelope, 
  FaBookmark, 
  FaList, 
  FaUser, 
  FaEllipsisH 
} from 'react-icons/fa'
import XLogo from '../common/XLogo'

function Sidebar() {
  const [activeOption, setActiveOption] = useState('home')

  const handleOptionClick = (optionName) => {
    setActiveOption(optionName)
  }

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__logo">
          <XLogo size={28} />
        </div>

        <div className="sidebar__options">
          <SidebarOption 
            Icon={FaHome} 
            text="Home" 
            active={activeOption === 'home'} 
            onClick={() => handleOptionClick('home')}
          />
          <SidebarOption 
            Icon={FaHashtag} 
            text="Explore" 
            active={activeOption === 'explore'} 
            onClick={() => handleOptionClick('explore')}
          />
          <SidebarOption 
            Icon={FaBell} 
            text="Notifications" 
            active={activeOption === 'notifications'} 
            onClick={() => handleOptionClick('notifications')}
          />
          <SidebarOption 
            Icon={FaEnvelope} 
            text="Messages" 
            active={activeOption === 'messages'} 
            onClick={() => handleOptionClick('messages')}
          />
          <SidebarOption 
            Icon={FaBookmark} 
            text="Bookmarks" 
            active={activeOption === 'bookmarks'} 
            onClick={() => handleOptionClick('bookmarks')}
          />
          <SidebarOption 
            Icon={FaList} 
            text="Lists" 
            active={activeOption === 'lists'} 
            onClick={() => handleOptionClick('lists')}
          />
          <SidebarOption 
            Icon={FaUser} 
            text="Profile" 
            active={activeOption === 'profile'} 
            onClick={() => handleOptionClick('profile')}
          />
          <SidebarOption 
            Icon={FaEllipsisH} 
            text="More" 
            active={activeOption === 'more'} 
            onClick={() => handleOptionClick('more')}
          />
        </div>

        <TweetButton />
        <ProfileButton 
          name="John Doe" 
          username="johndoe" 
          avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60"
        />
      </div>
    </div>
  )
}

export default Sidebar