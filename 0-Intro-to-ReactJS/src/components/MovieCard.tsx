// 🎬 MovieCard Component - Shows movie information with props

interface MovieCardProps {
    title: string;
    year: number;
    emoji: string;
}

function MovieCard({ title, year, emoji }: MovieCardProps) {
    return (
        <div style={{
            margin: '10px',
            padding: '15px',
            border: '2px solid #61dafb',
            borderRadius: '10px',
            backgroundColor: '#f0f8ff',
            color: '#000'
        }}>
            <h3>{emoji} {title}</h3>
            <p>Released in: {year}</p>
            <p>That's {2024 - year} years ago!</p>
        </div>
    )
}

export default MovieCard