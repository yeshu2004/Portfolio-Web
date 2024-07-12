import React, { useState, useEffect } from 'react';

const time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-xl font-bold">Time</h1>
      <p className="text-2xl">{formatTime(time)}</p>
    </div>
  );
};

export default time;
