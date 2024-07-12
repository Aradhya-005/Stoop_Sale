import React, { useState, useEffect } from 'react';
import '../style/CountDown.css';

const CountDown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return null; // Countdown finished
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear interval on unmount
  }, [targetDate]);

  return (
    <div className="countdown-timer-box">
      {timeLeft ? (
        <div className="countdown-timer">
          <span>{timeLeft.days} Days </span>
          <span>{timeLeft.hours} Hours </span>
          <span>{timeLeft.minutes} Minutes </span>
          <span>{timeLeft.seconds} Seconds </span>
        </div>
      ) : (
        <span>Sale has ended!</span>
      )}
    </div>
  );
};

export default CountDown;
