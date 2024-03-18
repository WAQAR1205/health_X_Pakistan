'use Client'
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Blog({ img, head, Content, type }) {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = () => {
        setIsHover(true);
    }

    const onMouseLeave = () => {
        setIsHover(false);
    }

    return (
        <Box sx={{
            width: {md: '25%' , lg: '35%', xs: '80%' },
            margin: '0 auto',
            height: 'auto',
            marginTop: {xs: '3%' , lg: '0'}
        }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Date */}
            <Typography sx={{ marginLeft: '1vw' }}>Jan 11 24</Typography>
            {/* Headline */}
            <Typography sx={{
                width: { xs: '80%', sm: '100%' },
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: { md: '14px', xs: '12px' , lg: '17px'},
                lineHeight: '111.64%',
                color: isHover ? '#E9501D' : 'black',
                margin: { xs: '0 auto' }
            }}>
                {head}
            </Typography>
            {/* Image */}
            <Box sx={{ marginTop: '1vw', width: {lg: '100%' , md: '10%' , xs: '100%'} }}>
                <Image src={img} height={200}/>
            </Box>
            {/* Type */}
            <Typography sx={{
                padding: '1%',
                gap: '10px',
                width: '60px',
                background: '#D3FFF9',
                borderRadius: '49px',
                color: '#1F8B7B',
                marginTop: '1vw',
                marginLeft: '1vw',
            }}>{type}
            </Typography>
            {/* Content */}
            <Typography sx={{
                margin: '0 auto',
                width: '90%',
                marginTop: '1vw',
                visibility: isHover ? 'visible' : 'hidden'
            }}>
                {Content}
            </Typography>
        </Box>
    )
}