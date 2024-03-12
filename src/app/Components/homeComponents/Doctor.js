import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";


function Doctor({ Name, Country, img , Speciality}) {
    // const [isHovered, setIsHovered] = useState(false);
    return (
        <Box sx={{
            // transform: isHovered ?  'translateZ(42px);' : 'none;',
            margin: '0 auto',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: {md: '100%' , xs: '80%'},
            }}
            
            >

                <Image src={img} style={{
                    width: '100%',
                }}
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                />
                <Box sx={{
                    width: {xs: '15%'  , md: '26%'},
                    height: '30px',
                    background: '#1F8B7B',
                    borderRadius: '29px',
                    zIndex: '2',
                    marginLeft: {md: '-36%' , sm: '-30%' , xs: '-34%'},
                    marginTop: {md: '15%' , xs: '9%'}
                }}>
                    <Typography sx={{
                        width: '70%',
                        fontWeight: '400',
                        fontSize: {md: '10px' , xs: '10px' , lg: '12px'},
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
                // visibility: isHovered ? 'visible' : 'hidden',
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