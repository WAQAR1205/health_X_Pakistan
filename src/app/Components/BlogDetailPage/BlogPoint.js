import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function BlogPoint({content}) {

    const [isHover, setIsHover] = useState(false)

    return (

        <Box sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            display: 'flex',
            marginTop: '5%'
        }}>
            <Box sx={{
                 height: '9px',
                 width: '9px',
                 borderRadius: '50%',
                 background: '#1E1E1E',
                 marginTop: {md: '3%' , xs : '5%'},
                 marginLeft: '5%',
            }}>
            </Box>
            <Box>

            <Typography sx={{
                fontWeight: '300',
                fontSize: {md: '20px' , xs :'17px'},
                lineHeight: '36px',
                marginLeft: '5%',
                color: isHover ?  "#E9501D" : '#2D4755',
                width: '100%',
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            >
                {content}
            </Typography>
                </Box>
        </Box>
    )
}