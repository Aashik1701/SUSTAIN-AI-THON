
import { Linkedin, Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: 'DR. Dhavakumar P',
    role: 'AIC Faculty Coordinator',
    image: '/src/assets/Core/Aic2.jpg',
    linkedin: 'https://www.linkedin.com/in/dhavakumar-p-408907250/'
    
  },
  {
    name: 'DR. Sivabalakrishnan M',
    role: 'AIC Faculty Coordinator',
    image: '/src/assets/Core/Aic1.jpg',
    linkedin: 'https://www.linkedin.com/in/sivabalakrishnan-m-07246722/'
  },
  {
    name: 'Dr. Umayal C',
    role: 'Biosphere Faculty Coordinator',
    image: '/src/assets/Core/bioshpereMam.jpg',
    linkedin: 'https://www.linkedin.com/in/umayal-chandrahasan-15b4b7b7/'
  },
  {
    name: 'Mohammed Aashik',
    role: 'Event Coordinator',
    image: '/src/assets/Core/aashik.jpeg',
    linkedin: 'https://www.linkedin.com/in/mohammed-aashik-f-690418263/',
    instagram: 'https://www.instagram.com/_ashik_1701_/'
  },
  {
    name: 'Melvin',
    role: 'Event Coordinator',
    image: '/src/assets/Core/melvin.jpg',
    linkedin: 'https://www.linkedin.com/in/melvin-b-88281626a/',
    instagram: 'https://www.instagram.com/_mr.redwing_/'
  }
];

const Mastermind = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-8xl mx-auto">
        {/* Main Container - Flex on medium screens and up */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Box - Event Content */}
          <div className="lg:w-1/2 p-6 rounded-2xl backdrop-blur-sm">
            <div className="sticky top-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                THE <span className="font-light">SUSTAIN-AI-THON</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                BEHIND THE{' '}
                <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  SUSTAIN-AI-THON
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                The Sustain-AI-Thon serves as a crucial intersection between AI technology and sustainability, offering
                participants valuable exposure to various fields where artificial intelligence is instrument in advancing sustainable
                practices. This 24-hour hackathon invites each team to present ideas that collectively bring us closer to a
                sustainable planet.
              </p>
              
              {/* Additional Event Details */}
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">Event Highlights</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>24-Hour Intensive Hackathon</li>
                    <li>Focus on AI & Sustainability</li>
                    <li>Expert Mentorship</li>
                    <li>Innovative Problem Solving</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">What to Expect</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Hands-on AI Implementation</li>
                    <li>Sustainable Solutions Development</li>
                    <li>Networking Opportunities</li>
                    <li>Real-world Impact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Box - Team Members Grid */}
          <div className="lg:w-1/2 p-6 rounded-2xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-b from-gray-800/0 to-gray-800">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                    
                    {/* Social Media Icons */}
                    <div className="flex gap-3 mt-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="mt-8 text-center">
              <button 
                onClick={() => window.location.href = '/CoreTeam'}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                VIEW MORE
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Background Element */}
        <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-500/10 to-transparent -z-10" />
      </div>
    </div>
  );
};

export default Mastermind;