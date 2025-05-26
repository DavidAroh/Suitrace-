import { useState, useRef } from 'react'
import { FaImage, FaSmile, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './TweetBox.css'

function TweetBox({ onPostSubmit }) {
  const [tweetText, setTweetText] = useState('')
  const [tweetImage, setTweetImage] = useState('')
  const [charCount, setCharCount] = useState(0)
  const textareaRef = useRef(null)
  const MAX_CHARS = 280

  const handleTextChange = (e) => {
    const text = e.target.value
    if (text.length <= MAX_CHARS) {
      setTweetText(text)
      setCharCount(text.length)
    }
  }

  const handleImageUrlChange = (e) => {
    setTweetImage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onPostSubmit(tweetText, tweetImage)
    setTweetText('')
    setTweetImage('')
    setCharCount(0)
    
    // Focus back to textarea
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
          <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60" 
            alt="Profile" 
            className="tweetBox__avatar"
          />
          <div className="tweetBox__inputContainer">
            <textarea 
              placeholder="What's happening?" 
              value={tweetText}
              onChange={handleTextChange}
              ref={textareaRef}
            />
            
            {tweetImage && (
              <div className="tweetBox__imagePreview">
                <img src={tweetImage} alt="Post" />
                <button 
                  type="button" 
                  className="tweetBox__clearImage"
                  onClick={() => setTweetImage('')}
                >
                  ×
                </button>
              </div>
            )}
            
            {!tweetImage && (
              <div className="tweetBox__imageInput">
                <input 
                  type="text" 
                  placeholder="Enter image URL (optional)" 
                  value={tweetImage}
                  onChange={handleImageUrlChange}
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="tweetBox__footer">
          <div className="tweetBox__icons">
            <FaImage className="tweetBox__icon" />
            <FaSmile className="tweetBox__icon" />
            <FaCalendarAlt className="tweetBox__icon" />
            <FaMapMarkerAlt className="tweetBox__icon" />
          </div>
          
          <div className="tweetBox__actions">
            <div className="tweetBox__charCount">
              {charCount > 0 && (
                <div className={`charCounter ${charCount > 250 ? 'warning' : ''}`}>
                  <span>{charCount}</span>/<span>{MAX_CHARS}</span>
                </div>
              )}
            </div>
            
            <button 
              type="submit" 
              className={`tweetBox__postButton ${!tweetText.trim() ? 'disabled' : ''}`}
              disabled={!tweetText.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TweetBox