"use client"
import React from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/Footer'
import Heading from '../Components/homeComponents/Heading'
import Rating from '../Components/homeComponents/Rating'
import { Box, Typography, } from '@mui/material'
import mobile from '../../Images/mobile.png'
import Rectangle  from '../../Images/Rectangle 10.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import homePageData from '../mockData/homePageData/homePage'
import { CardActionArea } from '@mui/material';
import { Inter } from 'next/font/google'
import Image from "next/image";
import Button from '@mui/material/Button';

import Content, { headingOne, } from '../Components/homeComponents/Content '

function About() {
  return (
    <><Box>
      <Navbar />
      <Box sx={{
        width: '95%',

        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: { xs: 'column', md: 'row ' },
        margin: '0 auto',
        marginTop: '10%',
      }}>
        <Box sx={{
          flexBasis: { xs: '100%', md: '50%' }
        }}>
          <Content headingTwo='Our  Story' content='Transforming Healthcare Globally' lgC='15px' htl='12px' lh='28px' xsfsc='10px' />
        </Box>

        <Box sx={{
          flexBasis: { xs: '100%', md: '50%' }
        }}>
          <Heading number='01 ' content="We are comiited to your Health " contentColor="" numberColor="" headingColor='' heading='About Us' />
        </Box>

      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexBasis: { xs: '100%', md: '50%' }
        }}>
          <Image src={Rectangle} />
        </Box>
        <Box sx={{
          flexBasis: { xs: '100%', md: '50%' }


        }}>
          <Content headingOne='Transforming Primiary' headingTwo='HealthCare' content='Seamless Access to Expert Care' lgC=' 35px' contentColor=' #1E1E1E' />
          <Content content="Healthx, powered by TruDoc, is a global healthcare management company in Pakistan. We provide high-quality primary healthcare services using innovative technology. Our offerings include convenient online consultations with expert doctors and wellness advisors."
            lgC=' 20px'
            lh='30px' />
          <Image src={mobile} />
        </Box>

      </Box>
    </Box><div className="main">
        <div className="content">
          <h3>
            Healthx
          </h3>
          <h1>
            <span style={{ color: '#E9501D', fontWeight: '600', fontSize: '38.27px' }}>Transforming</span>
            <span style={{ color: '#1F8B7B', marginLeft: '1rem', fontWeight: '600', fontSize: '38.27px' }}>Healthcare</span>
          </h1>
          <h2>
            Embracing Humanity
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error,
          </p>
          <Button
            variant="contained"
            sx={{
              '&:hover': {
                backgroundColor: '#E9501D',
              },
            }}
          >
            Contact Us
          </Button>
        </div>
        <div className="box">
        <Card sx={{ maxWidth: 250, backgroundColor: '#253239', color: '#FFFFFF' }}>
  <CardActionArea>
    <CardMedia
      component="img"
      sx={{ width: '50%', height: '8rem', backgroundColor: '#253239',marginLeft:'10px' }}
      image="/Group.png"
      alt="green iguana"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#E9501D' }}>
      Our Purpose
</Typography>
      <Typography variant="body2" color="inherit">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>


<Card sx={{ maxWidth: 250, backgroundColor: '#253239', color: '#FFFFFF' }}>
  <CardActionArea>
    <CardMedia
      component="img"
      sx={{ width: '50%', height: '8rem', backgroundColor: '#253239',marginLeft:'10px' }}
      image="/Group (1).png"
      alt="green iguana"
    />
    <CardContent sx={{ color: '#FFFFFF' }}> {/* Update color property here */}
    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#E9501D' }}>
      Our Mission
</Typography>
      <Typography variant="body2" color="inherit">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>

<Card sx={{ maxWidth: 250, backgroundColor: '#253239', color: '#FFFFFF' }}>
  <CardActionArea>
    <CardMedia
      component="img"
      sx={{ width: '50%', height: '8rem', backgroundColor: '#253239' }}
      image="/Group (2).png"
      alt="green iguana"
    />
    <CardContent sx={{ color: '#FFFFFF' }}> {/* Update color property here */}
    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#E9501D' }}>
      Our Vision
</Typography>
      <Typography variant="body2" color="inherit">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>


<Card sx={{ maxWidth: 250, backgroundColor: '#253239', color: '#FFFFFF' }}>
  <CardActionArea>
    <CardMedia
      component="img"
      sx={{ width: '50%', height: '8rem', backgroundColor: '#253239' }}
      image="/Group (3).png"
      alt="green iguana"
    />
    <CardContent sx={{ color: '#FFFFFF' }}> {/* Update color property here */}
    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#E9501D' }}>
      Our Approach
</Typography>
      <Typography variant="body2" color="inherit">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>

        </div>
      </div></>


  )
}

export default About;