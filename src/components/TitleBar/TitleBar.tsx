import './TitleBar.css';

interface IProps {
  score: number;
  highScore: number;
}

const TitleBar = ({ score, highScore }: IProps) => {
  return (
    <div id="titleBarContainer">
      <div className="positioningContainer">
        <span
          title="Instructions"
          className="material-symbols-outlined question"
        >
          help
        </span>
      </div>
      <div className="positioningContainer titleTextContainer">
        <h1>CLICK ATTACK</h1>
      </div>
      <div className="scoreContainer positioningContainer">
        <h2 id="highScore">
          <span className="material-symbols-outlined trophy">trophy</span>{' '}
          {highScore}
        </h2>
        <h2 id="currentScore">
          <span className="material-symbols-outlined star">stars</span> {score}
        </h2>
      </div>
    </div>
  );
};

export default TitleBar;
