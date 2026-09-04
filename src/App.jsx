import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import Feed from './components/Feed'
import './App.css'

function App() {
  const [memes, setMemes] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async (query, sources) => {
    setSearchQuery(query)
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3001/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, sources }),
      })
      const data = await response.json()
      setMemes(data.memes || [])
    } catch (error) {
      console.error('Search error:', error)
      setMemes([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <Feed memes={memes} loading={loading} query={searchQuery} />
    </div>
  )
}

export default App