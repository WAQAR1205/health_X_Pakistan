'use client'
import { Box, Typography } from "@mui/material"
import Content from "../Components/homeComponents/Content"
import Heading from '../Components/homeComponents/Heading'
import people from '../../Images/people.png'
import solution from '../../Images/solution 1.png'
import dedication from '../../Images/dedication 1.png'
import deal from '../../Images/deal 1.png'
import ImageList from "../Components/solutions/ImageList"
import MobileBox from '../Components/solutions/MobileBox'
import Cart from '../Components/solutions/Cart'
import down from '../../Images/downfall.png'
import long from '../../Images/longwait.png'
import quality from '../../Images/quality.png'
import Navbar from "../Components/navbar"

export default function IndividualsAndFamilies() {
    return (
        <>
            <Navbar />
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
                    flexDirection: { xs: 'column', md: 'row' },
                    width: '100%',
                }}>
                    <Box sx={{
                        width: { md: '50%', xs: '100%' }
                    }}>
                        <Content headingTwo='Solution' content='For Government' />
                        <Typography sx={{
                            fontWeight: '300',
                            fontSize: {md: '20px' , xs: '17px'},
                            lineHeight: '30px',
                            marginTop: '3%',
                            color: '#1E1E1E',
                            width: '100%',
                        }}>
                            Healthx addresses government challenges by offering an innovative, cost-effective, and efficient healthcare delivery model through our online doctor service, enhancing accessibility for citizens.
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: { md: '30%', xs: '100%' }
                    }}>
                        <Heading number='01' numberColor='#E9501D' heading='Government' headingColor='#2D4755' content='Solutions that Can Grow as You Do' contentColor='#2D4755' md='100%' mdc='120%' />
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    marginTop: '4%',
                }}>
                    <Cart img={down} one='Reduce' two='&nbsp; Healthcare Usage' content='Healthx&#39;s online doctor service minimizes healthcare service overutilization, ensuring cost control and effective resource allocation for governments.' />
                    <Cart img={long} one='Long' two='&nbsp; Waiting hours' content='Healthx provides an online doctor service, eliminating long wait times and offering personalized treatments from licensed physicians and wellness advisors 24/7.' />
                    <Cart img={quality} one='Quality' two='&nbsp;Healthcare' content='Our government healthcare solution delivers quality primary healthcare, promoting wellness and efficiency while reducing resource burdens.' />
                </Box>

                <Box>
                    <MobileBox />
                </Box>

                <Box sx={{
                    margin: '0 auto',
                    textAlign: 'center',
                    marginTop: '5%',
                }}>
                    <Content headingOne='Values' headingTwo='&nbsp;We Uphold' content='Commitment to Health and Well-being' lgH='100%' />
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                }}>
                    <ImageList img={people} title='PEOPLE-CENTRIC' subtitle='Consistently prioritize your needs' />
                    <ImageList img={solution} title='Innovation' subtitle='Utilizing our technology to innovate further for your benefit' />
                    <ImageList img={dedication} title='Commitment' subtitle='Consistently meeting needs of users, staff, partners, investors' />
                    <ImageList img={deal} title='Honesty' subtitle='Prioritize what&#39;s best for yourself at all times' />
                </Box>
            </Box>
        </>
    )
}