import "./App.css";
import React, { useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);

  // const interval=useRef(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  let ntime = (time - now) / 1000;

  const handleReset = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = 0;
  };
  return (
    <>
      <div className="demo1">
        <div className="demo2">
          <div className="demo3">
            <h1>TIMER</h1>
            <h1>{ntime.toFixed(2)}</h1>
          </div>
          <div className="demo">
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
