import { Box, Center, Flex, Heading, HStack, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAlternateEmail, MdOutlineCake } from 'react-icons/md'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import Image from 'next/image'
import workspaceLight from '../assets/about/workspace-light.jpg'
import workspaceDark from '../assets/about/workspace-dark.jpg'
import avatar from '../assets/about/avatar.png'
import arrowDark from '../assets/curved-arrow-dark.png'
import arrowLight from '../assets/curved-arrow-light.png'
import styles from '../styles/CustomStyles.module.css'
import { CustomHeading } from '../components/CustomHeading/CustomHeading'
import { Footer } from '../components/Footer'

const About = () => {

    const workspace = useColorModeValue(workspaceLight, workspaceDark)
    const arrow = useColorModeValue(arrowLight, arrowDark)
    const textColor = useColorModeValue('gray.500', 'gray.400')

    return (
        <>
            <Flex
                pl={{ base: 8, md: 24, lg: 40 }}
                pr={{ base: 8, md: 12, lg: 40 }}
                pt={{ base: 28, md: 32 }}
                pb={{ base: 12, md: 32 }}>
                <HStack spacing={4} align='flex-start' flexDirection={{ base: 'column', md: 'row' }}>
                    <Stack spacing={{ base: 2, md: 6 }}>
                        <Box display={{ base: 'none', md: 'block' }}>
                            <CustomHeading headingText='Entreprenuer' boxColor='yellow.100' chars={7.5} />
                            <CustomHeading headingText='Solutions Architect' boxColor='pink.100' chars={8.5} />
                            <CustomHeading headingText='Software Developer' boxColor='blue.100' chars={7.5} />
                        </Box>
                        <Center display={{ base: 'block', md: 'none' }} pl={6}>
                            <CustomHeading headingText='Entreprenuer' boxColor='yellow.100' chars={7.5} />
                            <CustomHeading headingText='Solutions Architect' boxColor='pink.100' chars={8.5} />
                            <CustomHeading headingText='Software Developer' boxColor='blue.100' chars={7.5} />
                        </Center>
                        <Stack spacing={4} py={6} display={{ base: 'flex', md: 'none' }}>
                            <Center>
                                <Image src={avatar} alt='my picture' height='125px' width='125px' />
                            </Center>
                            <Center px={4} textAlign='center'>
                                <Text className={styles.customFont}>
                                    I&apos;m fascinated by the intersection between tech, business and life.
                                </Text>
                            </Center>
                        </Stack>
                        <Stack spacing={{ base: 16, md: 6 }} direction={{ base: 'column-reverse', md: 'column' }}>
                            <Stack spacing={{ base: 4, md: 4 }} width={{ base: '100%', md: '70%' }}>
                                <Stack spacing={2}>
                                    {/* <Heading as='h3'
                                        fontWeight={{ base: 'bold', md: 'semibold' }}
                                        fontSize={{ base: '2xl', md: 'lg' }}>
                                        Education</Heading> */}
                                    <Text as='p'>
                                        I graduated with a Degree of Bachelor of Engineering in Computer Science
                                        from IEC College of Engineering & Technology, Greater Noida, in the year 2016.
                                    </Text>
                                </Stack>
                                <Stack spacing={2}>
                                    <Heading as='h3'
                                        fontWeight={{ base: 'bold', md: 'semibold' }}
                                        fontSize={{ base: '2xl', md: 'lg' }}>
                                        My calling - Turning ideas into <strong>products</strong></Heading>
                                    <Stack spacing={0}>
                                        <Text as='p'>
                                            In my pursuit of finding my passion, I have worn multiple hats in my professional life.
                                            From working in cloud operations to software development to product management, I have had the
                                            opportunity of having the unusual vantage point of a person who gets to experience the life cycle of a product
                                            from varying perspectives.
                                        </Text>
                                        <Text as='p'>
                                            This essentially helped me in figuring out that what I&apos;m really good at is in bridging the communication gap
                                            between disparate teams; breaking down complex ideas (or rebuilding them) to different audiences;
                                            and figuring out what people really want/need.
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Box width={{ base: '100%', md: '60%' }} px={{ base: 16, md: 0 }}>
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                                    <HStack spacing={2}><MdOutlineAlternateEmail fontSize='1.2em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Amit Kumar</Text></HStack>
                                    <HStack spacing={2}><HiOutlineLocationMarker fontSize='1.2em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Noida, India.</Text></HStack>
                                    <HStack spacing={2}><MdOutlineCake fontSize='1.2em' /><Text color={textColor} fontSize={{ base: 'sm' }}>23 Sept 1993, 29 y.o.</Text></HStack>
                                    <HStack spacing={2}><HiOutlineMail size={'1.2em'} /><Text color={textColor} fontSize={{ base: 'sm' }}>amit@worf.in</Text></HStack>
                                </SimpleGrid>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack spacing={10} display={{ base: 'none', md: 'flex' }}>
                        <Box pt='50px'>
                            <Image src={avatar} alt='my picture' height='125px' width='125px' />
                        </Box>
                        <Box className={styles.tiltBox} width='250px'>
                            <Text className={styles.customFont}>
                                I&apos;m fascinated by the intersection between tech, business and life.
                                My goal is to help build great products that have a lasting impact.
                            </Text>
                        </Box>
                        <Box className={styles.tiltArrow}>
                            <Image src={arrow} alt='arrow pointing to content' height='100px' width='120px' />
                        </Box>
                    </Stack>
                </HStack>
            </Flex>
            <Stack spacing={{ base: 8, md: 16 }} pl={{ base: 8, md: 20, lg: 40 }} pr={{ base: 8, md: 20, lg: 40 }} pb={{ base: 16, md: 24 }} direction={{ base: 'column', md: 'row' }}>
                <Box style={{ borderRadius: '10px', overflow: 'hidden' }} w={{ base: '100%', md: '60%' }}>
                    <Image src={workspace}
                        alt='my workspace'
                        objectFit='cover' />
                </Box>
                <Box width={{ base: '100%', md: '60%' }}>
                    <Stack spacing={{ base: 2, md: 4 }}>
                        <Heading bgGradient='linear(to-r, pink.200, blue.200)'
                            bgClip='text'>This is where the magic happens</Heading>
                        <Text as='p'>
                            I&apos;m someone who has enjoyed building beautiful things almost all my life, what started
                            as me having a natural talent in computer science, soon grew into me exploring
                            Cyber security and then trickled into Software development.One of my first projects was 
                            when I created a library management application in PHP , later i built a sports betting website in my college. 
                        </Text>
                        <Text as='p'>
                            What I did not know at the time was that my skills as an artist and developer combined with my ambiverted nature and 
                            love for communicating with people will evolve into becoming some of my greatest assets.
                        </Text>
                        <Text as='p'>

                        </Text>
                    </Stack>
                </Box>
            </Stack>

            <Footer />
        </>
    )
}

export default About