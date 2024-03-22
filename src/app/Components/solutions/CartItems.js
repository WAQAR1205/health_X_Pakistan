import { Box, Typography } from "@mui/material"
import Image from "next/image"
import cartmodel from '../../../Images/cartmodel.png'
import Content from "../homeComponents/Content "
import { useState } from "react"

function CartItems({ img, one, two, content }) {
    const [hover, setHover] = useState(false)

    return (
        <Box sx={{
            background: '#FFFFFF',
            width: { md: '40%', xs: '70%' },
            padding: '2%',
            borderRadius: '10px',
            border: hover ? '1px solid #E9501D' : 'none',
            boxShadow: '#E9501D'
        }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Box sx={{
                width: {md: '40%' , xs: '30%'},
                position: 'absolute',
                left: {md: 'auto' , xs: '45%'},
                visibility: hover ? 'visible' : 'hidden'
            }}>
                <Image src={cartmodel} alt="moidel" style={{width: '100%'}}/>
            </Box>
            <Image src={img} alt="image" />
            <Content headingOne={one} headingTwo={two} content={content} lg="26px" Lhl="57px" lgC='19px' lh='28px' mdfs="18px" mdfsc="14px" xsfs="16px" xsfsc="13px"/>
        </Box>
    )
}

export default CartItems