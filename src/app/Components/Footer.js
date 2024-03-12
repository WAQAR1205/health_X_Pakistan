'use client'
import { Box, Typography, Input , useMediaQuery} from '@mui/material';
import img from '../../Images/footer.png'
import Image from 'next/image';
import facebook from '../../Images/ph_facebook-logo.png'
import linkedin from '../../Images/ri_linkedin-line.png'
import insta from '../../Images/iconoir_instagram.png'
import twitter from '../../Images/pajamas_twitter.png'
import sms from '../../Images/sms.png'
import Button from './Button'
import {useTheme} from '@mui/material';

function Footer() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down('750'))
    const md = useMediaQuery('(max-width: 900px)')
    const lg = useMediaQuery('(max-width: 1200px)')
    return (
        <Box sx={{
            background: "#253239",
            fontFamily: 'Poppins',
            color: '#FFFFFF',
            width: '98%',
            margin: '0 auto'
        }} >

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: {md: 'nowrap' , xs: 'warp'},
                flexDirection: {md: 'row' , xs : 'column'},
            }}>
                <Box sx={{
                    marginTop: '10%',
                    marginLeft: {md: '100px' , xs: '0'},
                    width: {md: '20%' , xs: '100%' , lg: '25%'},
                }}>
                    <Box sx={{
                        width: {md: '90%' , xs : '90%' , lg: '90%'},
                    }}>
                        <Image
                            src={img}
                            alt='Footer'
                        />
                    </Box>

                    <Box sx={{
                        width: {md: '90%' , xs : '90%' , lg: '90%'},
                        marginTop: '7%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            /* or 39px */
                            fontSize: {md: '36px' , xs : '20px'},
                            lineHeight: '111.64%',
                            fontWeight: '500',
                        }}>
                            Healthcare Solutions For All
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '90%',
                        // height: '20px',
                        // marginLeft: '100px',
                        marginTop: '7%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '13px',
                            lineHeight: '20px',
                            // /* identical to box height */
                        }}>
                            AUSTIN, Texas, Jan. 11, 2024 — Ambiq@
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        gap: '10px',
                        width: '90%',
                        marginTop: '13%',
                    }}>
                        <Image src={facebook} />
                        <Image src={linkedin} />
                        <Image src={twitter} />
                        <Image src={insta} />
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: '10%',
                    width: {md: '20%' , xs : '100%' , lg: '20%'}
                }}>
                    <Box sx={{
                        width: '90%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontsize: '18px',
                            lineHeight: '27px',
                            /* identical to box height */

                        }}>
                            Quick Links
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '90%',
                        // height: '24px',
                        marginTop: {md: '20%' , xs: '7%'},
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            About us
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '90%',
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            FAQs
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '90%',
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            New’s and Media
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '90%',
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            Contact us
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '90%',
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            Digital Videos
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: '10%',
                    width: {md: '20%' , xs: "100%" , lg: '20%'},
                }}>
                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontsize: '18px',
                            lineHeight: '27px',
                            /* identical to box height */

                        }}>
                            Resources
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        marginTop: {md: '20%' ,  xs : '5%'},
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            Individuals & Families
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            Corporate Health Solutions
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            Health Incurrence
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            Government Health Initiate
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{
                    marginTop: '10%',
                    width: {md: '20%' , xs: '100%'},
                }}>
                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        // height: '27px',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontsize: '18px',
                            lineHeight: '27px',
                            /* identical to box height */

                        }}>
                            Our Information
                        </Typography>
                    </Box>

                    <Box sx={{
                        // background: 'red',
                        width: {md: '100%' , xs : '50%'},
                        // height: '24px',
                        marginTop: {md: '20%' , xs: '5%'},
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        // gap: '1%',
                    }}>
                        <Typography sx={{
                            marginLeft: {md: '0' , xs :'38%'},
                            width: '20%',
                        }}>
                            <Image src={sms} alt='Mail' />
                        </Typography>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */
                            marginBottom: '2%',
                            color: '#9E9E9E',
                            width: '100%'
                        }}>
                            info@healthxpakistan.com
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            Corporate Health Solutions
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            Health Incurrence
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '16px',
                            lineHeight: '24px',
                            /* identical to box height */

                            color: '#9E9E9E',
                        }}>
                            Government Health Initiate
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box sx={{
                margin: '5% auto',
                width: {md: '80%' , xs : '90%'},
                // height: '2px',
                border: '1px solid #2D4755',
            }}></Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: {md: 'nowrap' , xs: 'wrap'},
                flexDirection: {md: 'row' , xs: 'column'},
                // textAlign: {xs: 'center'},
            }}>
                <Box>
                    <Typography sx={{
                        width: {md: '100%' , xs: '90%'},
                        // height: '27px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '24px',
                        lineHeight: '111.64%',
                        /* identical to box height, or 27px */
                    }}>Join or newsletter</Typography>
                    <Typography sx={{
                        width: {md: '252px' , xs:'90%'},
                        // height: '20px',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '13px',
                        lineHeight: '20px',
                        /* identical to box height */
                        marginTop: {md: '0' , xs:"3%"},
                    }}>
                        Keep up to date with everything Reflect
                    </Typography>
                </Box>

                <Box sx={{
                    flexBasis: {md: '25%' , xs : '90%'},
                }}>

                    <Box sx={{
                        width: {md: '87.5%' , xs: '70%'},
                        height: '80%',
                        border: '1px solid',
                        background: 'white',
                        borderRadius: '7px',
                        // left: '1015px',
                        // top: '7986px',
                    }}>
                        <Input disableUnderline placeholder="email" sx={{
                            // border:'none',
                            fontWeight: '300',
                            fontSize: '13px',
                            lineHeight: '18px',
                             padding: '1%',
                             width:'65%'
                        }} />
                        <Button 
                            bg= '#E9501D'
                            color= '#FFFFFF'
                            fontWeight= '500'
                            fs= '16px'
                            lineHeight= '24px'
                            title = 'Subscribe'
                            width='33%'
                         />
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                margin: '5% auto',
                width: {md: '80%' , xs: '90%'},
                // height: '2px',
                border: '1px solid #2D4755',
            }}></Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: {md: 'nowrap' , xs: 'wrap'},
                flexDirection: {md: 'row' , xs: "column"},
                // textAlign: {xs: 'center'}
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: {md: 'nowrap' , xs: 'wrap'},
                    flexDirection: {md: 'row' , xs: "column"},
                    marginBottom: '2%',
                    // textAlign: {xs: 'center'}
                }}>
                    <Box sx={{
                        // position: absolute;
                        width: {md: '130px' , xs: '90%'},
                        height: '21px',
                        // left: 100px;
                        // top: 8114px;
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '21px',
                            /* identical to box height */

                            color: '#FFFFFF',
                        }}>
                            Terms & Condition
                        </Typography>
                    </Box>
                    <Box sx={{
                        // position: absolute;
                        width: {md: '95px' , xs: '90%'},
                        // height: '21px',
                        // left: 260px;
                        // top: 8114px;
                    }}>
                        <Typography sx={{

                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '21px',
                            /* identical to box height */

                            color: '#FFFFFF',
                        }}>
                            Privacy Policy
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    width: {md: '256px' , xs: '90%'},
                    // height: '21px',
                }}>
                    <Typography sx={{
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '21px',
                        /* identical to box height */

                        color: '#FFFFFF',
                    }}>
                        Copyright © 2024. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer

