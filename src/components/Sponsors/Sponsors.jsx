const sponsorsData = [
  {
    name: 'Sponsor One',
    logo: './src/assets/AicLogo.png',
    description: 'Description for sponsor one.',
  },
  {
    name: 'Sponsor Two',
    logo: './src/assets/AicLogo.png',
    description: 'Description for sponsor two.',
  },
  {
    name: 'Sponsor Three',
    logo: './src/assets/AicLogo.png',
    description: 'Description for sponsor three.',
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="p-8 bg-black text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Sponsors</h2>
      <p className="mt-4 text-center mb-8">Our sponsors make this event possible. We are grateful for their support!</p>
      <div className="flex flex-wrap justify-center gap-8">
        {sponsorsData.map((sponsor, index) => (
          <div key={index} className="bg-green-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="h-24 mb-4" />
            <h3 className="text-xl font-semibold text-center">{sponsor.name}</h3>
            <p className="text-center mt-2">{sponsor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
