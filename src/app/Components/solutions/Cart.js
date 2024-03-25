import { Box } from "@mui/material"
import Image from "next/image"
import Content from "../homeComponents/Content "
import { useState } from "react"
import Navbar from "../navbar"

function Cart({ img, one, two, content }) {
    const [hover, setHover] = useState(false)

    return (
        <Box sx={{
            background: '#FFFFFF',
            width: { md: '25%', xs: '70%' },
            padding: '2%',
            borderRadius: '10px',
            border: hover ? '1px solid #E9501D' : 'none',
            boxShadow: '#E9501D'
        }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image src={img} alt="image" />
            <Content headingOne={one} headingTwo={two} content={content} lg="26px" Lhl="57px" lgC='19px' lh='28px' mdfs="18px" mdfsc="14px" xsfs="16px" xsfsc="13px"/>
        </Box>
    )
}

export default Cart