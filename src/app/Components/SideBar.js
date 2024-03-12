import { Box , Typography } from "@mui/material"
import { useState } from "react"

export default function SideBar({type}){

    const [isHover , setIsHover] = useState(false)

    const onMouseEnter = () => {
        setIsHover(true)
    }

    const onMouseLeave =() => {
        setIsHover(false)
    }

    return(
        <Box> 
            <Typography onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave} 
            sx={{
                color: isHover? 'black': '#BEBEBE'
            }}
            >{type}</Typography>
        </Box>
    )
}