import { useState } from 'react'
import avatarImg from './assets/avatar.jpg'
import './App.css'

const student = {
    avatar: avatarImg,
    fullName: "Trần Ngọc Anh",
    studentId: "HE204392",
    className: "SE2009",
    major: "Software Engineering",
    hobbies: ["Coding", "Traveling"],
    isOnline: true,
}

function App() {
    const [isOnline, setIsOnline] = useState(student.isOnline)
    const [likes, setLikes] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(false)

    function handleStatusClick() {
        setIsOnline(!isOnline)
    }

    function handleLikeClick() {
        setLikes(likes + 1)
    }

    function handleThemeClick() {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className={`card ${isDarkMode ? 'dark' : ''}`}>
            <div className="card-banner"></div>

            <div className="avatar-wrapper">
                <img src={student.avatar} alt={student.fullName} className="avatar" />
                <span className={`status-dot ${isOnline ? 'online' : 'offline'}`}></span>
            </div>

            <div className="card-body">
                <h1 className="student-name">{student.fullName}</h1>

                <div className="button-group">
                    <button 
                        className={`status-badge ${isOnline ? 'online' : 'offline'}`} 
                        onClick={handleStatusClick}
                    >
                        {isOnline ? 'Online' : 'Offline'}
                    </button>

                    <button 
                        className="like-button" 
                        onClick={handleLikeClick}
                    >
                        Likes: {likes}
                    </button>

                    <button 
                        className="theme-button" 
                        onClick={handleThemeClick}
                    >
                        {isDarkMode ? 'Light' : 'Dark'}
                    </button>
                </div>

                <div className="info-grid">
                    <div className="info-item">
                        <span className="info-label">Student ID</span>
                        <span className="info-value">{student.studentId}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Class</span>
                        <span className="info-value">{student.className}</span>
                    </div>
                    <div className="info-item full-width">
                        <span className="info-label">Major</span>
                        <span className="info-value">{student.major}</span>
                    </div>
                </div>

                <div className="hobbies-section">
                    <h2 className="hobbies-title">Hobbies</h2>
                    <div className="hobbies-list">
                        {student.hobbies.map(function (hobby, index) {
                            return <span key={index} className="hobby-tag">{hobby}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App