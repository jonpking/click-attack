import { useState } from 'react';
import PlayArea from './components/PlayArea/PlayArea';
import TitleBar from './components/TitleBar/TitleBar';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <div id="gameContainer">
        <TitleBar score={score} highScore={highScore} />
        <PlayArea
          setScore={setScore}
          score={score}
          setHighScore={setHighScore}
          highScore={highScore}
        />
      </div>
    </>
  );
}

export default App;
