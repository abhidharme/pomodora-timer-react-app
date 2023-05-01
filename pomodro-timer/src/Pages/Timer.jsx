import { Box } from '@chakra-ui/react';
import React , {useState} from "react";
import Navbar from '../Components/Navbar';
import { PomodroTimer } from '../Components/PomodroTimer';
import { GoogleLogout } from 'react-google-login';
import { profile_data_Success } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Timer = () => {

  const {profile_name} = useSelector((state)=>state.profile_data);

  const clientId = '542698749200-ldqnta8fc8cb8saggeqj5k5hv491dtnj.apps.googleusercontent.com';
  const dispatch = useDispatch();  
  const [navigateToLogin, setNavigateToLogin] = useState(profile_name);


  

  const handleLogoutSuccess = () => {
    console.clear();
    const p_data = {
      profile_img:'https://avatars.dicebear.com/api/male/username.svg',
      profile_name:'Welecome Guest'
  }
  dispatch(profile_data_Success(p_data));
   setNavigateToLogin('Welecome Guest');
};

//Navigate to login if user not login
if(navigateToLogin == 'Welecome Guest'){
  return <Navigate to='/' />
}
    

    return (
        <div>
            <Box><Navbar/></Box>
            <Box position={'absolute'}
            top='2'
            left='3'
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }>
          {/*Google Logout Button*/}
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={handleLogoutSuccess}
        >
        </GoogleLogout> 
            </Box>
            <Box>
            <PomodroTimer/>
            </Box>
        </div>
    )
}
