import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 🎮 Fun component using props - like giving presents to components!
function MovieCard({ title, year, emoji }: { title: string; year: number; emoji: string }) {
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

// 🐾 Another fun component - Pet showcase!
function PetCard({ name, type, favoriteFood }: { name: string; type: string; favoriteFood: string }) {
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

// 🌟 Simple component for showing hobbies
function HobbyList() {
  const hobbies = ['🎮 Gaming', '📚 Reading', '🎵 Music', '🚴 cycling', '🍳 Cooking']

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>🌟 Popular Hobbies:</h3>
      <ul style={{ textAlign: 'left', maxWidth: '200px', margin: '0 auto', }}>

        {/* repetitive code below to illustrate the point */}
        <li key={hobbies[0]} style={{ margin: '5px 0' }}>
          {hobbies[0]}
        </li>
        <li key={hobbies[1]} style={{ margin: '5px 0' }}>
          {hobbies[1]}
        </li>
        <li key={hobbies[2]} style={{ margin: '5px 0' }}>
          {hobbies[2]}
        </li>
        <li key={hobbies[3]} style={{ margin: '5px 0' }}>
          {hobbies[3]}
        </li>
        <li key={hobbies[4]} style={{ margin: '5px 0' }}>
          {hobbies[4]}
        </li>

        {/* {hobbies.map(hobby => (
          <li key={hobby} style={{ margin: '5px 0' }}>
            {hobby}
          </li>
        ))} */}
      </ul>
    </div>
  )
}

function App() {
  // 🎯 JSX with variables - the magic starts here!
  const studentName = 'Future React Developer'
  const currentYear = new Date().getFullYear()
  const welcomeMessage = 'Welcome to your first React adventure!'
  const excitementLevel = '💯'

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>🎉 Hello, React World!</h1>

      {/* 🎨 TSX with variables - See how we use {} to put JavaScript in HTML! */}
      <div className="card">
        <h2>✨ JSX Templating Magic</h2>
        <p>{welcomeMessage}</p>
        <p>Hello there, {studentName}! {excitementLevel}</p>
        <p>It's {currentYear} and you're learning React!</p>
        <p>2 + 2 = {2 + 2} (Yes, we can do math in TSX!)</p>
      </div>

      {/* 🎬 Components with Props - Like LEGO blocks! */}
      <div className="card">
        <h2>🎬 Movie Collection (Props Example)</h2>
        <MovieCard title="The Matrix" year={1999} emoji="💊" />
        <MovieCard title="Toy Story" year={1995} emoji="🧸" />
        <MovieCard title="Spider-Man" year={2002} emoji="🕷️" />
      </div>

      {/* 🐾 More Props Fun */}
      <div className="card">
        <h2>🐾 Pet Gallery (More Props!)</h2>
        <PetCard name="Fluffy" type="cat" favoriteFood="tuna" />
        <PetCard name="Buddy" type="dog" favoriteFood="treats" />
        <PetCard name="Goldie" type="goldfish" favoriteFood="fish flakes" />
      </div>

      {/* 📋 List Rendering */}
      <div className="card">
        <HobbyList />
      </div>

      <div className="card" style={{ backgroundColor: '#fff3cd', color: '#000', border: '2px solid #ffc107' }}>
        <h2>🎮 Your Turn to Play!</h2>
        <p>
          Open <code>src/App.tsx</code> and try these challenges:
        </p>
        <ul style={{ textAlign: 'left', maxWidth: '350px', margin: '0 auto', color: '#000' }}>
          <li>🎯 Change the welcome message</li>
          <li>🎬 Add your favorite movie to the collection</li>
          <li>🐾 Create a pet with your name</li>
          <li>🌟 Add a new hobby to the list</li>
          <li>🎨 Change some colors and emojis!</li>
        </ul>
        <p style={{ marginTop: '15px' }}>
          <strong>Remember:</strong> Every time you save, the page updates automatically! ✨
        </p>
      </div>

    </>
  )
}

export default App
