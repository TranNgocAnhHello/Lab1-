import { useState } from 'react'
import avatarImg from './assets/avatar.jpg'
import Button from './components/Button.jsx'
import Info from './components/Info.jsx'
import Hobbies from './components/Hobbies.jsx'
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

                <Button
                    isOnline={isOnline} 
                    onStatusClick={handleStatusClick}
                    likes={likes}
                    onLikeClick={handleLikeClick}
                    isDarkMode={isDarkMode}
                    onThemeClick={handleThemeClick}
                />

                <Info
                    studentId={student.studentId}
                    className={student.className}
                    major={student.major}
                />

                <Hobbies hobbiesList={student.hobbies} />
            </div>
        </div>
    )
}

export default App 