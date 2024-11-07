import React from 'react'

const Location = () => {
  return (
    <section id="Location" className="flex flex-col items-center justify-center gap-10 p-10">
    <h1 className="inter-semibold text-3xl md:text-4xl lg:text-5xl text-white">Ideathon Competition</h1>
    <div className='inter-semibold flex items-start justify-center gap-8 text-white'>
        <span>VIT CHENNAI</span>
        <span>KELAMBAKKAM</span>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
    <div className='w-full'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040785932438!2d80.1508533748907!3d12.840640987462882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20Chennai!5e0!3m2!1sen!2sin!4v1730998446781!5m2!1sen!2sin" 
  allowfullscreen="" className='w-full sm:w-[500px] h-[450px] rounded-sm'
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>    
    <div>
        <h1 className='inter-semibold text-3xl text-white p-5 flex items-center justify-center tracking-widest'>Competition Venue</h1>
        <h1 className='inter-semibold text-2xl text-white p-5 flex items-center justify-center tracking-wider'>MG Auditorium</h1>

    </div>
    </div>
    </section>
  )
}

export default Location
