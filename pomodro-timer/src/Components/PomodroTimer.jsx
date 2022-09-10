import { Button } from '@chakra-ui/react';
import React , {useEffect , useState} from 'react'
import TimerDisplay from './TimerDisplay';

export const PomodroTimer = () => {

const [minute, setMinutes] = useState(25);
const [second, setSecond] = useState(0);
const [breakTime, setBreakTime] = useState(false);
const [pauseTime, setPauseTime] = useState(false);
const [circle, setCircle] = useState(0);

const minute_Time = minute <10 ? `0${minute}` : minute;
const second_Time = second <10 ? `0${second}` : second;
var intervalTime;
  useEffect(() => {
    if(pauseTime){
     intervalTime = setInterval(()=>{
       clearInterval(intervalTime);
       if(second == 0){
        if(minute != 0){
          setSecond(59);
          setMinutes(minute-1);
          if(breakTime == true){
          setCircle(circle+20)
          }
          else{
          setCircle(circle+4)
          }

        }
        else{
          let minute = breakTime ? 24 : 4;
          let second = 59;
          setMinutes(minute);
          setSecond(second);
          setCircle(0)
          setBreakTime(!breakTime)
        }
       }
       else{
        setSecond(second-1)
       }
       
       
    },1000)
  }
  }, [second,pauseTime]);

  const handlePause = ()=>{
    setPauseTime(!pauseTime);
  }

  const handleReset = ()=>{
    clearInterval(intervalTime);
    setMinutes(25);
    setSecond(0);
    setCircle(0);
  }


  return (
    <div>
     <TimerDisplay minute_Time={minute_Time} second_Time={second_Time} breakTime={breakTime}  pauseTime={pauseTime} circle={circle} handlePause={handlePause} handleReset={handleReset} />
    </div>
  )
}
  