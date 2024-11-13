const Card = ({ img, theme, description, goals }) => {
  return (
    <div className="bg-[#00AEAD] rounded-lg p-5 flex flex-col">
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

export default Card;