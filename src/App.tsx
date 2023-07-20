import PlayArea from './components/PlayArea/PlayArea';
import TextArea from './components/TextArea/TextArea';
import './App.css';

function App() {
  return (
    <>
      <div id="gameContainer">
        <PlayArea />
        <TextArea />
      </div>
    </>
  );
}

export default App;
