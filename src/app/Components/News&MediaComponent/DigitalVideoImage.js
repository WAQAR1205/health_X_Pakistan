import { Box, Typography } from '@mui/material'
import Image from 'next/image'

import female from '../../../Images/female.png';

export default function DawnNews({img,heading,time}) {
    return (
        <>
        <Box sx={{
            // border:'1px solid black',
            display:'flex',
            flexDirection: 'column',
            width:'270px',
            fontFamily: 'Poppins', fontStyle: 'normal',
             height: '250px',
             
        }}>

            <Image src={img} style={{
                 width: '100%',
                 height:'100%',
                  objectFit: 'cover',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                 overflow: 'hidden',
                 borderRadius: '9px',
             }} />
             <Typography variant='h5' sx={{ fontWeight: '300', fontSize: { xs: '16px', sm: '18px', md: '20px' }, lineHeight: '25px', color: '#E9501D' }}>
                {heading}
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: { xs: '12px', sm: '13px', md: '14px' }, lineHeight: '25px', color: '#9E9E9E', marginTop: '2%' }}>
                {time}
            </Typography>
        </Box>

        </>
    )
}