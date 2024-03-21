'use client'
import { Box, Typography } from "@mui/material"

export default function BlogDetailContent({ head, content, color = '#E9501D', fontWeight = '400' }) {
    return (
        <Box sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            marginTop: '4%',
        }}>
            <Typography sx={{
                fontWeight: fontWeight,
                fontSize: {lg: '24px' , md: '22px' , xs: '20px'},
                lineHeight: '35px',
                color: color,
            }}>
                {head}
            </Typography>
            <Typography sx={{
                fontWeight: 'light',
                fontSize: {lg: '24px' , md: '22px' , xs: '20px'},
                lineHeight: '35px',
                color: '#2D4755',
                marginTop: '2%',
                width: {md: '65%' , xs : '100%'},
            }}>
                {content}
            </Typography>
        </Box>
    )
}