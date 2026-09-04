import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Mock data - replace with actual API calls
const mockMemes = {
  tiktok: [
    {
      id: 1,
      title: 'Funny TikTok Compilation',
      url: 'https://www.tiktok.com/@username/video/1234567890',
      source: 'TikTok',
      thumbnail: 'https://via.placeholder.com/300x400',
      views: '1.2M',
      likes: '45K',
      comments: '5.2K'
    }
  ],
  youtube: [
    {
      id: 2,
      title: 'Best Meme Moments',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      source: 'YouTube',
      thumbnail: 'https://via.placeholder.com/300x400',
      views: '2.5M',
      likes: '120K',
      comments: '15K'
    }
  ],
  vine: [
    {
      id: 3,
      title: 'Classic Vine Moment',
      url: 'https://vine.co/v/example',
      source: 'Vine',
      thumbnail: 'https://via.placeholder.com/300x400',
      views: '500K',
      likes: '25K',
      comments: '3K'
    }
  ]
}

app.post('/api/search', (req, res) => {
  const { query, sources } = req.body

  if (!query || !sources || sources.length === 0) {
    return res.status(400).json({ error: 'Query and sources are required' })
  }

  try {
    // In a real app, you would:
    // 1. Call actual APIs (TikTok, YouTube, Vine)
    // 2. Filter by search query
    // 3. Return real results

    let results = []
    
    sources.forEach(source => {
      if (mockMemes[source]) {
        // Filter mock data by query
        const filtered = mockMemes[source].filter(meme =>
          meme.title.toLowerCase().includes(query.toLowerCase())
        )
        results = results.concat(filtered)
      }
    })

    // If no results from filtering, return all for the selected sources
    if (results.length === 0) {
      sources.forEach(source => {
        if (mockMemes[source]) {
          results = results.concat(mockMemes[source])
        }
      })
    }

    res.json({
      success: true,
      memes: results,
      count: results.length
    })
  } catch (error) {
    console.error('Search error:', error)
    res.status(500).json({ error: 'Failed to search memes' })
  }
})

app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

app.listen(PORT, () => {
  console.log(`🎭 Meme Finder Server running on http://localhost:${PORT}`)
})