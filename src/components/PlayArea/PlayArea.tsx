import { useEffect, useState } from 'react';
import ClickCard from '../ClickCard/ClickCard';
import './PlayArea.css';

const seededArray = [
  'antimage',
  'bounty_hunter',
  'bristleback',
  'crystal_maiden',
  'disruptor',
  'earthshaker',
  'furion',
  'grimstroke',
  'lina',
  'meepo',
  'oracle',
  'primal_beast',
  'pudge',
  'shadow_shaman',
  'skywrath_mage',
  'tidehunter',
  'tiny',
  'venomancer',
  'windrunner',
  'winter_wyvern',
];

const shuffleHeroes = (array: string[]) => {
  const shuffledArray = [...array];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
};

interface IProps {
  setScore: (newScore: number) => void;
  score: number;
  setHighScore: (newHighScore: number) => void;
  highScore: number;
}

const PlayArea = ({ setScore, score, setHighScore, highScore }: IProps) => {
  const [heroArray, setHeroArray] = useState(shuffleHeroes(seededArray));
  const [chosenHeroes, setChosenHeroes] = useState<string[]>([]);

  const handleClick = (e: React.MouseEvent, hero: string) => {
    e.preventDefault();
    console.log(hero);
    setChosenHeroes((chosenHeroes) => [...chosenHeroes, hero]);
    setHeroArray(shuffleHeroes(heroArray));
    if (!chosenHeroes.includes(hero)) {
      const newScore = score + 1;
      setScore(newScore);
    } else if (score > highScore) {
      const newHighScore = score;
      setHighScore(newHighScore);
      setScore(0);
    } else {
      setScore(0);
    }
  };

  useEffect(() => {
    console.log(chosenHeroes, 'chosen');
  }, [chosenHeroes]);

  return (
    <div id="playAreaContainer">
      <div id="playArea">
        {heroArray.map((hero) => (
          <ClickCard
            onClick={(e) => handleClick(e, hero)}
            image={hero}
            key={hero}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayArea;
