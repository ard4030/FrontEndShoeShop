"use client"
import { useTimer } from 'react-timer-hook';
import styles from "./takhfif.module.css"

function Timer() {
//   const expiryTimestamp = new Date('October 1, 2021 00:00:00');
  const expiryTimestamp = new Date('2023/06/24');
  
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (

      <div className={styles.contTimer}>
        <div>
            <span className={styles.cyel}>{seconds}</span>
            <span>ثانیه</span>
        </div>
        <div>
            <span>{minutes}</span>
            <span>دقیقه</span>
        </div>
        <div>
            <span>{hours}</span>
            <span>ساعت</span>
        </div>
        <div>
            <span>{days}</span>
            <span>روز</span>
        </div>
      </div>
      

  );
}

export default Timer

{/* <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300); // 5 minutes timer
        restart(time)
      }}>Restart</button> */}