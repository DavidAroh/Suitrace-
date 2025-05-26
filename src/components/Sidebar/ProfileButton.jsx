import { FaEllipsisH } from 'react-icons/fa'
import './ProfileButton.css'

function ProfileButton({ name, username, avatar }) {
  return (
    <div className="profileButton">
      <div className="profileButton__container">
        <img 
          src={avatar} 
          alt="Profile" 
          className="profileButton__avatar"
        />
        <div className="profileButton__info">
          <h4 className="profileButton__name">{name}</h4>
          <p className="profileButton__username">@{username}</p>
        </div>
        <FaEllipsisH className="profileButton__more" />
      </div>
    </div>
  )
}

export default ProfileButton