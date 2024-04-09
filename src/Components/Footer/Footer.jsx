import { Box, Container, Stack, Text, Image, useColorModeValue } from '@chakra-ui/react';
import logo from './../../Assets/logo.png';

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                textAlign={'center'}
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Image style={{ height: '80px', width: '80px' }} src={logo} alt="logo" />
                <Text><a href="https://github.com/yashlondhe90960">Made with ❤️ by Yash Londhe</a></Text>
            </Container>
        </Box>
    );
}
// export default function Footer() {
//     return (
//         <Box
//             bg={useColorModeValue('gray.50', 'gray.900')}
//             color={useColorModeValue('gray.700', 'gray.200')}>
//             <Container
//                 textAlign={'center'}
//                 as={Stack}
//                 maxW={'6xl'}
//                 py={4}
//                 direction={{ base: 'column', md: 'row' }}
//                 spacing={4}
//                 justify={{ base: 'center', md: 'space-between' }}
//                 align={{ base: 'center', md: 'center' }}>
//                 <Image style={{ height: '44px' }} src={logo} alt="logo" />
//                 <Text>© 2023 Resume Builder, All rights reserved</Text>
//                 <Stack direction={'row'} spacing={6}>
//                     <SocialButton label={'Github'} href={'https://github.com/imhardikdesai'}>
//                         <FaGithub />
//                     </SocialButton>
//                     <SocialButton label={'Snapchat'} href={'https://twitter.com/imhardikdesai'}>
//                         <FaSnapchat />
//                     </SocialButton>
//                     <SocialButton label={'Instagram'} href={'https://instagram.com/imhardikdesai'}>
//                         <FaInstagram />
//                     </SocialButton>
//                 </Stack>
//             </Container>
//         </Box>
//     );
// }