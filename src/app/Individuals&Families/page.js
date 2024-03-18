'use client'
import { Box } from "@mui/material"
import Content from '../Components/homeComponents/Content '
import Heading from '../Components/homeComponents/Heading'
export default function IndividualsAndFamilies(){
    return(
        <Box sx={{
            width: '99%',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            alignItems: 'center',
            marginTop: '4%',
            overflow: 'hidden'
          }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: {xs: 'column' , md: 'row'},
                width: '100%',
            }}>
            <Box sx={{
                width: {md: '40%' , xs: '100%'}
            }}>
                 <Content headingTwo='Solution' content='For Individuals & Families'  />
            </Box>
            <Box sx={{
                width: {md: '45%' , xs: '100%'}
            }}>
                <Heading number='01' numberColor='#E9501D' heading='Individual & Families' headingColor='#2D4755' content=' Solutions that Can Grow as You Do' contentColor='#2D4755' md='100%' mdc='120%'/>
            </Box>
            </Box>
        </Box>
    )
}