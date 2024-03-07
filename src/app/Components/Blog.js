import { Box, Typography } from "@mui/material"
import Image from "next/image"
import blog from '../../Images/Blog.png'

export default function Blog(){
    return(
        <Box sx={{
            width: '25%',
        }}>
        <Typography>Jan 11 24</Typography>
              <Typography sx={{
                width: '90%',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '24px',
                lineHeight: '111.64%',
                /* or 27px */
                color: '#E9501D',
              }}>
                Mental health Services should count as Healthcare
                </Typography>
              <Image src={blog}/>
              <Typography sx={{
                padding: '1%',
                gap: '10px',
                width: '60px',
                background: '#D3FFF9',
                borderRadius: '49px',
                color: '#1F8B7B',                
              }}>News
              </Typography>
              <Typography sx={{
                margin: '0 auto',
                width: '90%',
                marginTop: '2%'
              }}>
              AUSTIN, Texas, Jan. 11, 2024 — Ambiq@, a recognized
technology leader in ultra-low power semiconductors for IoT
endpoints. today announced that it...
              </Typography>
        </Box>
    )
}