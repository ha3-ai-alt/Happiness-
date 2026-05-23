// Sample wallpaper data
const wallpapers = [
    {
        id: 1,
        title: "Mountain Serenity",
        description: "Peaceful mountain landscape with morning mist",
        category: "nature",
        resolution: "1920x1080",
        tags: ["mountains", "landscape", "peaceful"],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
        downloads: 234,
        date: new Date('2024-01-15')
    },
    {
        id: 2,
        title: "Urban Lights",
        description: "City skyline with vibrant neon lights",
        category: "urban",
        resolution: "2560x1440",
        tags: ["city", "lights", "night"],
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=2560&h=1440&fit=crop",
        downloads: 456,
        date: new Date('2024-01-18')
    },
    {
        id: 3,
        title: "Abstract Dreams",
        description: "Colorful abstract patterns and shapes",
        category: "abstract",
        resolution: "3840x2160",
        tags: ["abstract", "colors", "modern"],
        image: "https://images.unsplash.com/photo-1539571696357-5a69c006ae0f?w=3840&h=2160&fit=crop",
        downloads: 178,
        date: new Date('2024-01-20')
    },
    {
        id: 4,
        title: "Cosmic Wonders",
        description: "Beautiful space scene with stars and galaxies",
        category: "space",
        resolution: "1920x1080",
        tags: ["space", "stars", "galaxy"],
        image: "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=1920&h=1080&fit=crop",
        downloads: 567,
        date: new Date('2024-01-22')
    },
    {
        id: 5,
        title: "Tech Innovation",
        description: "Modern technology and digital design",
        category: "technology",
        resolution: "2560x1440",
        tags: ["tech", "digital", "innovation"],
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=2560&h=1440&fit=crop",
        downloads: 312,
        date: new Date('2024-01-25')
    },
    {
        id: 6,
        title: "Wild Lion",
        description: "Majestic lion in natural habitat",
        category: "animals",
        resolution: "1920x1080",
        tags: ["lion", "wildlife", "nature"],
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&h=1080&fit=crop",
        downloads: 289,
        date: new Date('2024-01-28')
    },
    {
        id: 7,
        title: "Ocean Waves",
        description: "Serene beach with crashing waves at sunset",
        category: "nature",
        resolution: "3840x2160",
        tags: ["ocean", "beach", "sunset"],
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=3840&h=2160&fit=crop",
        downloads: 423,
        date: new Date('2024-02-01')
    },
    {
        id: 8,
        title: "Forest Path",
        description: "Mystical forest pathway surrounded by trees",
        category: "nature",
        resolution: "2560x1440",
        tags: ["forest", "nature", "green"],
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2560&h=1440&fit=crop",
        downloads: 198,
        date: new Date('2024-02-03')
    },
    {
        id: 9,
        title: "Neon Streets",
        description: "Rainy city streets with neon reflections",
        category: "urban",
        resolution: "1920x1080",
        tags: ["rain", "streets", "neon"],
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&h=1080&fit=crop",
        downloads: 334,
        date: new Date('2024-02-05')
    },
    {
        id: 10,
        title: "Geometric Art",
        description: "Modern geometric patterns and minimalist design",
        category: "abstract",
        resolution: "1366x768",
        tags: ["geometric", "minimalist", "pattern"],
        image: "https://images.unsplash.com/photo-1557672172-298e090d0f80?w=1366&h=768&fit=crop",
        downloads: 267,
        date: new Date('2024-02-07')
    },
    {
        id: 11,
        title: "Aurora Borealis",
        description: "Northern lights dancing across the sky",
        category: "space",
        resolution: "2560x1440",
        tags: ["aurora", "northern lights", "sky"],
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=2560&h=1440&fit=crop",
        downloads: 512,
        date: new Date('2024-02-09')
    },
    {
        id: 12,
        title: "Elephant Majesty",
        description: "Powerful elephant walking through savanna",
        category: "animals",
        resolution: "3840x2160",
        tags: ["elephant", "wildlife", "savanna"],
        image: "https://images.unsplash.com/photo-1567899591670-e71b99932e29?w=3840&h=2160&fit=crop",
        downloads: 445,
        date: new Date('2024-02-11')
    }
];

