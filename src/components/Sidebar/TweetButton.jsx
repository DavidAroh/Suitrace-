import './TweetButton.css'

function TweetButton() {
  return (
    <div className="tweetButton">
      <button className="tweetButton__button">
        <span className="tweetButton__text">Post</span>
        <span className="tweetButton__icon">+</span>
      </button>
    </div>
  )
}

export default TweetButton