import { useState } from 'react'
import { 
  FaRegComment, 
  FaRetweet, 
  FaRegHeart, 
  FaHeart, 
  FaShareSquare, 
  FaCheckCircle 
} from 'react-icons/fa'
import './Post.css'

function Post({ post }) {
  const [liked, setLiked] = useState(false)
  const [reposted, setReposted] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [repostCount, setRepostCount] = useState(post.reposts)
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }
  
  const handleRepost = () => {
    if (reposted) {
      setRepostCount(repostCount - 1)
    } else {
      setRepostCount(repostCount + 1)
    }
    setReposted(!reposted)
  }

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num
  }

  return (
    <div className="post">
      <div className="post__avatar">
        <img src={post.avatar} alt={post.displayName} />
      </div>
      
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {post.displayName}{' '}
              {post.verified && <FaCheckCircle className="post__badge" />}
              <span className="post__headerSpecial">
                @{post.username} · {post.timestamp}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{post.text}</p>
          </div>
        </div>
        
        {post.image && (
          <div className="post__image">
            <img src={post.image} alt="" />
          </div>
        )}
        
        <div className="post__footer">
          <div className="post__footerIcon comment">
            <FaRegComment />
            {post.comments > 0 && <span>{formatNumber(post.comments)}</span>}
          </div>
          
          <div 
            className={`post__footerIcon repost ${reposted ? 'active' : ''}`}
            onClick={handleRepost}
          >
            <FaRetweet />
            {repostCount > 0 && <span>{formatNumber(repostCount)}</span>}
          </div>
          
          <div 
            className={`post__footerIcon like ${liked ? 'active' : ''}`}
            onClick={handleLike}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
            {likeCount > 0 && <span>{formatNumber(likeCount)}</span>}
          </div>
          
          <div className="post__footerIcon share">
            <FaShareSquare />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post