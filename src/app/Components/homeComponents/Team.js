import { Box } from "@mui/material"
import Slider from '../Slider'
import lady from '../../../Images/lady.png'
import male from '../../../Images/male.png'
import canada from '../../../Images/canada.png'
import Doctor from './Doctor'

export default function Team(){
    return(
        <Box sx={{
            clear: 'both',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: {md: 'row' , xs: 'column'},
        }}>
            <Slider />
            {/* <Doctor /> */}
            <Doctor Country='Pakistan' img={lady} Name='Dr. Hareem Riaz' Speciality='General Practitioner' />
            <Doctor Country='Canada' img={canada} Name='Dr. Hareem Riaz' Speciality='General Practitioner' />
            <Doctor Country='Pakistan' img={male} Name='Dr. Hareem Riaz' Speciality='General Practitioner' />
        </Box>

    )
}