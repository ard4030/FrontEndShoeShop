"use client"
import { useState, useEffect } from 'react';

function Timer({time=0}) {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className='fn12 inum tcenter mt15'>
      {seconds >= 0 ? (
        <>{minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds} دقیقه تا دریافت مجدد کد</>
      ) : (
        <div>
            ارسال مجدد کد
        </div>
      )}
    </div>
  );
}

export default Timer;