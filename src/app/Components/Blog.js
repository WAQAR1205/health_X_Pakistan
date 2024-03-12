import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { useState } from "react"

export default function Blog({img , head , Content , type}){

    const [isHover , setIsHover] = useState(false)

    const onMouseEnter = () =>{
        setIsHover(true)
    }

    const onMouseLeave = () => {
        setIsHover(false)
    }
    return(
        <Box sx={{
            width: {md: '100%' , xs: '80%'},
            margin: '0 auto',
            // marginTop: {xs:'3%', md: '-20%'},
            height: 'auto'
        }}
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}  
        >
        <Typography sx={{
            marginLeft: '1vw',

        }}>Jan 11 24</Typography>
              <Typography sx={{
                width: {xs:'80%' , sm: '100%'},
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: {md: '17px' , xs: '15px'},
                lineHeight: '111.64%',
                /* or 27px */
                color: isHover ? '#E9501D' : 'black',
                margin: {xs: '0 auto'},
                // marginTop: '20%'
                // margin: '0 auto'
              }}>
                {head}
                </Typography>
                <Box sx={{
                    marginTop: '1vw',
                    width: {xs: '90%'},
                    // margin: '0 auto',
                }}>
              <Image src={img} style={{
                width: '100%'
              }}/>
                </Box>
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