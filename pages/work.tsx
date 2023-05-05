import { Box, Flex, Heading, Stack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import youthbuzz from '../assets/company logos/youthbuzz_logo.png'
import paytm_logo from '../assets/company logos/paytm_logo.png'
import adwayslogo from '../assets/company logos/adways_logo.png'
import keikologo from '../assets/company logos/keiko_logo.png'
import worflogo from '../assets/company logos/logo_single.webp'
import techbotlogo from '../assets/company logos/techbot_logo.png'
import { JobInfoBox } from '../components/JobInfoBox/JobInfoBox'
import linkedInIcon from '../assets/company logos/linkedin.png'
import { Footer } from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'

type Props = {}

const Work = (props: Props) => {

    const headingColor = 'linear(to-r, blue.200, pink.200)'

    return (
        <>
            <Flex w='full'
                pl={{ base: 10, md: 56 }}
                pt={{ base: 28, md: 44 }}
                pr={{ base: 10, md: 52 }}
                pb={{ base: 12, md: 24 }}>

                <Stack spacing={{ base: 0, md: 9 }}>
                    <Stack spacing={4}>
                        <Heading fontSize={{ base: '4xl', md: '6xl' }}
                            bgGradient={headingColor}
                            bgClip='text'>My professional journey so far</Heading>
                        <HStack display={{ base: 'none', md: 'flex' }}>
                            <AiOutlineArrowRight />
                            <Text>Visit my </Text>
                            <Box pt={1}>
                                <Image src={linkedInIcon} alt='linkedin icon' height='24px' width='24px' />
                            </Box>
                            <Link href='https://www.linkedin.com/in/amitkumar-worf/' passHref>
                                <a target='_blank' ><Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold' _hover={{ color: 'blue.400', cursor: 'pointer' }}>LinkedIn</Text></a>
                            </Link>
                            <Text>profile for more info</Text>
                        </HStack>
                    </Stack>

                    <Stack spacing={{ base: 16, md: 28 }}>

                        <JobInfoBox
                            logo={paytm_logo}
                            logoWidth='150px'
                            logoHeight='55px'
                            mt='1'
                            dates='Feb 2023 - Current'
                            position='Associate Software Developer'
                            companyName='PayTm Payments Bank'
                            companylink='https://paytm.com'
                            location='Noida, India'
                            jobdetails='Paytm is an Indian multinational financial technology company, that specializes in digital payments and financial services, based in Noida. 
                            Here I got the opportunity to work in frontend, backend, devOps, design and much more. I designed and created the 
                            company backend, set up SEO, sitemap and hosting.
                            My responsibilities on the product side included planning sprints, leading projects, designing and creating features, writing APIs, 
                            code reviews, testing, moderating daily stand-up calls and creating deliverable reports for each sprint.'
                            jobdetails2='I was also responsible for mentoring and supervising our software development intern. This job not only helped
                            me grow as a developer but I also learned essential skills necessary for a manager working in tech.'
                        />

                         <JobInfoBox
                            logo={worflogo}
                            logoWidth='160px'
                            logoHeight='35px'
                            mt='2'
                            dates='APR 2016 - Current'
                            position='Full Stack Developer'
                            companyName='Worf Internet Services Pvt. Ltd.'
                            companylink='https://worf.in'
                            location='Noida, India'
                            jobdetails='Worf is a reliable and cost-effective provider of web development & IT security solutions . Here I worked as a Founder and Full Stack developer. 
                            My responsibilities included creating and shipping new features, adding improvements to the existing web application,
                            moderating daily standup meetings, planning our monthly sprints and creating deliverable reports for our business team.
                            I closely worked with our testing and support team on technical issues including software system design, maintenance and performance.'
                            jobdetails2='One of my key achievements at  would be my inputs/work on improving our UX by adding empty states wherever necessary,
                            help buttons with information on how to use a feature and adding Sign-In with Google for ease of entry for the users.'
                        />

                         <JobInfoBox
                            logo={adwayslogo}
                            logoWidth='150px'
                            logoHeight='55px'
                            mt='1'
                            dates='Aug 2022 - Mar 2023'
                            position='Full Stack PHP Developer'
                            companyName='Adways VC India Private Limited'
                            companylink='https://adwaysvc.com/'
                            location='Gurugram, India'
                            jobdetails='Adways VC India Pvt. Ltd. which is a JV with Tokyo Stock Exchange listed company Adways Inc. (Japan), the No.1 Affiliate Marketing company in Asia on PC & Mobile.
                            I was lucky enough to be a part of every phase of the product from requirement 
                            gathering and design to implementation.
                            Here I got the opportunity to work in frontend, backend, devOps, design and much more. I designed and created the 
                            company webiste, set up SEO, sitemap and hosting.
                            My responsibilities on the product side included planning sprints, leading projects, designing and creating features, writing APIs, 
                            code reviews, testing, moderating daily stand-up calls and creating deliverable reports for each sprint.'
                            jobdetails2='I was also responsible for mentoring and supervising our software development intern. This job not only helped
                            me grow as a developer but I also learned essential skills necessary for a manager working in tech.'
                        />

                        <JobInfoBox
                            logo={keikologo}
                            logoWidth='110px'
                            logoHeight='35px'
                            mt='3'
                            dates='Jan 2019 - Oct 2021'
                            position='Full Stack Developer'
                            companyName='Keiko International'
                            companylink='https://keikointernational.com'
                            location='Ghaziabad, India'
                            jobdetails='Keiko International is a Industrial Automation Company and I worked in the CLOUD department.
                            My job entailed administering the JBoss and HTTP Apache servers, deploying new releases/hotfixes
                            of our software to both staging and production environments, provisioning/ de-provisioning
                            servers for our clients, managing Globalscape FTP, DNS, Mail and MySQL servers of Satmetrix&apos;s environments,
                            troubleshooting server performance issues and creating root cause analysis reports. I also helped solve tickets raised
                            by our support team and took up customer tickets wherein I helped our clients setup AWS services like SES for their organisation.'
                            jobdetails2='I was awarded the SPOT award in recognition for my dedication, positive attitude and co-ordination among teams from 
                            different departments. My team also won the best team in the cloud department award for three quarters in a row.'
                        />

                         <JobInfoBox
                            logo={youthbuzz}
                            logoWidth='110px'
                            logoHeight='35px'
                            mt='3'
                            dates='Jan 2018 - Feb 2019'
                            position='Solutions Architect'
                            companyName='YouthBuzz Educom LLP'
                            companylink='https://youthbuzz.com'
                            location='Mumbai, India'
                            jobdetails='Youth Buzz is an augmented and virtual reality application for the education sector. My job entailed 
                            administering the JBoss and HTTP Apache servers, deploying new releases/hotfixes
                            of our software to both staging and production environments, provisioning/ de-provisioning
                            servers for our clients, managing Globalscape FTP, DNS, Mail and MySQL servers of Satmetrix&apos;s environments,
                            troubleshooting server performance issues and creating root cause analysis reports. I also helped solve tickets raised
                            by our support team and took up customer tickets wherein I helped our clients setup AWS services like SES for their organisation.'
                            jobdetails2='I was awarded the SPOT award in recognition for my dedication, positive attitude and co-ordination among teams from 
                            different departments. My team also won the best team in the cloud department award for three quarters in a row.'
                        />
                        
                         <JobInfoBox
                            logo={techbotlogo}
                            logoWidth='110px'
                            logoHeight='35px'
                            mt='3'
                            dates='Oct 2013 - Dec 2015'
                            position='Web Developer'
                            companyName='TechBot Support'
                            companylink='https://techbotsupport.com'
                            location='Gurugram, India'
                            jobdetails='TechBot Support offers its state-of-the-art Managed Service Desk offices in UAE and INDIA. It also provides Around-the-clock network surveillance; Performance monitoring
                            My job entailed administering the JBoss and HTTP Apache servers, deploying new releases/hotfixes
                            of our software to both staging and production environments, provisioning/ de-provisioning
                            servers for our clients, managing Globalscape FTP, DNS, Mail and MySQL servers of Satmetrix&apos;s environments,
                            troubleshooting server performance issues and creating root cause analysis reports. I also helped solve tickets raised
                            by our support team and took up customer tickets wherein I helped our clients setup AWS services like SES for their organisation.'
                            jobdetails2='I was awarded the SPOT award in recognition for my dedication, positive attitude and co-ordination among teams from 
                            different departments. My team also won the best team in the cloud department award for three quarters in a row.'
                        />
                    </Stack>
                </Stack>
            </Flex>

            <Footer />
        </>
    )
}

export default Work