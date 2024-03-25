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
                maxWidth: '350px',
                width: '100%',
                height: '100%',
                maxHeight: '280px',
            }}>

                <Typography sx={{ fontWeight: '500', fontSize: '13px', lineHeight: '25px', color: '#9E9E9E', marginTop: '2%' }}>
                    {date}
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: 'bold', fontSize: '18px', lineHeight: '25px', color: '#2D4755' }}>
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
                    borderRadius: '8px',
                }} />
            </Box>

        </>
    )
}