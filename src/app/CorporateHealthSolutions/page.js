'use client'
import { Box, Typography } from "@mui/material"
import Content from '../Components/homeComponents/Content '
import Heading from '../Components/homeComponents/Heading'
import people from '../../Images/people.png'
import solution from '../../Images/solution 1.png'
import dedication from '../../Images/dedication 1.png'
import deal from '../../Images/deal 1.png'
import ImageList from "../Components/solutions/ImageList"
import MobileBox from '../Components/solutions/MobileBox'
import Cart from '../Components/solutions/Cart'
import wait from '../../Images/waiting 1.png'
import rushed from '../../Images/rushed 1.png'
import dollar from '../../Images/dollar.png'
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
                        <Content headingTwo='Solution' content='For Corporates' />
                        <Typography sx={{
                            fontWeight: '300',
                            fontSize: {md: '20px' , xs: '17px'},
                            lineHeight: '30px',
                            marginTop: '3%',
                            color: '#1E1E1E',
                            width: '100%',
                        }}>
                            At Healthx, we offer cost-effective corporate healthcare solutions for enhanced employee well-being and productivity.
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: { md: '30%', xs: '100%' }
                    }}>
                        <Heading number='01' numberColor='#E9501D' heading='Corporates' headingColor='#2D4755' content='Solutions that Can Grow as You Do' contentColor='#2D4755' md='100%' mdc='120%' />
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    marginTop: '4%',
                }}>
                    <Cart img={wait} one='No more' two='&nbsp;waiting in line' content='At Healthx, no more waiting. Access online doctors hassle-free. Book consultations, get prescriptions, and manage health records conveniently online.' />
                    <Cart img={rushed} one='Rushed' two='&nbsp;visits' content='Traditional visits feel rushed, leading to unnecessary costs. Healthx&#39;s 24/7 online doctors offer thorough attention and treatment, saving expenses.' />
                    <Cart img={dollar} one='Easily' two='&nbsp;Accessible' content='Our team offers personalized, cost-effective healthcare, minimizing unnecessary expenses through remote consultations and evidence-based practice.' />
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