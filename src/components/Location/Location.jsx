// Location.jsx

const Location = () => {
  return (
    <section id="Location" className="flex flex-col items-center justify-center gap-10 p-5 md:p-10 mt-8">
      <h1 className="inter-semibold text-3xl md:text-4xl lg:text-5xl text-white text-center ">Ideathon Competition</h1>
      <div className='inter-semibold flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-2 sm:p-2 text-white'>
        <span className="text-center md:text-left">VIT CHENNAI</span>
        <span className="text-center md:text-left">KELAMBAKKAM</span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
        <div className='w-full'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040785932438!2d80.1508533748907!3d12.840640987462882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20Chennai!5e0!3m2!1sen!2sin!4v1730998446781!5m2!1sen!2sin" 
            allowFullScreen 
            className='w-full h-[300px] sm:h-[450px] rounded-sm shadow-[20px_20px_50px_rgba(34,_197,_94,_0.7)]'
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>    
        <div className="flex flex-col items-center">
          <h1 className='inter-semibold text-3xl text-white p-5 flex items-center justify-center tracking-widest'>Competition Venue</h1>
          <h1 className='inter-semibold text-2xl text-white p-5 flex items-center justify-center tracking-wider'>MG Auditorium</h1>
          <img 
            src="https://res.cloudinary.com/dvude7m7p/image/upload/v1731070506/sustain-ai-thon/xl22o9qwrfzvpgovbrlq.png" // Replace with the actual path to your image
            alt="MG Auditorium" 
            className="mt-4 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-md shadow-lg" // Adjust classes as needed
          />
        </div>
      </div>
    </section>
  )
}

export default Location;