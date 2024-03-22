"use client"
import React from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/Footer'
import Heading from '../Components/homeComponents/Heading'
import Rating from '../Components/homeComponents/Rating'
import { Box, Typography, } from '@mui/material'
import mobile from '../../Images/mobile.png'
import Rectangle  from '../../Images/Rectangle 10.png'

import homePageData from '../mockData/homePageData/homePage'

import Content, { headingOne, } from '../Components/homeComponents/Content '

function About() {
  return (
    <Box>
        <Navbar />
        <Box sx = {{
          width : '95%' ,

          display : 'flex' , 
          justifyContent : 'space-around' , 
        flexDirection : {xs:'column'  , md : 'row ' }  ,
          margin  : '0 auto' ,
          marginTop : '10%' ,
      }}>
        <Box sx = {{
          
         flexBasis : { xs  : '100%' ,  md: '50%' }

}}>
 <Content headingTwo= 'Our  Story' content= 'Transforming Healthcare Globally' lgC= '15px' htl='12px'  lh = '28px'  xsfsc='10px'/>
 </Box>

 <Box sx= {{
         flexBasis : { xs  : '100%' ,  md: '50%' }
        }}>
   <Heading  number= '01 ' content= "We are comiited to your Health " contentColor= "" numberColor= "" headingColor= '' heading= 'About Us'/>
 </Box>
 
        </Box>
        <Box sx={{
          display : 'flex' ,
          justifyContent : 'space-between'
        }}>
          <Box sx ={{

            display : 'flex' , 
            alignItems : 'center' ,
          flexBasis : { xs  : '100%' ,  md: '50%' }

          }} >
            <Image  src = {Rectangle}/>
          </Box>
     <Box  sx = {{  flexBasis : { xs  : '100%' ,  md: '50%' }


     }}>
      <Content headingOne= 'Transforming Primiary' headingTwo= 'HealthCare' content= 'Seamless Access to Expert Care' lgC=' 35px' contentColor = ' #1E1E1E' />
      <Content content = "Healthx, powered by TruDoc, is a global healthcare management company in Pakistan. We provide high-quality primary healthcare services using innovative technology. Our offerings include convenient online consultations with expert doctors and wellness advisors."
      lgC= ' 20px'
      lh='30px'
      />
      <Image  src={mobile}/>
     </Box>

     </Box>
    </Box>
  )
}

export default About;