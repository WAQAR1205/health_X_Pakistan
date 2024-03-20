'use client'
import { Box } from '@mui/material'
import Navbar from '../Components/navbar'
import Blog from '../Components/Blog'
import addition from '../../Images/addition.png'
import Content from '../Components/homeComponents/Content '
import InputCom from '../Components/ContactUsComponent/InputCom'
import Button from '../Components/Button'

function page() {
    return (
        <>
            <Navbar />
            <Box sx={{
                width: '99%',
                fontFamily: 'Poppins',
                alignItems: 'center',
                // marginTop: '4%',
                margin: '0 auto'
            }}>
                <Box>
                    <Content headingTwo='Promote Generic Medications'/> 
                </Box>
                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                }}>
                    <Content headingOne='Post a Comment' content='Understanding the Impact and Solutions' />
                </Box>
                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                    marginTop: '4%',
                }}>
                    <InputCom placeholder='Name' Width={{ md: '45%', xs: '45%' }} type='text' />
                    <InputCom placeholder='email' Width={{ md: '45%', xs: '45%' }} ml='2%' type='email' />
                    <InputCom placeholder='Message' Width={{ md: '92%', xs: '92%' }} type='text' mt='2%' height="300px" />
                </Box>
                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                }}>
                    <Button title='Send a Message' fs='14px' fontWeight='500' lineHeight='21px' color='#FFFFFF' bg='#E9501D' br='5px' p={{ xs: '2%', md: '1%' }} type='number' mt='2%' />
                </Box>

                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                }}>
                    <Content headingOne='Related' headingTwo='&nbsp;Posts' content='Blogs' lh='0%' />
                </Box>
                <Box sx={{
                    width: '86%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: { md: 'row', xs: 'column' },
                    marginTop: { md: '3%' }
                }}>
                    <Blog head='Your Daily Dose of Medical Wisdom' type='News' img={addition} />
                    <Blog head='Empowering Communities through Health Education...' type='News' img={addition} />
                    <Blog head='Empowering Communities through Health Education...' type='News' img={addition} />
                </Box>
            </Box>
        </>
    )
}

export default page