import { useState, useRef, useEffect } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import './Feed.css'

function Feed() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const feedRef = useRef(null)

  useEffect(() => {
    // Simulate loading posts
    setTimeout(() => {
      setPosts([
        {
          id: '1',
          displayName: 'Elon Musk',
          username: 'elonmusk',
          verified: true,
          text: 'This is the way 💫',
          avatar: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=60',
          image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=600',
          timestamp: '2h',
          likes: 5283,
          comments: 342,
          reposts: 1294
        },
        {
          id: '2',
          displayName: 'Jack Dorsey',
          username: 'jack',
          verified: true,
          text: 'Just setting up my X',
          avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=60',
          timestamp: '3h',
          likes: 4251,
          comments: 201,
          reposts: 983
        },
        {
          id: '3',
          displayName: 'NASA',
          username: 'NASA',
          verified: true,
          text: 'The James Webb Space Telescope has delivered the deepest infrared image of our universe yet.',
          avatar: 'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=60',
          image: 'https://images.pexels.com/photos/5439/earth-space.jpg?auto=compress&cs=tinysrgb&w=600',
          timestamp: '5h',
          likes: 98453,
          comments: 3201,
          reposts: 28973
        },
        {
          id: '4',
          displayName: 'React',
          username: 'reactjs',
          verified: true,
          text: 'React 18 is now available on npm!',
          avatar: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=60',
          timestamp: '8h',
          likes: 15283,
          comments: 943,
          reposts: 3219
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const addPost = (postText, postImage) => {
    if (postText.trim() !== '') {
      const newPost = {
        id: Date.now().toString(),
        displayName: 'John Doe',
        username: 'johndoe',
        verified: false,
        text: postText,
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60',
        image: postImage || '',
        timestamp: 'now',
        likes: 0,
        comments: 0,
        reposts: 0
      }
      
      setPosts([newPost, ...posts])
      
      // Smooth scroll to top after adding new post
      if (feedRef.current) {
        feedRef.current.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="feed" ref={feedRef}>
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox onPostSubmit={addPost} />
      
      {loading ? (
        <div className="feed__loading">
          <div className="loader"></div>
          <p>Loading posts...</p>
        </div>
      ) : (
        <div className="feed__posts">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Feed