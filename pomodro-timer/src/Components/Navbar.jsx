import {
    Box,
    Flex,
    Avatar,
    HStack,
    Image,
    Button,
    Text,
    useColorModeValue,
    useColorMode,
    useDisclosure
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Navbar({handleLogout}) {
    const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

const profiles = useSelector((state)=>state.profile_data)

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Button
                        fontSize={'sm'}
                        fontWeight={600}
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
                        fontFamily='revert-layer'
                        letterSpacing={1}
                        onClick={handleLogout}
                        >
                        LOGOUT
                    </Button>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box> <Image id='rotate_img' boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 100%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} cursor={'pointer'}
                            objectFit={'cover'}
                            borderRadius='full'
                            src='https://w7.pngwing.com/pngs/512/186/png-transparent-pomodoro-technique-timer-android-android-food-tomato-fruit-thumbnail.png' w="50px" h="50px" />
                        </Box>
                    </HStack>
                    


                    <Flex alignItems={'center'} spacing={4}>
                    <Button boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    } onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>
                        <pre>  </pre>
                            <Button
                                as={Text}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                                color="white"
                                bg={'rgb(66 153 225)'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                }>
                                <Avatar
                                    size={'sm'}
                                    src={profiles.profile_img}
                                />{profiles.profile_name}<pre> </pre>
                            </Button>
                    </Flex>
                </Flex>

            </Box>
        </>
    );
}