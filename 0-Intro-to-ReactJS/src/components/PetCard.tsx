// 🐾 PetCard Component - Shows pet information with props

interface PetCardProps {
    name: string;
    type: string;
    favoriteFood: string;
}

function PetCard({ name, type, favoriteFood }: PetCardProps) {
    return (
        <div style={{
            margin: '10px',
            padding: '15px',
            border: '2px solid #98fb98',
            borderRadius: '10px',
            backgroundColor: '#f0fff0',
            color: '#000'
        }}>
            <h3>🐾 Meet {name}!</h3>
            <p>I'm a {type}</p>
            <p>I love eating {favoriteFood}! 😋</p>
        </div>
    )
}

export default PetCard