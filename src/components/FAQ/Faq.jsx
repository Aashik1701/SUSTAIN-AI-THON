import Accordion from "./Accordion";
import FaqBG from "./FaqBG";
import "./Faq.css";
import RegisterButton from "../Register/RegisterButton";

const Faq = () => {
  const faqs = [
    {
      title: "What are the benefits of participating in this hackathon?",
      content: "Participants can win cash prizes 💰, goodies, internship opportunities 💼, and gain exposure to AI and sustainability projects 🌱."
    },
    {
      title: "What types of projects are suitable for this hackathon?",
      content: "Projects should focus on using AI to advance sustainable practices 🌍, aligning with the theme SDG Needs AI.🤖"
    },
    {
      title: "Who can participate in the hackathon?",
      content: "The event is open to students with teams of 2 to 4 members. Teams can include participants from various backgrounds 🎓."
    },
    {
      title: "What should we bring to the event?",
      content: "Bring your laptops 💻, chargers ⚡, and any necessary software or tools. Additional materials may be provided at the venue."
    },
    {
      title: "Will there be mentorship or guidance during the hackathon?",
      content: "The venue will have Wi-Fi 🌐, workstations, food, rest areas, and all the necessary resources for the hackathon."
    },
    {
      title: "Are there any bonus points, and how can we earn them?",
      content: "Bonus points ⭐are awarded for working on special problem statements provided by sponsors, and for submitting a working prototype."
    },
    {
      title: "How will the projects be judged?",
      content: "Projects will be judged based on innovation 💡, feasibility ✔, alignment with the theme, and presentation quality 🎤."
    },
    {
      title: "What is the process for winning internships through this event?",
      content: "Selected participants will be offered internship opportunities 💼 based on their project’s relevance and quality."
    },
    {
      title: "What happens if our team cannot complete the project within the event timeframe?",
      content: "Partial submissions are allowed, but the project’s scope and working prototype will be key to judging🏆."
    },
    {
      title: "Is prior experience with AI necessary to participate?",
      content: "No, all participants are welcome 🙌. Prior AI knowledge is helpful but not required 🤖."
    },
  ];

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <FaqBG />
      <div className="absolute top-0 left-0 flex flex-col w-screen h-screen pl-10 sm:pl-20 justify-evenly">
        <div className="text-5xl font-semibold text-white">FAQs</div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col w-full sm:w-1/2">
            {faqs.slice(0, 5).map((faq, index) => (
              <Accordion key={index} title={faq.title} content={faq.content} />
            ))}
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            {faqs.slice(5).map((faq, index) => (
              <Accordion key={index + 5} title={faq.title} content={faq.content} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white sm:gap-4">
      <div className="text-3xl font-semibold">Still have questions?</div>
      <div className="text-base">Contact our coordinators:</div>
      <div className="w-10/12 text-base lg:w-3/12">
        <div>Om Mishra: +91 99902 50728</div>
        <div>Melvin: +91 90800 59840</div>
        <div>Aashik: +91 63821 43070</div>
      </div>
      <div className="text-base">
        <RegisterButton className="py-3 border-white px-7 bg-blue-600 hover:bg-blue-700 transition duration-300" />
      </div>
    </div>
      </div>
    </div>
  );
};

export default Faq;