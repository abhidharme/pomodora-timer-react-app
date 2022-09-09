import { Box, useToast } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { logout_request_Success } from '../Redux/action';


export const Timer = () => {

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
        </div>
    )
}
