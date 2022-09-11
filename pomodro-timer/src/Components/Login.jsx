import { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import {
    Stack,
    Box,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    useBreakpointValue,
    Icon,
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { profile_data_Success } from '../Redux/action';
import { useDispatch } from 'react-redux';

function Login() {
    //Client ID take from Google Cloude
    const clientId = '542698749200-ldqnta8fc8cb8saggeqj5k5hv491dtnj.apps.googleusercontent.com';


    const dispatch = useDispatch();

    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const [navigateToTimer, setNavigateToTimer] = useState(false);

    // use gapi script to d initialize some functions
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, []);


    //login function
    const handleLoginSuccess = (res) => {
        // dispatch user profile image and name 
        const p_data = {
            profile_img: res.profileObj.imageUrl,
            profile_name: res.profileObj.name
        }
        dispatch(profile_data_Success(p_data))
        console.log('Login data:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
        setNavigateToTimer(res.profileObj.googleId)
    };
   
    //failure function
    const handleLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    //Logout Function 
    const handleLogoutSuccess = () => {
        // dispatch dummy profile image and name 
        const p_data = {
            profile_img: 'https://avatars.dicebear.com/api/male/username.svg',
            profile_name: 'Welecome Guest'
        }
        dispatch(profile_data_Success(p_data))
        console.clear();
        setShowLoginButton(true);
        setShowLogoutButton(!navigateToTimer);
    };

    if (navigateToTimer) {
        return <Navigate to={'/timer'} />
    }


    return (
        <>
            <Box position={'relative'}>
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 32 }}
                    py={{ base: 10, sm: 20, lg: 32 }}>
                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                            Welcome To Pomodro Timer{' '}
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                Web
                            </Text>{' '}
                            Application
                        </Heading>

                    </Stack>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}>
                        <Stack spacing={4}>
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                                Sing In With Google
                                <Text
                                    as={'span'}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    bgClip="text">
                                    !
                                </Text>

                            </Heading>
                        </Stack>
                        <Box mt={10}>
                            <Button fontFamily={'heading'}
                                mt={8}
                                h={20}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)',
                                }}
                            >
                                {/*Login Button*/}
                                {showLoginButton ?
                                    <GoogleLogin
                                        clientId={clientId}
                                        buttonText="Sign In With Google"
                                        onSuccess={handleLoginSuccess}
                                        onFailure={handleLoginFailure}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={true}
                                    /> : null}

                                {/*Logout Button*/}
                                {showLogoutButton ?
                                    <GoogleLogout
                                        clientId={clientId}
                                        buttonText="Sign Out"
                                        onLogoutSuccess={handleLogoutSuccess}
                                    >
                                    </GoogleLogout> : null
                                }
                            </Button>
                        </Box>
                    </Stack>
                </Container>
                <Blur
                    position={'absolute'}
                    top={-10}
                    left={-10}
                    style={{ filter: 'blur(70px)' }}
                />
            </Box>
        </>
    );
}
export default Login;

export const Blur = (IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...IconProps}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};
