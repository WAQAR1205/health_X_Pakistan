'use client'
import Blog from '../Blog'
import male from '../../../Images/male.png'
import Add from '../../../Images/add.png'
import women from '../../../Images/female.png'
import homeData from '../../mockData/homePageData/homePage'
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

export default function BlogNnews() {
  const [selectedBox, setSelectedBox] = useState('All');

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: {md: 'space-around', xs: 'space-evenly'},
      marginTop: {xs: '19%' , md: '2%'},
      flexDirection: {md: 'row' , xs: 'column'},
    }}>

      <Box sx={{
        width: {md: '10%' , xs: '100%'},
        height: {md: '300px' , xs: 'auto'},
        display: 'flex',
        flexDirection: {md: 'column' , xs: 'row'},
        justifyContent: 'space-around',
      }}>
        <Typography sx={{ color: selectedBox === 'All' ? 'black' : '#BEBEBE' }} onClick={() => setSelectedBox('All')}>All</Typography>
        <Typography sx={{ color: selectedBox === 'News' ? 'black' : '#BEBEBE' }} onClick={() => setSelectedBox('News')}>News</Typography>
        <Typography sx={{ color: selectedBox === 'Blogs' ? 'black' : '#BEBEBE' }} onClick={() => setSelectedBox('Blogs')}>Blogs</Typography>
        <Typography sx={{ color: selectedBox === 'Events' ? 'black' : '#BEBEBE' }} onClick={() => setSelectedBox('Events')}>Events</Typography>
      </Box>


      <Box sx={{ 
        width: '85%',
        margin: '0 auto',
      }}>
        {selectedBox === 'All' &&
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
          }}>
            <Blog head='Mental health Services should count as Healthcare' type='Blog' img={women} Content={homeData[5].Blog1} />
            <Blog head='Mental health Services should count as Healthcare' type='News' img={male} Content={homeData[5].Blog1} />
            <Blog head='Mental health Services should count as Healthcare' type='Events' img={Add} Content={homeData[5].Blog1} />
          </Box>
        }

        {selectedBox === 'News' &&
          <Box sx={{
            width: '100%',
            // display: 'flex',
            // justifyContent: 'space-between',
            // flexDirection: { xs: 'column', md: 'row' },

          }}>
            <Blog head='Mental health Services should count as Healthcare' type='Blog' img={women} Content={homeData[5].Blog1} />
          </Box>
        }

        {selectedBox === 'Blogs' &&
          <Box sx={{
            width: '100%',
            // display: 'flex',
            // justifyContent: 'space-between',
            // flexDirection: { xs: 'column', md: 'row' },

          }}>
            <Blog head='Mental health Services should count as Healthcare' type='Blog' img={women} Content={homeData[5].Blog1} />
          </Box>
        }

        {selectedBox === 'Events' &&
          <Box sx={{
            width: '100%',
            // display: 'flex',
            // justifyContent: 'space-between',
            // flexDirection: { xs: 'column', md: 'row' },

          }}>
            <Blog head='Mental health Services should count as Healthcare' type='Blog' img={women} Content={homeData[5].Blog1} />
          </Box>
        }
      </Box>

    </Box>
  );
}
