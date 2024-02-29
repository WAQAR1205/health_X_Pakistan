import { Box, Typography, Input, Button } from '@mui/material';
import img from '../../Images/footer.png'
import Image from 'next/image';
import facebook from '../../Images/ph_facebook-logo.png'
import linkedin from '../../Images/ri_linkedin-line.png'
import insta from '../../Images/iconoir_instagram.png'
import twitter from '../../Images/pajamas_twitter.png'
import sms from '../../Images/sms.png'
// import Button from '../Components/Button'

function Footer() {
    return (
        <Box sx={{
            background: "#253239",
            fontFamily: 'Poppins',
            color: '#FFFFFF',
            width: '100vw',
        }} >

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
            }}>
                <Box sx={{
                    marginTop: '10%',
                    marginLeft: '100px',
                }}>
                    <Box sx={{
                        width: '189px',
                        height: '77.91px',
                    }}>
                        <Image
                            src={img}
                            alt='Footer'
                        />
                    </Box>

                    <Box sx={{
                        // position: 'absolute',
                        width: '350px',
                        height: '78px',
                        // marginLeft: '100px',
                        marginTop: '7%',
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            /* or 39px */
                            fontSize: '35.0567px',
                            lineHeight: '111.64%',
                            fontWeight: '500',
                        }}>
                            Healthcare Solutions For All
                        </Typography>
                    </Box>

                    <Box sx={{
                        // position: absolute;
                        width: '239px',
                        height: '20px',
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
                        gap: '10px',
                        width: '132px',
                        height: '24.85px',
                        // marginLeft: '101px',
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
                }}>
                    <Box sx={{
                        width: '101px',
                        height: '27px',
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
                        width: '108px',
                        height: '24px',
                        marginTop: '20%',
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
                        width: '108px',
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
                            FAQs
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '130px',
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
                            New’s and Media
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '108px',
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
                            Contact us
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '108px',
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
                            Digital Videos
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: '10%',
                }}>
                    <Box sx={{
                        width: '101px',
                        height: '27px',
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
                        width: '180px',
                        height: '24px',
                        marginTop: '20%',
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
                        width: '200px',
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
                        width: '130px',
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
                            Health Incurrence
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '200px',
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
                            Government Health Initiate
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{
                    marginTop: '10%',
                }}>
                    <Box sx={{
                        width: '120px',
                        height: '27px',
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
                        width: '220px',
                        height: '24px',
                        marginTop: '20%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // gap: '1%',
                    }}>
                        <Typography>
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
                        }}>
                            info@healthxpakistan.com
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '200px',
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
                        width: '130px',
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
                            Health Incurrence
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '200px',
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
                            Government Health Initiate
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box sx={{
                margin: '5% auto',
                width: '80%',
                height: '2px',
                border: '1px solid #2D4755',
            }}></Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <Box>
                    <Typography sx={{
                        width: '214px',
                        height: '27px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '24px',
                        lineHeight: '111.64%',
                        /* identical to box height, or 27px */
                    }}>Join or newsletter</Typography>
                    <Typography sx={{
                        width: '252px',
                        height: '20px',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '13px',
                        lineHeight: '20px',
                        /* identical to box height */

                    }}>
                        Keep up to date with everything Reflect
                    </Typography>
                </Box>

                <Box sx={{
                    flexBasis: '25%',
                    // background: 'red'
                }}>

                    <Box sx={{
                        // position: 'absolute',
                        width: '87.5%',
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
                        }} />
                        <Button sx={{
                            background: '#E9501D',
                            color: '#FFFFFF',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '24px',
                        }}>Subscribe</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                margin: '5% auto',
                width: '80%',
                height: '2px',
                border: '1px solid #2D4755',
            }}></Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginBottom: '2%'
                }}>
                    <Box sx={{
                        // position: absolute;
                        width: '130px',
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
                        width: '95px',
                        height: '21px',
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
                    width: '256px',
                    height: '21px',
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


// ------------------------------------GPT responsiveFontSizes........................
// import { Box, Typography, Input, Button } from '@mui/material';
// import Image from 'next/image';
// import img from '../../Images/footer.png';
// import facebook from '../../Images/ph_facebook-logo.png';
// import linkedin from '../../Images/ri_linkedin-line.png';
// import insta from '../../Images/iconoir_instagram.png';
// import twitter from '../../Images/pajamas_twitter.png';
// import sms from '../../Images/sms.png';

// function Footer() {
//     return (
//         <Box sx={{
//             background: "#253239",
//             fontFamily: 'Poppins, sans-serif',
//             color: '#FFFFFF',
//             padding: '2rem',
//         }}>
//             <Box sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 textAlign: 'center',
//                 gap: '2rem',
//             }}>
//                 <Box sx={{ maxWidth: '400px', width: '100%' }}>
//                     <Image src={img} alt='Footer' width={400} height={100} />
//                 </Box>
//                 <Typography variant="h5">
//                     Healthcare Solutions For All
//                 </Typography>
//                 <Typography variant="body1">
//                     AUSTIN, Texas, Jan. 11, 2024 — Ambiq@
//                 </Typography>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
//                     <Image src={facebook} width={24} height={24} />
//                     <Image src={linkedin} width={24} height={24} />
//                     <Image src={twitter} width={24} height={24} />
//                     <Image src={insta} width={24} height={24} />
//                 </Box>
//             </Box>
//             {/* Quick Links, Resources, Our Information sections */}
//             {/* ... */}
//             {/* Newsletter Subscription */}
//             {/* ... */}
//             {/* Terms & Privacy */}
//             {/* ... */}
//             <Box sx={{ margin: '2rem 0', borderBottom: '1px solid #2D4755' }} />
//             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
//                 <Box>
//                     <Typography variant="h6">Join our newsletter</Typography>
//                     <Typography variant="body1">
//                         Keep up to date with everything Reflect
//                     </Typography>
//                 </Box>
//                 <Box sx={{ width: '100%' }}>
//                     <Input disableUnderline placeholder="Enter your email" sx={{ width: '100%' }} />
//                     <Button variant="contained" sx={{ mt: '1rem', width: '100%' }}>Subscribe</Button>
//                 </Box>
//             </Box>
//             <Box sx={{ margin: '2rem 0', borderBottom: '1px solid #2D4755' }} />
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
//                 <Box>
//                     <Typography variant="body2">Terms & Conditions</Typography>
//                     <Typography variant="body2">Privacy Policy</Typography>
//                 </Box>
//                 <Typography variant="body2">© 2024. All rights reserved.</Typography>
//             </Box>
//         </Box>
//     );
// }

// export default Footer;
