"use client";
import { Box, Typography, Input, useMediaQuery } from "@mui/material";
import img from "../../Images/footer.png";
import Image from "next/image";
import facebook from "../../Images/ph_facebook-logo.png";
import linkedin from "../../Images/ri_linkedin-line.png";
import insta from "../../Images/iconoir_instagram.png";
import twitter from "../../Images/pajamas_twitter.png";
import sms from "../../Images/sms.png";
import Button from "./Button";
import { useTheme } from "@mui/material";
import Link from "next/link";

function Footer() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down("750"));
    const md = useMediaQuery("(max-width: 900px)");
    const lg = useMediaQuery("(max-width: 1200px)");
    return (
        <Box
            sx={{
                background: "#253239",
                fontFamily: "Poppins",
                color: "#FFFFFF",
                width: "98%",
                margin: "0 auto",
                paddingLeft: { xs: "5%", md: "0" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: { md: "nowrap", xs: "warp" },
                    flexDirection: { md: "row", xs: "column" },
                }}
            >
                <Box
                    sx={{
                        marginTop: "10%",
                        marginLeft: { md: "100px", xs: "0" },
                        width: { md: "30%", xs: "100%", lg: "25%" },
                    }}
                >
                    <Box
                        sx={{
                            width: { md: "40%", xs: "90%", lg: "90%" },
                        }}
                    >
                        <Image src={img} alt="Footer" />
                    </Box>

                    <Box
                        sx={{
                            width: { md: "90%", xs: "90%", lg: "90%" },
                            marginTop: "7%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontStyle: "normal",
                                /* or 39px */
                                fontSize: { lg: "36px", xs: "20px", md: "22px" },
                                lineHeight: "111.64%",
                                fontWeight: "500",
                            }}
                        >
                            Healthcare Solutions For All
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: "96%",
                            marginTop: "7%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontStyle: "normal",
                                fontWeight: "300",
                                fontSize: { lg: "13px", xl: "15", md: "11px", xs: "10px" },
                                lineHeight: "20px",
                                // /* identical to box height */
                            }}
                        >
                            AUSTIN, Texas, Jan. 11, 2024 — Ambiq@
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        marginTop: "10%",
                        width: { md: "20%", xs: "100%", lg: "20%" },
                    }}
                >
                    <Box
                        sx={{
                            width: "90%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontsize: { lg: "18px", md: "14px", xs: "13px" },
                                lineHeight: "27px",
                                /* identical to box height */
                            }}
                        >
                            Quick Links
                        </Typography>
                    </Box>

<<<<<<< HEAD
                    <Box sx={{
                        width: '90%',
                        marginTop: {md: '20%' , xs: '7%'},
                    }}>
                        <Link href='/AboutUs' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontsize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
=======
                    <Box
                        sx={{
                            width: "90%",
                            // height: '24px',
                            marginTop: { md: "20%", xs: "7%" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontStyle: "normal",
                                fontWeight: "300",
                                fontsize: { lg: "16px", md: "12px", xs: "11px" },
                                lineHeight: "24px",
                                /* identical to box height */

                                color: "#9E9E9E",
                            }}
                        >
>>>>>>> 983fe7dc88294ea69498f0361fd2217e758452b2
                            About us
                        </Typography>
                            </Link>
                    </Box>
<<<<<<< HEAD
                    <Box sx={{
                        width: '90%',
                        marginTop: '5%',
                    }}>
                        <Link href='/FAQ' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontsize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
=======
                    <Box
                        sx={{
                            width: "90%",
                            // height: '24px',
                            marginTop: "5%",
                        }}
                    >
                        <Link href="/FAQ">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontsize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */
>>>>>>> 983fe7dc88294ea69498f0361fd2217e758452b2

                                    color: "#9E9E9E",
                                }}
                            >
                                FAQs
                            </Typography>
                        </Link>
                    </Box>

<<<<<<< HEAD
                    <Box sx={{
                        width: '90%',
                        marginTop: '5%',
                    }}>
                        <Link href='/NewsnMedia' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
                            New’s and Media
                        </Typography>
                            </Link>
                    </Box>

                    <Box sx={{
                        width: '90%',
                        marginTop: '5%',
                    }}>
                        <Link href='/ContactUs' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Contact us
