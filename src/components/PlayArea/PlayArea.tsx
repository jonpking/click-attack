import ClickCard from '../ClickCard/ClickCard';
import './PlayArea.css';

const heroArray = [
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

const PlayArea = () => {
  return (
    <div id="playAreaContainer">
      <div id="playArea">
        {heroArray.map((hero) => (
          <ClickCard image={hero} />
        ))}
      </div>
    </div>
  );
};

export default PlayArea;
