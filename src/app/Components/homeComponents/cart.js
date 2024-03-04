import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function Cart({ src, heading, content }) {
  return (
    <Box
      sx={{
        margin: '0 auto',
        width: {md: '22%' , sm: '70%' , xs: '70%'},
        height: {md: '530px' , sm: 'auto' , sx: 'auto'},
        background: '#2D4755',
        filter: `drop-shadow(0px 4px 17.6px rgba(0, 0, 0, 0.1))`,
        marginTop: {md: '0%' , sm: '5%' , xs: '5%'},
      }}
    >
      <Box sx={{
        // background: 'red',
        width: {md: '50%' , sm: '40%' , xs: '40%'},
        marginTop: '15%',
        marginLeft: {md: '0' , sm: '5%' , xs: '5%'},
      }}>
      <Image src={src}  style={{width: '100%'}} />
      </Box>

      <Typography
        sx={{
          width: {md: '90%', sm: '60%' , xs: '60%'},
          height: {md: '78px', sm: 'auto'},
          marginLeft: '5%',
          marginTop: '3%',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: {md: '26px' , sm: '13px'},
          lineHeight: '39px',
          color: '#FFFFFF',
        }}
      >
        {heading}
      </Typography>

      <Typography
        sx={{
          width: {md: '90%' , sm: ' 90%' , xs: '90%'},
          height: {md: '108px' , sm: 'auto'},
          marginLeft: '5%',
          marginTop: '3%',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: {md: '19px' , sm: '13px'},
          lineHeight: '27px',
          color: '#FFFFFF',
        }}
      >
        {content}
      </Typography>

      <Typography
        sx={{
          width: {md: '112px' , xs: '90%'},
          height: {md: '27px' , sm: 'auto'},
          float: 'right',
          marginRight: '5%',
          marginTop: '18%',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: {md: '27px' , sm: '14px'},
          color: '#E9501D',
          fontSize: '19px',
        }}
      >
        Read More...
      </Typography>
    </Box>
  );
}

