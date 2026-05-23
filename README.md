# WallpaperHub - Curated Wallpapers Website

## Overview
WallpaperHub is a modern, responsive website for browsing, searching, and downloading curated wallpapers. Built with vanilla HTML, CSS, and JavaScript, it provides a smooth and intuitive user experience.

## Features

### 🎨 Gallery & Display
- **Responsive Grid Gallery**: Automatically adjusts to different screen sizes
- **High-Quality Images**: Support for multiple resolutions (1920x1080, 2560x1440, 4K, etc.)
- **Modern Design**: Dark theme with minimalist aesthetic and smooth animations
- **Preview Modal**: View full-size wallpapers with detailed information

### 🔍 Search & Filter
- **Search Functionality**: Search by title, description, or tags
- **Category Filtering**: Filter by categories (Nature, Urban, Abstract, Space, Technology, Animals)
- **Resolution Filter**: Find wallpapers in specific resolutions
- **Smart Sorting**: Sort by Recent, Popular, or Trending
- **Tag System**: Click on tags to quickly filter wallpapers

### ❤️ Favorites System
- **Save Favorites**: Mark wallpapers as favorites
- **Persistent Storage**: Favorites are saved in browser localStorage
- **Favorites View**: Dedicated modal to view all saved favorites
- **Quick Actions**: One-click add/remove from favorites

### 💾 Download
- **One-Click Download**: Download wallpapers directly to your device
- **Auto-Naming**: Files are automatically named based on wallpaper title
- **Download Counter**: Track the popularity of wallpapers

### 🎯 Additional Features
- **Real-time Filters**: Filters update gallery instantly
- **Toast Notifications**: User feedback for actions
- **Theme Toggle**: Switch between dark and light themes
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Keyboard Support**: Press Enter to search
- **Local Storage**: Saves favorites and theme preferences

## File Structure

```
├── index.html       # Main HTML file
├── styles.css       # All CSS styles
├── script.js        # JavaScript functionality
└── README.md        # Documentation
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **Vanilla JavaScript**: No frameworks or dependencies
- **Font Awesome**: Icons
- **Unsplash API**: Sample images (can be replaced)
- **localStorage**: Client-side data persistence

## How to Use

### Installation
1. Clone the repository
2. Open `index.html` in your web browser
3. No build process or dependencies required!

### Usage

**Search for Wallpapers**
- Type in the search box and click the search button or press Enter
- Search works across titles, descriptions, and tags

**Filter Results**
- Use the category dropdown to filter by type
- Select a resolution to find specific sizes
- Sort by Recent, Popular, or Trending
- Click tags to filter by specific keywords

**View & Download**
- Click any wallpaper card to view full details
- Click the preview button on cards for quick view
- Download directly using the download button
- Track download counts

**Save Favorites**
- Click the heart icon to add/remove from favorites
- Click the favorites button (heart with count) to view all saved wallpapers
- Favorites persist across browser sessions

**Customize Theme**
- Click the moon icon to toggle between dark and light themes
- Theme preference is saved automatically

## Customization

### Add Your Own Wallpapers
Edit the `wallpapers` array in `script.js`:

```javascript
const wallpapers = [
    {
        id: 1,
        title: "Your Title",
        description: "Description",
        category: "nature", // or urban, abstract, space, technology, animals
        resolution: "1920x1080",
        tags: ["tag1", "tag2"],
        image: "url-to-image",
        downloads: 0,
        date: new Date()
    },
    // ... more wallpapers
];
```

### Modify Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more colors */
}
```

### Add New Categories
1. Add to the categoryFilter options in `index.html`
2. Add wallpapers with the new category in `script.js`

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: No external dependencies
- Fast load times
- Smooth animations with GPU acceleration
- Lazy loading support (ready to implement)
- Optimized for 12+ wallpapers

## Future Enhancements

- [ ] Lazy loading for images
- [ ] Backend API integration
- [ ] User accounts and social sharing
- [ ] Advanced filters (color, orientation, season)
- [ ] Collections/Albums
- [ ] Ratings and reviews
- [ ] Image upload functionality
- [ ] PWA support for offline access

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

## Credits

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Built with vanilla web technologies

---

**Made with ❤️ for wallpaper enthusiasts**