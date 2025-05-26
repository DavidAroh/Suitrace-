import { FaEllipsisH } from 'react-icons/fa'
import './TrendingTopic.css'

function TrendingTopic({ category, title, posts }) {
  return (
    <div className="trendingTopic">
      <div className="trendingTopic__left">
        <span className="trendingTopic__category">{category} · Trending</span>
        <h3 className="trendingTopic__title">{title}</h3>
        <span className="trendingTopic__posts">{posts} posts</span>
      </div>
      <div className="trendingTopic__more">
        <FaEllipsisH />
      </div>
    </div>
  )
}

export default TrendingTopic