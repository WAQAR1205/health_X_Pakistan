import { Box, Typography } from "@mui/material"
import Content from "../homeComponents/Content"
import Heading from "../homeComponents/Heading"
import Image from "next/image"
import DigitalVideosCrasol from './DigitalVideosCrasol'
import DigitalVideosImage from "./DigitalVideoImage"



export default function DigitalVideos({ img }) {
    return (
        <>
            

            <Box sx={{
                
                display: 'flex',
                justifyContent: {md:'space-between',sm:'center'},
                flexDirection: { md: 'row', xs: 'column',sm: 'column' },
                width: '100%',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                
            }}>
                <Box sx={{
                    margin :'auto 0',
                   
                    width: { md: '40%', xs: '100%' ,sm:'100%' },
                    
                }}>


                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: { lg: '40px', xs: '27px', md: '30px' },
                        lineHeight: '112%',
                        textAlign: { xs: 'center', md: 'left' },
                        /* or 52px */

                        color: '#E9501D',
                    }}>

                        <span style={{
                            color: '#1F8B7B',
                        }}>
                            Our
                        </span>
                        &nbsp;Digital Videos
                    </Typography>

                    <Typography sx={{
                        fontWeight: '300',
                        fontSize: { lg: '19px', md: '14px', xs: '14px' },
                        lineHeight: '27px',
                        textAlign: { xs: 'center', md: 'left' },

                        color: '#2D4755',
                    }}>
                        Innovating to Serve You Better
                    </Typography>
                </Box>
                <Box sx={{
                    width: { md: '70%', xs: '100%' ,sm:'100%'},
                    marginTop: { md: '3%', xs: '10%' },
                    marginBottom:'4%'
                }}>
                    <DigitalVideosCrasol/>
                    
                </Box>

            </Box>
        </>
    )
}