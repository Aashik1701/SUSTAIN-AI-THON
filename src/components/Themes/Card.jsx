import PropTypes from 'prop-types';

const Card = ({ img, theme, description, goals }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 flex flex-col">
      <img src={img} alt={theme} className="rounded-lg mb-4" />
      <h2 className="text-xl font-bold mb-2">{theme}</h2>
      <p className="mb-2">{description}</p>
      <ul className="list-disc pl-5">
        {goals.map((goal, index) => (
          <li key={index} className="text-sm">{goal}</li>
        ))}
      </ul>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;