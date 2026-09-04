import React, { useState } from 'react'
import MemeCard from './MemeCard'
import './Feed.css'

function Feed({ memes, loading, query }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex < memes.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowUp') handlePrevious()
    if (e.key === 'ArrowDown') handleNext()
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, memes.length])

  if (loading) {
    return (
      <div className="feed">
        <div className="loading">
          <div className="spinner"></div>
          <p>Searching memes...</p>
        </div>
      </div>
    )
  }

  if (memes.length === 0) {
    return (
      <div className="feed">
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <p>{query ? 'No memes found. Try a different search!' : 'Search for memes to get started!'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="feed">
      <div className="meme-container">
        <MemeCard meme={memes[currentIndex]} />
      </div>

      <div className="navigation">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="nav-button prev-button"
          aria-label="Previous meme"
        >
          ⬆️
        </button>
        <span className="counter">{currentIndex + 1} / {memes.length}</span>
        <button
          onClick={handleNext}
          disabled={currentIndex === memes.length - 1}
          className="nav-button next-button"
          aria-label="Next meme"
        >
          ⬇️
        </button>
      </div>

      <div className="info-panel">
        <div className="info-item">
          <span className="label">Source:</span>
          <span className="value">{memes[currentIndex].source || 'Unknown'}</span>
        </div>
        <div className="info-item">
          <span className="label">Views:</span>
          <span className="value">{memes[currentIndex].views || 'N/A'}</span>
        </div>
        <div className="info-item">
          <span className="label">Likes:</span>
          <span className="value">{memes[currentIndex].likes || 'N/A'}</span>
        </div>
        <a
          href={memes[currentIndex].url}
          target="_blank"
          rel="noopener noreferrer"
          className="view-button"
        >
          View on {memes[currentIndex].source}
        </a>
      </div>
    </div>
  )
}

export default Feed