=======
                    <Box
                        sx={{
                            width: "90%",
                            // height: '24px',
                            marginTop: "5%",
                        }}
                    >
                        <Link href="/NewsnMedia">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                New’s and Media
>>>>>>> 983fe7dc88294ea69498f0361fd2217e758452b2
                            </Typography>
                        </Link>
                    </Box>

<<<<<<< HEAD
                    <Box sx={{
                        width: '90%',
                        marginTop: '5%',
                    }}>
                        <Link href='#' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
                            Digital Videos
                        </Typography>
                            </Link>
=======
                    <Box
                        sx={{
                            width: "90%",
                            // height: '24px',
                            marginTop: "5%",
                        }}
                    >
                        <Link href="/ContactUs">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Contact us
                            </Typography>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            width: "90%",
                            // height: '24px',
                            marginTop: "5%",
                        }}
                    >
                        <Link href="#">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Digital Videos
                            </Typography>
                        </Link>
>>>>>>> 983fe7dc88294ea69498f0361fd2217e758452b2
                    </Box>
                </Box>

                <Box
                    sx={{
                        marginTop: "10%",
                        width: { md: "20%", xs: "100%", lg: "20%" },
                    }}
                >
                    <Box
                        sx={{
                            width: { md: "100%", xs: "90%" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontsize: { lg: "18px", md: "14px", xs: "13px" },
                                lineHeight: "27px",
                                /* identical to box height */
                            }}
                        >
                            Resources
                        </Typography>
                    </Box>

<<<<<<< HEAD
                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        marginTop: {md: '20%' ,  xs : '5%'},
                    }}>
                        <Link href='/Individuals&Families' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
                            Individuals & Families
                        </Typography>
                            </Link>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        // height: '24px',
                        marginTop: '5%',
                    }}>
                        <Link href='/CorporateHealthSolutions' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
                            Corporate Health Solutions
                        </Typography>
                            </Link>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        marginTop: '5%',
                    }}>
                        <Link href='/HealthIncurrence' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
                            Health Incurrence
                        </Typography>
                            </Link>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        marginTop: '5%',
                    }}>
                        <Link href='/GovernmentHealthInitiate' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
                            Government Health Initiate
                        </Typography>
                            </Link>
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: '10%',
                    width: {md: '20%' , xs: '100%'},
                }}>
                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                    }}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontsize: {lg: '18px' , md: '14px' , xs: '13px'},
                            lineHeight: '27px',
                            /* identical to box height */

                        }}>
=======
                    <Box
                        sx={{
                            width: { md: "100%", xs: "90%" },
                            marginTop: { md: "20%", xs: "5%" },
                        }}
                    >
                        <Link href="/Individuals&Families">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Individuals & Families
                            </Typography>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            width: { md: "100%", xs: "90%" },
                            // height: '24px',
                            marginTop: "5%",
                        }}
                    >
                        <Link href="/CorporateHealthSolutions">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Corporate Health Solutions
                            </Typography>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            width: { md: "100%", xs: "90%" },
                            // height: '24px',
                            marginTop: "5%",
                        }}
                    >
                        <Link href="/HealthIncurrence">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Health Incurrence
                            </Typography>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            width: { md: "100%", xs: "90%" },
                            // height: '24px',
                            marginTop: "5%",
                        }}
                    >
                        <Link href="/GovernmentHealthInitiate">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Government Health Initiate
                            </Typography>
                        </Link>
                    </Box>
                </Box>

                <Box
                    sx={{
                        marginTop: "10%",
                        width: { md: "20%", xs: "100%" },
                    }}
                >
                    <Box
                        sx={{
                            width: { md: "100%", xs: "90%" },
                            // height: '27px',
                        }}
                    >
                        <Typography
                            sx={{
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontsize: { lg: "18px", md: "14px", xs: "13px" },
                                lineHeight: "27px",
                                /* identical to box height */
                            }}
                        >
>>>>>>> 983fe7dc88294ea69498f0361fd2217e758452b2
                            Our Information
                        </Typography>
                    </Box>

<<<<<<< HEAD
                    <Box sx={{
                        width: {md: '100%' , xs : '10%'},
                        marginTop: {md: '20%' , xs: '5%'},
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{
                            marginLeft: {md: '0' , xs :'38%'},
                            width: {lg:'12%' , xs: '90%' , md: '12%'},
                        }}>
                            <Image src={sms} alt='Mail' />
                        </Typography>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '10px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            marginBottom: '2%',
                            color: '#9E9E9E',
                            width: '100%'
                        }}>
