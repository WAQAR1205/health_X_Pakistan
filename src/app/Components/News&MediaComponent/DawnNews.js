import { Box, Typography } from '@mui/material'
import Image from 'next/image'

import female from '../../../Images/female.png';

export default function DawnNews({ img, heading, date }) {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Poppins', fontStyle: 'normal',
                maxWidth: {md:'90%',sm:'90%',xs:"98%"},
                //width: '100%',
                //height: '100%',
                //maxHeight: {md:'280px',sm:'90%',xs:"90%"},
            }}>

                <Typography sx={{ fontWeight: '500', fontSize: '81.25%', lineHeight: '156.25%', color: '#9E9E9E', marginTop: '2%' }}>
                    {date}
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: 'bold', fontSize: '112.50%', lineHeight: '156.25%', color: '#2D4755' }}>
                    {heading}
                </Typography>
                <Image src={img} style={{
                    position:'relative',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    borderRadius: '3%',
                }} />
            </Box>

        </>
    )
}