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
import test from '../../Images/test.png'
import threearrow from '../../Images/threearrow.png'
import currency from '../../Images/currency.png'
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
                        <Content headingTwo='Solution' content='For Insurers' />
                        <Typography sx={{
                            fontWeight: '300',
                            fontSize: {md: '20px' , xs: '17px'},
                            lineHeight: '30px',
                            marginTop: '3%',
                            color: '#1E1E1E',
                            width: '100%',
                        }}>
                            Healthx addresses the issue of excessive healthcare usage, reducing the burden on insurers and patients.
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
                    <Cart img={test} one='Necessary test' two='&nbsp;& med' content='At Healthx, our physicians prescribe only necessary tests and medications, minimizing overuse of medical services, reducing insurance costs for users.' />
                    <Cart img={threearrow} one='Reduced' two='&nbsp;claim ratios' content='Healthx helps lower claim ratios through innovative healthcare services emphasizing prevention, reducing costs for insurance companies.' />
                    <Cart img={currency} one='Reducing' two='&nbsp;Hospital Costs' content='Healthx reduces hospital costs with streamlined online doctor services, offering personalized care for corporate healthcare needs.' />
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