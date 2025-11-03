// 🌟 HobbyList Component - Shows a list of popular hobbies

function HobbyList() {
    const hobbies = ['🎮 Gaming', '📚 Reading', '🎵 Music', '🏃‍♂️ Running', '🍳 Cooking']

    return (
        <div style={{ margin: '20px 0' }}>
            <h3>🌟 Popular Hobbies:</h3>
            <ul style={{ textAlign: 'left', maxWidth: '200px', margin: '0 auto' }}>
                {hobbies.map(hobby => (
                    <li key={hobby} style={{ margin: '5px 0' }}>
                        {hobby}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HobbyList