// State management
let filteredWallpapers = [...wallpapers];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentWallpaper = null;
let currentPage = 1;
const itemsPerPage = 12;

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const resolutionFilter = document.getElementById('resolutionFilter');
const sortFilter = document.getElementById('sortFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const wallpaperModal = document.getElementById('wallpaperModal');
const favoritesModal = document.getElementById('favoritesModal');
const closeModal = document.getElementById('closeModal');
const closeFavoritesModal = document.getElementById('closeFavoritesModal');
const favoritesBtn = document.getElementById('favoritesBtn');
const modalFavoriteBtn = document.getElementById('modalFavoriteBtn');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');
const noResults = document.getElementById('noResults');
const noFavorites = document.getElementById('noFavorites');
const loading = document.getElementById('loading');
const tagsContainer = document.getElementById('tagsContainer');
const themeToggle = document.getElementById('themeToggle');

// Initialize
function init() {
    renderGallery();
    setupEventListeners();
    generateTags();
    updateFavoritesCount();
    loadThemePreference();
}

// Event Listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', applyFilters);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') applyFilters();
    });
    categoryFilter.addEventListener('change', applyFilters);
    resolutionFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);
    closeModal.addEventListener('click', () => closeWallpaperModal());
    closeFavoritesModal.addEventListener('click', () => closeFavoritesModal());
    favoritesBtn.addEventListener('click', showFavorites);
    modalFavoriteBtn.addEventListener('click', toggleFavorite);
    modalDownloadBtn.addEventListener('click', downloadWallpaper);
    themeToggle.addEventListener('click', toggleTheme);
    window.addEventListener('click', (e) => {
        if (e.target === wallpaperModal) closeWallpaperModal();
        if (e.target === favoritesModal) closeFavoritesModal();
    });
}

// Render gallery
function renderGallery() {
    galleryGrid.innerHTML = '';
    noResults.style.display = 'none';
    loading.style.display = 'none';

    if (filteredWallpapers.length === 0) {
        noResults.style.display = 'flex';
        return;
    }

    filteredWallpapers.forEach(wallpaper => {
        const card = createWallpaperCard(wallpaper);
        galleryGrid.appendChild(card);
    });
}

