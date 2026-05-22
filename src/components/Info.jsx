function Info({ studentId, className, major }) {
    return (
        <div className="info-grid">
            <div className="info-item">
                <span className="info-label">Student ID</span>
                <span className="info-value">{studentId}</span>
            </div>
            <div className="info-item">
                <span className="info-label">Class</span>
                <span className="info-value">{className}</span>
            </div>
            <div className="info-item full-width">
                <span className="info-label">Major</span>
                <span className="info-value">{major}</span>
            </div>
        </div>
    )
}

export default Info 