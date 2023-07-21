import './ClickCard.css';

interface IProps {
  image: string;
}

const ClickCard = ({ image }: IProps) => {
  return <img src={`src/assets/images/${image}.png`} alt={`${image} image`} />;
};

export default ClickCard;
