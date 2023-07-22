import { useState } from 'react';
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

const PlayArea = () => {
  const [heroArray, setHeroArray] = useState(shuffleHeroes(seededArray));

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHeroArray(shuffleHeroes(heroArray));
    console.log(e.target);
  };

  return (
    <div id="playAreaContainer">
      <div id="playArea">
        {heroArray.map((hero) => (
          <ClickCard onClick={handleClick} image={hero} key={hero} />
        ))}
      </div>
    </div>
  );
};

export default PlayArea;
