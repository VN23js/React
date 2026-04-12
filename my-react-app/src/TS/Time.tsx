import { useEffect, useState } from 'react';

const targetDate = new Date('2026-04-12T12:00:00');
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
function getDayWord(days: number): string {
  return 'дней';
}
function getTimeDate(arg: Date): TimeLeft {
  const nowDate = new Date();
  const diff = arg.getTime() - nowDate.getTime();
  console.log(diff);
  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return {
    days: days,
    hours: hour,
    minutes: minutes,
    seconds: seconds,
  };
}

export default function Timer() {
  const [time, setTime] = useState<TimeLeft>(getTimeDate(targetDate));
  useEffect(() => {
    const interval = setInterval(() => {
      const newtime = getTimeDate(targetDate);
      setTime(newtime);
      if (
        newtime.days === 0 &&
        newtime.hours === 0 &&
        newtime.minutes === 0 &&
        newtime.seconds === 0
      ) {
        clearInterval(interval);
      }
    }, 1000);
    console.log(time, 'mount');

    return () => {
      clearInterval(interval);
      console.log('Umount');
    };
  }, []);
  return (
    <>
      <div className='p-2'>
        <div className='event-banner mx-auto'>
          <div className='z-10 relative flex max-w-fit gap-1.5 flex-col items-center  '>
            <div className='text_teplo_poshlo'></div>
            <div className='relative'>
              <div className='timer font-geo'>
                {time.days} дней {time.hours}:{time.minutes}:{time.seconds}
              </div>
              <div className='button_banner font-geo'>К Ивенту</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
