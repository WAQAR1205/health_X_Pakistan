'use client'
import { Box, Typography } from "@mui/material"
import Content from "../Components/homeComponents/Content"
import Question from "../Components/Question"
import Heading from "../Components/homeComponents/Heading"
import email from '../../Images/streamline_send-email.png'
import Address from '../Components/ContactUsComponent/Address'
import Button from "../Components/Button"
import model from '../../Images/modelbg.png'
import Image from "next/image"
import InputCom from '../Components/ContactUsComponent/InputCom'
import NavBar from "../Components/navbar"

export default function ContactUs() {
  return (
    <>
    <NavBar />
      <Box sx={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        width: '99%',
        // overflow: 'hidden',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '98%',
          margin: '0 auto',
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          <Box sx={{
            width: { md: '45%', xs: '100%' },
          }}>
            <Content headingTwo='Get in Touch' content='Connecting for Care' mdc="35px" mdfs="50px" wxs="100%"/>
          </Box>
          <Box sx={{
            width: { md: '45%', xs: '100%' },
          }}>
            <Heading number='01' heading='Contact us' content='Reach Out, We&#39;re Here to Help' numberColor='#E9501D' headingColor='#2D4755' contentColor='#2D4755' />
          </Box>
        </Box>

        <Box>
          <Box sx={{
            Width: { md: '100%', xs: '100%' },
            position: 'absolute',
            top: '-80%',
          }}>
            <Image src={model} alt="shazai" style={{
              width: '100%',
              objectFit: 'contain'
            }} />
          </Box>

          <Box sx={{
            width: '80%',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: { md: 'row', xs: 'column' },
            margin: '0 auto',
            marginTop: '4%',
          }}>
            <Address img={email} mail='info@healthxpakistan.com' />
            <Address img={email} mail='info@healthxpakistan.com' />
            <Address img={email} mail='info@healthxpakistan.com' />
          </Box>
          <Box sx={{
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '4%',
            width: '80%',
          }}>
            <Typography sx={{
              fontWeight: '300',
              fontSize: {md: '39px' , xs: '24px'},
              lineHeight: '112%',
              /* or 42px */

              color: '#253239',
            }}>
              Contact Information
            </Typography>
            <Box sx={{
              marginTop: '2%',
            }}>
              <InputCom placeholder='Name' Width={{ md: '25%', xs: '45%' }} type='text' />
              <InputCom placeholder='email' Width={{ md: '25%', xs: '45%' }} ml='2%' type='email' />
              <InputCom placeholder='Phone Number' Width={{ md: '52%', xs: '92%' }} type='number' mt='2%' />
              <InputCom placeholder='Sector you belong to:' Width={{ md: '52%', xs: '92%' }} type='text' mt='2%' />
              <InputCom placeholder='Message' Width={{ md: '52%', xs: '92%' }} type='text' mt='2%' height="150px" />
            </Box>
            <Button title='Send a Message' fs='14px' fontWeight='500' lineHeight='21px' color='#FFFFFF' bg='#E9501D' br='5px' p={{ xs: '2%', md: '1%' }} type='number' mt='2%' />
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          marginTop: '3%',
          flexDirection: { xs: 'column', md: 'row' },
        }}>
          <Box sx={{ width: { md: '50%', xs: '100%' } }}>
            <Content headingOne='Frequently' headingTwo=' Asked Question' />
          </Box>

          <Box sx={{ width: { md: '40%', xs: '100%' } }}>
            <Heading number='02' numberColor='#E9501D' heading='FAQ’s' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' />
          </Box>

        </Box>

        <Box sx={{
          marginTop: '4%',
          marginBottom: '3%',
        }}>
          <Question />
        </Box>
      </Box>
    </>
  )
}