=======
                    <Box
                        sx={{
                            // background: 'red',
                            width: { md: "100%", xs: "10%" },
                            // height: '24px',
                            marginTop: { md: "20%", xs: "5%" },
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            // gap: '1%',
                        }}
                    >
                        <Typography
                            sx={{
                                marginLeft: { md: "0", xs: "38%" },
                                width: { lg: "12%", xs: "50%", md: "12%" },
                            }}
                        >
                            <Image src={sms} alt="Mail" />
                        </Typography>
                        <Typography
                            sx={{
                                fontStyle: "normal",
                                fontWeight: "300",
                                fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                lineHeight: "24px",
                                /* identical to box height */
                                marginBottom: "2%",
                                color: "#9E9E9E",
                                width: "100%",
                            }}
                        >
>>>>>>> 983fe7dc88294ea69498f0361fd2217e758452b2
                            info@healthxpakistan.com
                        </Typography>
                    </Box>

<<<<<<< HEAD
                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        height: '24px',
                        marginTop: '5%',
                    }}>
                        <Link href='/CorporateHealthSolutions' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
                            Corporate Health Solutions
                        </Typography>
                            </Link>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        marginTop: '5%',
                    }}>
                        <Link href='/HealthIncurrence' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
                            Health Incurrence
                        </Typography>
                            </Link>
                    </Box>

                    <Box sx={{
                        width: {md: '100%' , xs : '90%'},
                        marginTop: '5%',
                    }}>
                        <Link href='GovernmentHealthInitiate' style={{ textDecoration: 'none'}}>
                        <Typography sx={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: {lg: '16px' , md: '12px' , xs: '11px'},
                            lineHeight: '24px',
                            /* identical to box height */
                            
                            color: '#9E9E9E',
                        }}>
                            Government Health Initiate
                        </Typography>
                            </Link>
=======
                    <Box
                        sx={{
                            width: { md: "100%", xs: "90%" },
                            height: "24px",
                            marginTop: "5%",
                        }}
                    >
                        <Link href="/CorporateHealthSolutions">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Corporate Health Solutions
                            </Typography>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            width: { md: "100%", xs: "90%" },
                            // height: '24px',
                            marginTop: "5%",
                        }}
                    >
                        <Link href="/HealthIncurrence">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Health Incurrence
                            </Typography>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            width: { md: "100%", xs: "90%" },
                            // height: '24px',
                            marginTop: "5%",
                        }}
                    >
                        <Link href="GovernmentHealthInitiate">
                            <Typography
                                sx={{
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                    lineHeight: "24px",
                                    /* identical to box height */

                                    color: "#9E9E9E",
                                }}
                            >
                                Government Health Initiate
                            </Typography>
                        </Link>
>>>>>>> 983fe7dc88294ea69498f0361fd2217e758452b2
                    </Box>
                </Box>
            </Box>
<<<<<<< Updated upstream
            <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        width: {lg: '20%' , xs: '90%' , md: '30%'},
                        marginTop: {xs: '5%' , md: '3%' , lg: '0'},
                        marginLeft: {xs: '0' , lg: '5%' , md: '7%'}
                    }}>
                        <Image src={facebook} alt="shazai" />
                        <Image src={linkedin}  alt="shazai" />
                        <Image src={twitter} alt="shazai" />
                        <Image alt="shazai" src={insta} />
                    </Box>
            <Box sx={{
                margin: '5% auto',
                width: {md: '80%' , xs : '90%'},
                border: '1px solid #2D4755',
            }}></Box>
=======
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: { lg: "20%", xs: "90%", md: "30%" },
                    marginTop: { xs: "5%", md: "3%", lg: "0" },
                    marginLeft: { xs: "0", lg: "5%", md: "7%" },
                }}
            >
                <Image src={facebook} alt="shazai" />
                <Image src={linkedin} alt="shazai" />
                <Image src={twitter} alt="shazai" />
                <Image alt="shazai" src={insta} />
            </Box>
            <Box
                sx={{
                    margin: "5% auto",
                    width: { md: "80%", xs: "90%" },
                    // height: '2px',
                    border: "1px solid #2D4755",
                }}
            ></Box>
>>>>>>> Stashed changes

