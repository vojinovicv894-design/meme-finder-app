# 🎭 Meme Finder App

A TikTok-style meme finder web application that lets you search and browse memes from TikTok, Vine, and YouTube all in one place!

## Features

✨ **TikTok-Style Interface**
- Vertical scrolling feed with smooth navigation
- Sleek dark theme with cyberpunk-inspired gradient UI
- Responsive design for desktop and mobile

🔍 **Smart Search**
- Search across multiple platforms (TikTok, Vine, YouTube)
- Toggle sources on/off
- Real-time search results

🎯 **Trending Tags**
- Quick access to popular search terms
- One-click trending category browsing

📊 **Meme Stats**
- View count, likes, and comments
- Direct links to original sources
- Source information display

⌨️ **Keyboard Navigation**
- Arrow Up/Down to scroll through memes
- Smooth transitions and animations

## Tech Stack

**Frontend:**
- React 18
- Vite
- CSS3 with modern gradients and animations

**Backend:**
- Node.js
- Express.js
- CORS enabled for cross-origin requests

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd meme-finder-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Start the backend server**
   ```bash
   npm run server
   ```
   Backend runs on `http://localhost:3001`

5. **In a new terminal, start the frontend**
   ```bash
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## Usage

1. Open `http://localhost:5173` in your browser
2. Select which sources you want to search (TikTok, Vine, YouTube)
3. Type your search query in the search bar
4. Press Enter or click the search button
5. Use the arrow buttons or keyboard arrows to navigate through results
6. Click "View on [Source]" to open the original video

## API Integration

The app is ready to integrate with real APIs:

- **TikTok API** - Requires API key from TikTok Developer Portal
- **YouTube API** - Requires API key from Google Cloud Console
- **Vine Archive API** - Community-maintained archive

Replace the mock data in `server.js` with actual API calls.

## File Structure

```
meme-finder-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.css
│   │   ├── Feed.jsx
│   │   ├── Feed.css
│   │   ├── MemeCard.jsx
│   │   └── MemeCard.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── server.js
├── package.json
├── vite.config.js
└── README.md
```

## Features to Add

- [ ] User authentication and favorites
- [ ] Share memes feature
- [ ] Infinite scroll
- [ ] Download memes
- [ ] Custom playlists
- [ ] User profiles
- [ ] Social features (follow, like, comment)
- [ ] Advanced filters

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

Have questions or found a bug? Please open an issue on GitHub!

---

**Enjoy finding memes!** 🎭✨
