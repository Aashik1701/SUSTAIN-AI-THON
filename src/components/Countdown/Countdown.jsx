import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center w-screen gap-10 text-white bg-black py-28">
      <div className="text-3xl font-bold text-center sm:text-5xl">
        <span className="text-outline">HACKATHON</span>{" "}
        <span className="text-transparent bg-gradient-to-r from-GreenGradientCountDown to-BlueGradientCountDown bg-clip-text">
          WILL CONCLUDE BY
        </span>
      </div>
      <div className="grid items-center justify-center grid-cols-2 gap-4 sm:flex sm:flex-row sm:gap-10">
        <div className="flex flex-col justify-center items-center h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full bg-gradient-to-b via-BlueGradientCountDown/0 from-BlueGradientCountDown to-black">
          <div className="text-4xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-GreenGradientCountDown to-BlueGradientCountDown bg-clip-text">
            {timeLeft.days}
          </div>
          <div className="text-xl font-semibold sm:text-2xl">DAYS</div>
        </div>
        <div className="flex flex-col justify-center items-center h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full bg-gradient-to-b via-GreenGradientCountDown/0 from-black to-GreenGradientCountDown">
          <div className="text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl text-outline">
            {timeLeft.hours}
          </div>
          <div className="text-xl font-semibold sm:text-2xl">HOURS</div>
        </div>
        <div className="flex flex-col justify-center items-center h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full bg-gradient-to-b via-BlueGradientCountDown/0 from-BlueGradientCountDown to-black">
          <div className="text-4xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-GreenGradientCountDown to-BlueGradientCountDown bg-clip-text">
            {timeLeft.minutes}
          </div>
          <div className="text-xl font-semibold sm:text-2xl">MINUTES</div>
        </div>
        <div className="flex flex-col justify-center items-center h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full bg-gradient-to-b via-GreenGradientCountDown/0 from-black to-GreenGradientCountDown">
          <div className="text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl text-outline">
            {timeLeft.seconds}
          </div>
          <div className="text-xl font-semibold sm:text-2xl">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
