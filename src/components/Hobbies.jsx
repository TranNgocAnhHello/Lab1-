function Hobbies({ hobbiesList }) {
    return (
        <div className="hobbies-section">
            <h2 className="hobbies-title">Hobbies</h2>
            <div className="hobbies-list">
                {hobbiesList.map(function (hobby, index) {
                    return <span key={index} className="hobby-tag">{hobby}</span>
                })}
            </div>
        </div>
    )
}

export default Hobbies 