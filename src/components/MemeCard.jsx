import React from 'react'
import './MemeCard.css'

function MemeCard({ meme }) {
  const isVideo = meme.url && (meme.url.includes('youtube') || meme.url.includes('tiktok') || meme.url.includes('vine'))

  return (
    <div className="meme-card">
      {isVideo ? (
        <div className="video-wrapper">
          <iframe
            src={getEmbedUrl(meme.url, meme.source)}
            title={meme.title}
            allowFullScreen
            className="meme-video"
          ></iframe>
        </div>
      ) : (
        <img src={meme.thumbnail || meme.url} alt={meme.title} className="meme-image" />
      )}
      <div className="meme-info">
        <h2>{meme.title || 'Untitled Meme'}</h2>
        {meme.description && <p>{meme.description}</p>}
        <div className="meme-stats">
          <span className="stat">👍 {meme.likes || '0'}</span>
          <span className="stat">👁️ {meme.views || '0'}</span>
          <span className="stat">💬 {meme.comments || '0'}</span>
        </div>
      </div>
    </div>
  )
}

function getEmbedUrl(url, source) {
  if (!url) return ''
  
  if (source === 'youtube') {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url
  }
  
  if (source === 'tiktok') {
    return url.replace('www.tiktok.com', 'www.tiktok.com/embed')
  }
  
  return url
}

export default MemeCard