<<<<<<< HEAD
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: {md: 'nowrap' , xs: 'wrap'},
                flexDirection: {md: 'row' , xs: 'column'},
            }}>
                <Box>
                    <Typography sx={{
                        width: {md: '100%' , xs: '90%'},
                        // height: '27px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: {lg: '24px' , md: '20px' , xs: '16px'},
                        lineHeight: '111.64%',
                        /* identical to box height, or 27px */
                    }}>Join or newsletter</Typography>
                    <Typography sx={{
                        width: {md: '252px' , xs:'90%'},
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: {lg: '13px' , md: '12px' , xs: '11px'},
                        lineHeight: '20px',
                        /* identical to box height */
                        marginTop: {md: '0' , xs:"3%"},
                    }}>
=======
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: { md: "nowrap", xs: "wrap" },
                    flexDirection: { md: "row", xs: "column" },
                    // textAlign: {xs: 'center'},
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            width: { md: "100%", xs: "90%" },
                            // height: '27px',
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: { lg: "24px", md: "20px", xs: "16px" },
                            lineHeight: "111.64%",
                            /* identical to box height, or 27px */
                        }}
                    >
                        Join or newsletter
                    </Typography>
                    <Typography
                        sx={{
                            width: { md: "252px", xs: "90%" },
                            // height: '20px',
                            fontStyle: "normal",
                            fontWeight: "300",
                            fontSize: { lg: "13px", md: "12px", xs: "11px" },
                            lineHeight: "20px",
                            /* identical to box height */
                            marginTop: { md: "0", xs: "3%" },
                        }}
                    >
>>>>>>> 983fe7dc88294ea69498f0361fd2217e758452b2
                        Keep up to date with everything Reflect
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flexBasis: { md: "25%", xs: "90%" },
                    }}
                >
                    <Box
                        sx={{
                            width: { lg: "87.5%", xs: "70%", md: "130%" },
                            height: "80%",
                            border: "1px solid",
                            background: "white",
                            borderRadius: "7px",
                            // left: '1015px',
                            // top: '7986px',
                        }}
                    >
                        <Input
                            disableUnderline
                            placeholder="email"
                            sx={{
                                // border:'none',
                                fontWeight: "300",
                                fontSize: { lg: "13px", md: "12px", xs: "11px" },
                                lineHeight: "18px",
                                padding: { md: "3%", xs: "1%" },
                                width: "65%",
                            }}
                        />
                        <Button
                            bg="#E9501D"
                            color="#FFFFFF"
                            fontWeight="500"
                            fs={{ lg: "16px", md: "12px", xs: "11px" }}
                            lineHeight="24px"
                            title="Subscribe"
                            width="35%"
                            mt={{ xs: "0", md: "-3px", lg: "-5px" }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    margin: "5% auto",
                    width: { md: "80%", xs: "90%" },
                    // height: '2px',
                    border: "1px solid #2D4755",
                }}
            ></Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: { md: "nowrap", xs: "wrap" },
                    flexDirection: { md: "row", xs: "column" },
                    // textAlign: {xs: 'center'}
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: { md: "nowrap", xs: "wrap" },
                        flexDirection: { md: "row", xs: "column" },
                        marginBottom: "2%",
                        // textAlign: {xs: 'center'}
                    }}
                >
                    <Box
                        sx={{
                            // position: absolute;
                            width: { md: "130px", xs: "90%" },
                            height: "21px",
                            // left: 100px;
                            // top: 8114px;
                        }}
                    >
                        <Typography
                            sx={{
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                lineHeight: "21px",
                                /* identical to box height */

                                color: "#FFFFFF",
                            }}
                        >
                            Terms & Condition
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            // position: absolute;
                            width: { md: "95px", xs: "90%" },
                            // height: '21px',
                            // left: 260px;
                            // top: 8114px;
                        }}
                    >
                        <Typography
                            sx={{
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: { lg: "16px", md: "12px", xs: "11px" },
                                lineHeight: "21px",
                                /* identical to box height */

                                color: "#FFFFFF",
                            }}
                        >
                            Privacy Policy
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: { md: "256px", xs: "90%" },
                        // height: '21px',
                    }}
                >
                    <Typography
                        sx={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: { lg: "16px", md: "12px", xs: "11px" },
                            lineHeight: "21px",
                            /* identical to box height */

                            color: "#FFFFFF",
                        }}
                    >
                        Copyright © 2024. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
