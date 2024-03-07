import { useState } from "react";
import { Box, Typography } from "@mui/material";
import lady from '../../../Images/lady.png'
import Image from "next/image";
import canada from '../../../Images/canada.png'
import male from '../../../Images/male.png'

function Doctor({ Name, Country, img , Speciality}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Box sx={{
            boxShadow: isHovered ? '0px 4px 20px 0px #0000001A' : 'none',
            // zIndex: isHovered ? '0':'100',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '90%'
            }}
            
            >

                <Image src={img} style={{
                    width: '100%',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                />
                <Box sx={{
                    width: '28%',
                    // height: ''
                    height: '30px',
                    background: '#1F8B7B',
                    borderRadius: '29px',
                    zIndex: '2',
                    marginLeft: '-38%',
                    marginTop: '12%'
                }}>
                    <Typography sx={{
                        width: '70%',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '27px',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        color: '#FFFFFF',
                        margin: '0 auto',
                        marginTop: '4%',
                    }}>
                        {Country}
                    </Typography>
                </Box>


            </Box>

            <Box sx={{
                width: '100%',
                marginLeft: '2%',
                visibility: isHovered ? 'visible' : 'hidden',
            }}

            >
                <Typography sx={{
                    width: '209px',

                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '26px',
                    lineHeight: '39px',

                    color: '#253239',
                }}>
                    {Name}
                </Typography>
                <Typography sx={{
                    width: '181px',
                    fontWeight: '300',
                    fontSize: '18px',
                    lineHeight: '27px',
                    color: '#253239',

                }}>
                    {Speciality}
                </Typography>
            </Box>


        </Box>
    )
}

export default Doctor
