import {
    Box,
    Flex,
    Avatar,
    HStack,
    Image,
    Button,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';


export default function Navbar({handleLogout}) {

const profiles = useSelector((state)=>state.profile_data)

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Button
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        _hover={{
                            bg: 'pink.300',
                        }}
                        onClick={handleLogout}
                        >
                        Logout
                    </Button>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box> <Image cursor={'pointer'}
                            objectFit={'cover'}
                            borderRadius='full'
                            src='https://w7.pngwing.com/pngs/512/186/png-transparent-pomodoro-technique-timer-android-android-food-tomato-fruit-thumbnail.png' w="50px" h="50px" />
                        </Box>
                    </HStack>
                    <Flex alignItems={'center'}>
                            <Button
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={profiles.profile_img}
                                />{profiles.profile_name}
                            </Button>
                    </Flex>
                </Flex>

            </Box>
        </>
    );
}