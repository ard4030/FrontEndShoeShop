"use client"
import React from 'react';
import { useTimer } from 'react-timer-hook';
import styles from "./slider5.module.css"

function MyTimer({startD,endD}) {
//   const expiryTimestamp = new Date('October 1, 2021 00:00:00');
  console.log(endD)
  const expiryTimestamp = new Date(endD);
  
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
        <span>{days} روز</span>
        <span>{hours} ساعت</span>
        <span>{minutes} دقیقه</span>
        <span>{seconds} ثانیه</span>
      </div>
      

  );
}

export default MyTimer

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