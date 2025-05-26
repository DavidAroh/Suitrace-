import { FaCheckCircle } from 'react-icons/fa'
import './WhoToFollow.css'

function WhoToFollow({ name, username, avatar, verified }) {
  return (
    <div className="whoToFollow">
      <div className="whoToFollow__avatar">
        <img src={avatar} alt={name} />
      </div>
      
      <div className="whoToFollow__info">
        <div className="whoToFollow__names">
          <h4 className="whoToFollow__name">
            {name} {verified && <FaCheckCircle className="whoToFollow__badge" />}
          </h4>
          <span className="whoToFollow__username">@{username}</span>
        </div>
      </div>
      
      <button className="whoToFollow__button">Follow</button>
    </div>
  )
}

export default WhoToFollow