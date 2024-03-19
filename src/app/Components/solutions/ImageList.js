import { Box, Typography } from "@mui/material";
import Image from "next/image";


export default function ImageList({img , title , subtitle}){
  return(
    <Box sx={{
      width: {md: '20%' , xs: '100%'},
      textAlign: {md: 'center' , xs: 'start'},
      marginTop: '4%',
      marginLeft: {xs: '8%' , md: '0'}
    }}>
      <Box>
        <Image src={img} alt="Image" />
      </Box>
      <Box sx={{
        marginTop: '5%'
      }}>
      <Typography sx={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '23px',
        /* or 22px */
        textAlign: {md: 'center' , xs: 'start'},
        color: '#E9501D',
      }}>
        {title}
        </Typography>
      <Typography sx={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '18px',
        lineHeight: '27px',
        textAlign: {md: 'center' , xs: 'start'},
        
        color: '#1E1E1E',
      }}>
        {subtitle}
        </Typography>
    </Box>
    </Box>
  )
}