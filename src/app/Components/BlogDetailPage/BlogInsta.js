import {Box , Typography } from "@mui/material";
import HealthX from "../homeComponents/HealthX";
import Image from "next/image";
import Blog1 from '../../../Images/Blog1.png'
import Blog2 from '../../../Images/Blog2.png'
import Blog3 from '../../../Images/Blog3.png'
import blog4 from '../../../Images/blog4.png'
import blog6 from '../../../Images/blog5.png'
import blog5 from '../../../Images/blog6.png'

export default function BlogInsta() {
    return (
        <>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '28px',
                lineHeight: '42px',
                color: '#253239',
            }}>
                Instagram
            </Typography>
            <HealthX />

            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
            }}> 
                <Box sx={{
                    width: '30%',
                }}>
                    <Image src={Blog1} alt="shazai" style={{
                        width: '100%',
                    }} />
                </Box>
                <Box sx={{
                    width: '30%'
                }}>
                    <Image src={Blog2} alt="shazai" style={{
                        width: '100%',
                    }} />
                </Box>
                <Box sx={{
                    width: '30%'
                }}>
                    <Image src={Blog3} alt="shazai" style={{
                        width: '100%',
                    }} />
                </Box>
                </Box>


                <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
            }}> 
                <Box sx={{
                    width: '30%',
                }}>
                    <Image src={blog4} alt="shazai" style={{
                        width: '100%',
                    }} />
                </Box>
                <Box sx={{
                    width: '30%'
                }}>
                    <Image src={blog5} alt="shazai" style={{
                        width: '100%',
                    }} />
                </Box>
                <Box sx={{
                    width: '30%'
                }}>
                    <Image src={blog6} alt="shazai" style={{
                        width: '100%',
                    }} />
                </Box>
                </Box>
        </>
    )
}