import PlayArea from './components/PlayArea/PlayArea';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';

function App() {
  return (
    <>
      <div id="gameContainer">
        <TitleBar />
        <PlayArea />
      </div>
    </>
  );
}

export default App;
