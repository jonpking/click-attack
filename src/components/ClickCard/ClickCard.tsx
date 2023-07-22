import './ClickCard.css';

interface IProps {
  image: string;
  onClick: React.MouseEventHandler;
}

const ClickCard = ({ image, onClick }: IProps) => {
  return (
    <img
      onClick={onClick}
      src={`/images/${image}.png`}
      alt={`${image} image`}
    />
  );
};

export default ClickCard;