// Create wallpaper card
function createWallpaperCard(wallpaper) {
    const card = document.createElement('div');
    card.className = 'wallpaper-card';
    
    const isFavorited = favorites.some(fav => fav.id === wallpaper.id);
    
    card.innerHTML = `
        <img src="${wallpaper.image}" alt="${wallpaper.title}" class="wallpaper-image" onerror="this.src='https://via.placeholder.com/280x200?text=Image+Not+Available'">
        <div class="wallpaper-info">
            <h3 class="wallpaper-title">${wallpaper.title}</h3>
            <div class="wallpaper-meta">
                <span><i class="fas fa-tag"></i> ${wallpaper.category}</span>
                <span><i class="fas fa-download"></i> ${wallpaper.downloads}</span>
            </div>
            <div class="wallpaper-actions">
                <button class="btn-small favorite ${isFavorited ? 'active' : ''}" data-id="${wallpaper.id}" onclick="event.stopPropagation(); toggleFavoriteQuick(${wallpaper.id})">
                    <i class="${isFavorited ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <button class="btn-small" data-id="${wallpaper.id}" onclick="event.stopPropagation(); openWallpaperModal(${wallpaper.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-small" data-id="${wallpaper.id}" onclick="event.stopPropagation(); downloadWallpaperQuick(${wallpaper.id})">
                    <i class="fas fa-download"></i>
                </button>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openWallpaperModal(wallpaper.id));
    return card;
}

// Open wallpaper modal
function openWallpaperModal(id) {
    const wallpaper = wallpapers.find(w => w.id === id);
    if (!wallpaper) return;
    
    currentWallpaper = wallpaper;
    const isFavorited = favorites.some(fav => fav.id === id);
    
    document.getElementById('modalImage').src = wallpaper.image;
    document.getElementById('modalTitle').textContent = wallpaper.title;
    document.getElementById('modalDescription').textContent = wallpaper.description;
    document.getElementById('modalCategory').textContent = wallpaper.category.charAt(0).toUpperCase() + wallpaper.category.slice(1);
    document.getElementById('modalResolution').textContent = wallpaper.resolution;
    document.getElementById('modalDownloads').textContent = wallpaper.downloads;
    
    const favBtn = document.getElementById('modalFavoriteBtn');
    if (isFavorited) {
        favBtn.classList.add('active');
        favBtn.innerHTML = '<i class="fas fa-heart"></i> Added to Favorites';
    } else {
        favBtn.classList.remove('active');
        favBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
    }
    
    wallpaperModal.classList.add('show');
}

function closeWallpaperModal() {
    wallpaperModal.classList.remove('show');
    currentWallpaper = null;
}

// Toggle favorite
function toggleFavorite() {
    if (!currentWallpaper) return;
    
    const isFavorited = favorites.some(fav => fav.id === currentWallpaper.id);
    
    if (isFavorited) {
        favorites = favorites.filter(fav => fav.id !== currentWallpaper.id);
    } else {
        favorites.push(currentWallpaper);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    
    const favBtn = document.getElementById('modalFavoriteBtn');
    if (favorites.some(fav => fav.id === currentWallpaper.id)) {
        favBtn.classList.add('active');
        favBtn.innerHTML = '<i class="fas fa-heart"></i> Added to Favorites';
        showToast('Added to favorites!', 'success');
    } else {
        favBtn.classList.remove('active');
        favBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
        showToast('Removed from favorites', 'success');
    }
    
    renderGallery();
}

function toggleFavoriteQuick(id) {
    const wallpaper = wallpapers.find(w => w.id === id);
    if (!wallpaper) return;
    
    const isFavorited = favorites.some(fav => fav.id === id);
    
    if (isFavorited) {
        favorites = favorites.filter(fav => fav.id !== id);
    } else {
        favorites.push(wallpaper);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderGallery();
    
    if (favorites.some(fav => fav.id === id)) {
        showToast('Added to favorites!', 'success');
    } else {
        showToast('Removed from favorites', 'success');
    }
}

// Download wallpaper
function downloadWallpaper() {
    if (!currentWallpaper) return;
    downloadWallpaperQuick(currentWallpaper.id);
}

function downloadWallpaperQuick(id) {
    const wallpaper = wallpapers.find(w => w.id === id);
    if (!wallpaper) return;
    
    const link = document.createElement('a');
    link.href = wallpaper.image;
    link.download = `${wallpaper.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    wallpaper.downloads++;
    localStorage.setItem('wallpapers', JSON.stringify(wallpapers));
    showToast('Wallpaper downloaded!', 'success');
    
    if (currentWallpaper && currentWallpaper.id === id) {
        document.getElementById('modalDownloads').textContent = wallpaper.downloads;
    }
}

// Apply filters
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const resolution = resolutionFilter.value;
    const sort = sortFilter.value;
    
    filteredWallpapers = wallpapers.filter(wallpaper => {
        const matchesSearch = !searchTerm || 
            wallpaper.title.toLowerCase().includes(searchTerm) ||
            wallpaper.description.toLowerCase().includes(searchTerm) ||
            wallpaper.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        const matchesCategory = !category || wallpaper.category === category;
        const matchesResolution = !resolution || wallpaper.resolution === resolution;
        
        return matchesSearch && matchesCategory && matchesResolution;
    });
    
    // Sort
    if (sort === 'popular') {
        filteredWallpapers.sort((a, b) => b.downloads - a.downloads);
    } else if (sort === 'trending') {
        filteredWallpapers.sort((a, b) => b.downloads - a.downloads);
    } else {
        filteredWallpapers.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    renderGallery();
}

// Clear filters
function clearFilters() {
    searchInput.value = '';
    categoryFilter.value = '';
    resolutionFilter.value = '';
    sortFilter.value = 'recent';
    applyFilters();
    showToast('Filters cleared!', 'success');
}

// Generate tags
function generateTags() {
    const allTags = new Set();
    wallpapers.forEach(wallpaper => {
        wallpaper.tags.forEach(tag => allTags.add(tag));
    });
    
    allTags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => {
            searchInput.value = tag;
            applyFilters();
        });
        tagsContainer.appendChild(tagElement);
    });
}

// Show favorites
function showFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    favoritesGrid.innerHTML = '';
    
    if (favorites.length === 0) {
        document.getElementById('noFavorites').style.display = 'block';
        favoritesGrid.style.display = 'none';
    } else {
        document.getElementById('noFavorites').style.display = 'none';
        favoritesGrid.style.display = 'grid';
        
        favorites.forEach(wallpaper => {
            const item = document.createElement('div');
            item.className = 'favorite-item';
            item.innerHTML = `<img src="${wallpaper.image}" alt="${wallpaper.title}" onclick="openWallpaperModal(${wallpaper.id})">`;
            favoritesGrid.appendChild(item);
        });
    }
    
    favoritesModal.classList.add('show');
}

function closeFavoritesModal() {
    favoritesModal.classList.remove('show');
}

// Update favorites count
function updateFavoritesCount() {
    document.getElementById('favCount').textContent = favorites.length;
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isDarkTheme = !document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

function loadThemePreference() {
    const theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    }
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}