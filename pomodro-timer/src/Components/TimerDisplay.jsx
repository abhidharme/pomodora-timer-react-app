import {
    Box,
    Center,
    Stack,
    Button,
    useColorModeValue,
    CircularProgress,
    CircularProgressLabel,
    Heading,
    Text,
} from '@chakra-ui/react';
import './TimerDisplay.css';


export default function TimerDisplay({minute_Time,second_Time,breakTime,pauseTime,circle,handlePause,handleReset}) {
    return (
        <>
        <Center py={6}>
        
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                rounded={'lg'}
                p={8}
                textAlign={'center'}>
                <Box>
                <Box>
                <Heading fontSize={{ base: '20px', md: '20px', lg: '20px' }}>
            <Text>
              Pomodoro <Text color={'blue.400'} as={'span'}>
              Time Clock ⌛
            </Text>
            </Text>
          </Heading>
                </Box>
                <br />
                <CircularProgress boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 100%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
                  color='rgb(66, 153, 225)'
                   value={circle} 
                    size='200px'
                     thickness='4px'
                     borderRadius={'full'}>
                <CircularProgressLabel>{minute_Time}:{second_Time}</CircularProgressLabel>
                </CircularProgress></Box>
                <br></br>
                {breakTime && <div className='blink'>5 min Break Time!</div>}

                <Stack mt={8} direction={'row'} spacing={4}>
                {/*Pause Button*/}
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}
                        letterSpacing={1}
                        onClick={handlePause}>
                        {pauseTime ? 'PAUSE' : 'START'}
                    </Button>
                {/*Reset Button*/}
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        letterSpacing={1}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}
                        onClick={handleReset}>
                        RESET
                    </Button>
                </Stack>

                <Stack mt={8} p={3} direction={'row'} spacing={4}>
                <Box><Heading fontSize={'1xl'} >Break Length<Heading color={'black.400'} textShadow={'2px 1px blue;'} fontSize={'2xl'}>5</Heading></Heading></Box>
                <Box><Heading fontSize={'1xl'}>Session Length<Heading color={'black.400'} textShadow={'2px 1px blue;'} fontSize={'2xl'}>25</Heading></Heading></Box>
                </Stack>
            </Box>
        </Center>
        </>
    );
}