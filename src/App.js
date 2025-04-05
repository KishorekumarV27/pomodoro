import './index.css';
import { useState, useRef } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState(1500); //25 minutes in secs
  const intervalRef = useRef(null);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  // Format time to MM:SS
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(1, "0")}:${String(remainingSeconds).padStart(1, "0")}`;
  }

  return (
    <div className="wrapper">
      <h1>Pomodoro Timer</h1>

      <div className="timer-display">
        <span>{formatTime(timeLeft)}</span>
      </div>

      <div className="buttons">
        <button class="start" onClick={startTimer}>START</button>

        <button class="stop" onClick={stopTimer}>STOP</button>
      </div>
    </div>
  );
}

export default App;
