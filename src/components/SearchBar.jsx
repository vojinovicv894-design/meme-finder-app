import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [selectedSources, setSelectedSources] = useState(['tiktok', 'youtube'])

  const handleToggleSource = (source) => {
    setSelectedSources(prev =>
      prev.includes(source)
        ? prev.filter(s => s !== source)
        : [...prev, source]
    )
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query, selectedSources)
    }
  }

  return (
    <div className="search-container">
      <div className="search-header">
        <h1>🎭 Meme Finder</h1>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search memes..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <span>🔍</span>
          </button>
        </div>
      </form>

      <div className="sources-container">
        <h3>Sources</h3>
        <div className="source-buttons">
          <button
            className={`source-btn ${selectedSources.includes('tiktok') ? 'active' : ''}`}
            onClick={() => handleToggleSource('tiktok')}
          >
            🎵 TikTok
          </button>
          <button
            className={`source-btn ${selectedSources.includes('youtube') ? 'active' : ''}`}
            onClick={() => handleToggleSource('youtube')}
          >
            ▶️ YouTube
          </button>
          <button
            className={`source-btn ${selectedSources.includes('vine') ? 'active' : ''}`}
            onClick={() => handleToggleSource('vine')}
          >
            🍃 Vine
          </button>
        </div>
      </div>

      <div className="trending-section">
        <h3>Trending</h3>
        <div className="trending-tags">
          <button className="tag" onClick={() => { setQuery('funny'); }}>funny</button>
          <button className="tag" onClick={() => { setQuery('cats'); }}>cats</button>
          <button className="tag" onClick={() => { setQuery('fails'); }}>fails</button>
          <button className="tag" onClick={() => { setQuery('dance'); }}>dance</button>
          <button className="tag" onClick={() => { setQuery('prank'); }}>prank</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar