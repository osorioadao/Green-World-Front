import PropTypes from 'prop-types';
import PrimaryButton from './PrimaryButton';

interface CardProps {
  cards: {
    image: string;
    description: string;
    button: string;
    imageAlt: string;
  }[];
}

export default function Card({ cards }: CardProps) {
  return (
    <div className='flex flex-wrap flex-row items-center justify-center gap-[10px]'>
      {cards.map((card, index) => (
        <div key={index} className='flex transition delay-75  hover:scale-105 flex-col items-center justify-center w-[26rem] h-[26rem] gap-[10px]'>
          <div>
            <img className='w-[16rem] h-[10rem]' src={card.image} alt={card.imageAlt} />
          </div>
          <div className='flex column text-center w-[22rem]'>
            <p>{card.description}</p>
          </div>
          <div>
            <PrimaryButton name={card.button} addClassName='w-[13rem]' />
          </div>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      imageAlt: PropTypes.string,
      description: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,
    })
  ).isRequired,
};