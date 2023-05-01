import React, { useEffect, useState } from 'react'
import TimerDisplay from './TimerDisplay';
import ringer from "./mixkit-city-alert-siren-loop-1008.mp3"

export const PomodroTimer = () => {

  
  const [minute, setMinutes] = useState(1);
  const [second, setSecond] = useState(0);
  const [breakTime, setBreakTime] = useState(false);
  const [pauseTime, setPauseTime] = useState(false);
  const [circle, setCircle] = useState(0);
  const [musicPaly, setMusicPlay] = useState(false);


  //show always two digits on ui
  const minute_Time = minute < 10 ? `0${minute}` : minute;
  const second_Time = second < 10 ? `0${second}` : second;

  const audio = new Audio(ringer);
   audio.loop = musicPaly;

  const playAlarm = ()=>{
      audio.loop = musicPaly;
      audio.play();
      console.log("first")
  }
  var intervalTime;
   // set the pomodoro clock timer 
  useEffect(() => {
    if (pauseTime) {
      intervalTime = setInterval(() => {
        clearInterval(intervalTime);
        if (second == 0) {
          if (minute != 0) {
            setSecond(1);
            setMinutes(minute - 1);
            if (breakTime == true) {
              setCircle(circle + 20)
              if(minute <= 3){
                setMusicPlay(false)
              }
            }
            else {
              setCircle(circle + 4)
            }
          }
          else {
            let minute = breakTime ? 24 : 4;
            let second = 59;
            setMinutes(minute);
            setSecond(second);
            setCircle(0)
            setBreakTime(!breakTime)

           if(minute == 4){
             setMusicPlay(true)
              console.log("shjjhjshf" , breakTime , minute)
                playAlarm()
           }
          }
        }
        else {
          setSecond(second - 1)
        }


      }, 1000)
    }
  }, [second, pauseTime]);

  //function for the pause time
  const handlePause = () => {
    setPauseTime(!pauseTime);
  }

  //function for the reset time
  const handleReset = () => {
    clearInterval(intervalTime);
    setMinutes(25);
    setSecond(0);
    setCircle(0);
  }


  return (
    <div>
      <TimerDisplay minute_Time={minute_Time} second_Time={second_Time} breakTime={breakTime} pauseTime={pauseTime} circle={circle} handlePause={handlePause} handleReset={handleReset} />
    </div>
  )
}
