import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      url: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731605313/sustain-ai-thon/ixpuh0mrjegarfme8xlh.jpg",
      alt: "Hackathon Team Working",
      thumbnail: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731605313/sustain-ai-thon/ixpuh0mrjegarfme8xlh.jpg"
    },
    {
      url: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731609167/sustain-ai-thon/evnd6gm5mik6n1jyaf5o.jpg",
      alt: "Presentation Session",
      thumbnail: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731609167/sustain-ai-thon/evnd6gm5mik6n1jyaf5o.jpg"
    },
    {
      url: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731609166/sustain-ai-thon/se0za6s3fkn9ix4qbdhz.jpg",
      alt: "Workshop Session",
      thumbnail: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731609166/sustain-ai-thon/se0za6s3fkn9ix4qbdhz.jpg"
    },
    {
      url: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731605348/sustain-ai-thon/tkhvivbmbivlpa6uyuid.jpg",
      alt: "Team Discussion",
      thumbnail: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731605348/sustain-ai-thon/tkhvivbmbivlpa6uyuid.jpg"
    },
    {
      url: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731605292/sustain-ai-thon/mogpm5beazirlsjoorob.jpg",
      alt: "Project Development",
      thumbnail: "https://res.cloudinary.com/dvude7m7p/image/upload/v1731605292/sustain-ai-thon/mogpm5beazirlsjoorob.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div ref={galleryRef} className="w-full max-w-6xl mx-auto p-8 min-h-screen">
      {/* Gallery Title with Gradient */}
      <h1 className="text-6xl font-bold text-center justify-center items-center mb-8 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
        GALLERY
      </h1>

      <div className="relative">
        {/* Main Image Container */}
        <motion.div 
          className="relative h-[500px] overflow-hidden rounded-lg mb-4 group"
          initial={{ opacity: 0, y: 20 }} 
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate only when visible
          transition={{ duration: 0.5 }}
        >
          <div className="absolute w-full h-full transition-all duration-700 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
                style={{ transform: `translateX(${index * 100}%)` }}
                initial={{ opacity: 0 }} 
                animate={isVisible ? { opacity: 1 } : {}} // Animate opacity when visible
                transition={{ duration: 0.5 }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Hidden Navigation Arrows - Only Show on Hover */}
          <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="p-2 m-4 rounded-full bg-black/50 hover:bg-black/75 text-white transition-all transform hover:scale-110"
              onClick={() => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
            >
              ‹
            </button>
            <button
              className="p-2 m-4 rounded-full bg-black/50 hover:bg-black/75 text-white transition-all transform hover:scale-110"
              onClick={() => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
            >
              ›
            </button>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden h-20 w-32 rounded-md transition-all ${
                currentIndex === index ? 'ring-2 ring-blue-400' : 'opacity-50 hover:opacity-100'
              }`}
              initial={{ scale: 0.8 }} 
              animate={isVisible ? { scale: 1 } : {}} // Animate scale when visible
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;