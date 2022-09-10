import { Box, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { PomodroTimer } from '../Components/PomodroTimer';
import { logout_request_Success } from '../Redux/action';


export const Timer = () => {
     const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timer, setTimer] = useState();
  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };
  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);
    }
  }, [secondsLeft, timer]);
  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

    const data = useSelector((state) => state.logout_data)
    //console.log('data',data)
    const dispatch = useDispatch();
    const toast = useToast()

    const handleLogout = () => {

        dispatch(logout_request_Success(false));
        toast({
            title: `Successfully Logout`,
            status: 'success',
            position:'top',
            isClosable: true,
        })
    }

    if (data == false) {
        return <Navigate to={'/'} />
    }

    return (
        <div>
            <Box><Navbar handleLogout={handleLogout} /></Box>
            <Box>
            <PomodroTimer/>
            </Box>
        </div>
    )
}
