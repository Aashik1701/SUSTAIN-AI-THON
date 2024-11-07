import { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2023-12-12') - +new Date();
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
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="time-segment">
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="timer-container">
            <h1 className="timer-title">Countdown to December 12th</h1>
            <div className="timer">
                {timerComponents.length ? timerComponents : <span>Times up!</span>}
            </div>
        </div>
    );
};

export default Timer;
