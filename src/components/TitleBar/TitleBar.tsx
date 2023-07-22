import './TitleBar.css';

interface IProps {
  score: number;
  highScore: number;
}

const TitleBar = ({ score, highScore }: IProps) => {
  return (
    <div id="titleContainer">
      <h2>High Score: {highScore}</h2>
      <h1>CLICK ATTACK</h1>
      <h2>Current Score: {score}</h2>
    </div>
  );
};

export default TitleBar;
