import { Box, Typography } from "@mui/material"
import React from 'react'
import Content from "../Components/homeComponents/Content "
import Heading from "../Components/homeComponents/Heading"
import NewsCard1 from "../../Images/news-card-1.png"
import NewsCard2 from "../../Images/news-card-2.png"
import NewsCard3 from "../../Images/news-card-3.png"
import NewsCard4 from "../../Images/news-card-4.png"
import HalfCard from "../Components/News&MediaComponent/HalfCard"
import DawnNews from "../Components/News&MediaComponent/DawnNews"
import DawnNewsCrasol from "../Components/News&MediaComponent/DawnNewsCrasol"
import DigitalVideos from "../Components/News&MediaComponent/DigitalVideos"
import Navbar from "../Components/navbar"
import CardImage from "../Components/News&MediaComponent/CardIMage"



function page() {
  return (
    <>
      <Navbar />
      <Box sx={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        width: { xs: '100%', sm: '100%', md: '70%', lg: '90%', xl: '90%' },
        margin: 'auto'
      }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',



        }}>
          <Box>
            <Content headingOne='News &' headingTwo='&nbsp;Media' content='Empowering People through News and Media' colorone="#E9501D" colortwo="#1F8B7B" lgC="150%" lh="90%" />
          </Box>
          <Box>
            <Heading number='01' heading='News & Media' content='Connecting Communities' numberColor='#E9501D'  contentColor='#2D4755' />
          </Box>
        </Box>

        {/* News Cards */}
        <Box sx={{
         display:'flex',
          flexWrap:'wrap',
          gap:'20px',
          marginTop:'3%'
        }}>

          <Box>
            <CardImage img={NewsCard1}/>
            <HalfCard  heading={'Healthx transforming Pakistan in healthcare sector, says khaqan'} content={"Khaqan's endorsement of HealthX highlights its growing impact on Pakistan's healthcare sector. By leveraging technology to improve healthcare delivery"}/>
          </Box>
          <Box >
          <HalfCard heading={'Multinational healthcare company, Healthx enters Pakistan'} content={"As HealthX begins its journey in Pakistan, the company's entry signifies a major step"} />

          </Box>
          <Box>
            <CardImage img={NewsCard2}/>
            <HalfCard heading={'Healthx transforming Pakistan in healthcare sector, says khaqan'} content={"Khaqan's endorsement of HealthX highlights its growing impact on Pakistan's healthcare sector. By leveraging technology to improve healthcare delivery"}/>
          </Box>
          <Box>
          <HalfCard heading={'Multinational healthcare company, Healthx enters Pakistan'} content={"As HealthX begins its journey in Pakistan, the company's entry signifies a major step"} />

          </Box>
          <Box sx={{
            marginTop: '-20%'
          }}>
            <CardImage img={NewsCard3}/>
            <HalfCard heading={'Healthx transforming Pakistan in healthcare sector, says khaqan'} content={"Khaqan's endorsement of HealthX highlights its growing impact on Pakistan's healthcare sector. By leveraging technology to improve healthcare delivery"}/>
          </Box>
          <Box>
            <CardImage img={NewsCard4}/>
            <HalfCard heading={'Healthx transforming Pakistan in healthcare sector, says khaqan'} content={"Khaqan's endorsement of HealthX highlights its growing impact on Pakistan's healthcare sector. By leveraging technology to improve healthcare delivery"}/>
          </Box>
          <Box sx={{marginTop: '-20%'}}>
            <CardImage img={NewsCard4}/>
            <HalfCard heading={'Healthx transforming Pakistan in healthcare sector, says khaqan'} content={"Khaqan's endorsement of HealthX highlights its growing impact on Pakistan's healthcare sector. By leveraging technology to improve healthcare delivery"}/>
          </Box>
          <Box sx={{marginTop: '-20%'}}>
          <HalfCard heading={'Multinational healthcare company, Healthx enters Pakistan'} content={"As HealthX begins its journey in Pakistan, the company's entry signifies a major step"} />

          </Box>
          
          
          
       
        </Box>

        {/* Television */}

        <Box sx={{
          marginTop: { xs: '2%', md: '4%' }
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
          }}>

            <Box>
              <Content headingTwo='Television' content='Impact On Society and Culture' lgC="150%" />
            </Box>

            <Box >
              <Heading number='02' heading='Television' content='Technology Advance' numberColor='#E9501D' headingColor='#2D4755;' contentColor='#2D4755' />
            </Box>
          </Box>

          <Box sx={{
            marginTop: '2%'
          }}>
            <DawnNewsCrasol />
          </Box>
        </Box >

        <Box sx={{

          marginTop: '5%',
          width: { md: '40%', xs: '80%' },
          float: { md: 'right', xs: 'right' },
        }}>
          <Heading number='04' numberColor='#E9501D' heading='Digital Videos' content=' Innovations in Digital Experience' contentColor='#2D4755' />
        </Box>

        <Box >

          <DigitalVideos />
        </Box>
      </Box>
    </>

  )
}

export default page