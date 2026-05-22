function Button({ isOnline, onStatusClick, likes, onLikeClick, isDarkMode, onThemeClick }) {
    return (
        <div className="button-group">
            <button 
                className={`status-badge ${isOnline ? 'online' : 'offline'}`} 
                onClick={onStatusClick}
            >
                {isOnline ? 'Online' : 'Offline'}
            </button>

            <button className="like-button" onClick={onLikeClick}>
                Likes: {likes}
            </button>
            <button className="theme-button" onClick={onThemeClick}>
                {isDarkMode ? 'Light' : 'Dark'}
            </button>
        </div>
    )
}

export default Button