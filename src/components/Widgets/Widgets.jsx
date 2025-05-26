import { useState } from 'react'
import SearchBox from './SearchBox'
import TrendingTopic from './TrendingTopic'
import WhoToFollow from './WhoToFollow'
import './Widgets.css'

function Widgets() {
  const [trends] = useState([
    { 
      title: 'SpaceX', 
      category: 'Science', 
      posts: '248K' 
    },
    { 
      title: '#WebDevelopment', 
      category: 'Programming', 
      posts: '128K' 
    },
    { 
      title: 'ChatGPT', 
      category: 'Technology', 
      posts: '502K' 
    },
    { 
      title: '#ReactJS', 
      category: 'Programming', 
      posts: '90.2K' 
    },
    { 
      title: 'Artificial Intelligence', 
      category: 'Technology', 
      posts: '325K' 
    }
  ])

  const [followSuggestions] = useState([
    {
      name: 'OpenAI',
      username: 'OpenAI',
      avatar: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=60',
      verified: true
    },
    {
      name: 'JavaScript',
      username: 'JavaScript',
      avatar: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=60',
      verified: true
    },
    {
      name: 'Web Dev',
      username: 'WebDev',
      avatar: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=60',
      verified: false
    }
  ])

  return (
    <div className="widgets">
      <div className="widgets__container">
        <SearchBox />
        
        <div className="widgets__section">
          <h2 className="widgets__heading">Trends for you</h2>
          <div className="widgets__content">
            {trends.map((trend, index) => (
              <TrendingTopic
                key={index}
                title={trend.title}
                category={trend.category}
                posts={trend.posts}
              />
            ))}
            <a href="#" className="widgets__showMore">Show more</a>
          </div>
        </div>
        
        <div className="widgets__section">
          <h2 className="widgets__heading">Who to follow</h2>
          <div className="widgets__content">
            {followSuggestions.map((suggestion, index) => (
              <WhoToFollow
                key={index}
                name={suggestion.name}
                username={suggestion.username}
                avatar={suggestion.avatar}
                verified={suggestion.verified}
              />
            ))}
            <a href="#" className="widgets__showMore">Show more</a>
          </div>
        </div>
        
        <div className="widgets__footer">
          <nav>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Accessibility</a>
            <a href="#">Ads info</a>
            <a href="#">More...</a>
          </nav>
          <span className="widgets__copyright">© 2025 X Corp.</span>
        </div>
      </div>
    </div>
  )
}

export default Widgets