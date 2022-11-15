import React, { useState, useEffect } from "react";

export default function App() {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div>
        <h5>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds} 초
        </h5>
    </div>
  );
}
