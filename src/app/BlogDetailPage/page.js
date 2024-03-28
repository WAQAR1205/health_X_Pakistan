'use client'
import { Box, Typography } from '@mui/material'
import Navbar from '../Components/navbar'
import Blog from '../Components/Blog'
import addition from '../../Images/addition.png'
import Content from '../Components/homeComponents/Content'
import InputCom from '../Components/ContactUsComponent/InputCom'
import Button from '../Components/Button'
import BlogDetailContent from '../Components/BlogDetailPage/BlogDetailContent'
import BlogDetailPage from '../mockData/BlogDetailPage/BlogPageData'
import Image from 'next/image'
import femaleDoctor from '../../Images/femaleDoctor.png'
import heart from '../../Images/heart.png'
import BlogPoint from '../Components/BlogDetailPage/BlogPoint'
import BlogInsta from '../Components/BlogDetailPage/BlogInsta'
import rectAdd from '../../Images/RectangleAdd.png'

function page() {
    return (
        <>
            <Navbar />
            <Box sx={{
                maxWidth: '99%',
                fontFamily: 'Poppins',
                alignItems: 'center',
                overflow: 'hidden',
                margin: '0 auto'
            }}>
                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '3%',
                    flexDirection: { xs: 'column', md: 'row' },
                }}>
                    <Box sx={{
                        width: { md: '70%', xs: '90%' }
                    }}>
                        <Typography sx={{
                            fontWeight: '300',
                            fontSize: { md: '25px', xs: '20px' },
                            lineHeight: '38px',
                            leadingTrim: 'both',
                            textEdge: 'cap',

                            color: '#2D4755',
                        }}>
                            Jan 11.24
                        </Typography>
                        <Typography sx={{
                            fontWeight: '500',
                            fontSize: { md: '48px', xs: '38px' },
                            lineHeight: '112%',
                            color: '#2D4755',
                            width: '100%'
                        }}>
                            The Rising Cost of Healthcare: Is It Too Late to Bring Costs Down?
                        </Typography>
                        <Box sx={{
                            width: '100%',
                            marginTop: '4%'
                        }}>
                            <Image src={rectAdd} style={{
                                width: '100%'

                            }} alt='redAdd' />
                        </Box>
                        <Typography sx={{
                            fontWeight: '300',
                            fontSize: { md: '24px', xs: '20px' },
                            lineHeight: '35px',
                            color: '#2D4755',
                            width: '100%',
                            marginTop: '2%'
                        }}>
                            {BlogDetailPage[0].First}
                        </Typography>
                    </Box>
                    {/* ...... */}
                    <Box sx={{
                        width: { md: '28%', xs: '100%' },
                        display: 'flex',
                        flexDirection: { xs: 'row', md: 'column' },
                        justifyContent: 'sapce-between',
                    }}>
                        <Box sx={{
                            boxShadow: `0px 4.39890718460083px 17.59562873840332px 0px #0000000D`,
                            background: '#FFFFFF',
                            width: { md: '100%', xs: '47%' },
                        }}>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: { md: '25px', xs: '22px' },
                                lineHeight: '37px',
                                marginLeft: '5%',
                                color: '#1F8B7B',
                            }}>
                                On This Page
                            </Typography>
                            <BlogPoint content='Factors Behind Rising Healthcare Cost' />
                            <BlogPoint content='Medical Advancements' />
                            <BlogPoint content='Aging Population' />
                            <BlogPoint content='Increased Demand' />
                            <BlogPoint content='Embrace Preventive Healthcare' />
                            <BlogPoint content='Promote Generic Medications' />

                        </Box>

                        <Box sx={{
                            marginTop: '20%',
                            width: { md: '100%', xs: '47%' }
                        }}>
                            <BlogInsta />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                }}>
                    <BlogDetailContent head='Understanding the Factors Behind Rising Healthcare Costs:' content='Several factors contribute to the escalating cost of healthcare in Pakistan' color='#2D4755' fontWeight='500' />
                    <BlogDetailContent head='Medical Advancements' content={BlogDetailPage[0].MedicalAdvancements} />
                    <BlogDetailContent head='Aging Population' content={BlogDetailPage[0].AgingPopulation} />
                    <BlogDetailContent head='Increased Demand' content={BlogDetailPage[0].IncreasedDemand} />
                    <Box sx={{
                        width: '70%',
                        // margin: {xs: '0 auto' , md: '0'},
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexDirection: { md: 'row', xs: 'column' },
                        marginTop: '4%',
                    }}>
                        <Box sx={{
                            width: { md: '40%', xs: '70%' },
                        }}>
                            <Image src={heart} style={{
                                width: '100%',
                            }} alt='heart' />
                        </Box>
                        <Box sx={{
                            width: { md: '40%', xs: '70%' },
                        }}>
                            <Image src={femaleDoctor} style={{
                                width: '100%',
                            }} alt='femaledoctor' />
                        </Box>
                    </Box>
                    <BlogDetailContent head='Is It Too Late to Bring Costs Down?' content={BlogDetailPage[0].CostsDown} color='#2D4755' fontWeight='500' />
                    <BlogDetailContent head='Embrace Preventive Healthcare:' content={BlogDetailPage[0].Embrace} />
                    <BlogDetailContent head='Promote Generic Medications' content={BlogDetailPage[0].Promote} />
                </Box>
                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                }}>
                    <Content headingOne='Post a Comment' content='Understanding the Impact and Solutions' />
                </Box>
                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                    marginTop: '4%',
                }}>
                    <InputCom placeholder='Name' Width={{ md: '45%', xs: '45%' }} type='text' />
                    <InputCom placeholder='email' Width={{ md: '45%', xs: '45%' }} ml='2%' type='email' />
                    <InputCom placeholder='Message' Width={{ md: '92%', xs: '92%' }} type='text' mt='2%' height="300px" />
                </Box>
                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                }}>
                    <Button title='Send a Message' fs='14px' fontWeight='500' lineHeight='21px' color='#FFFFFF' bg='#E9501D' br='5px' p={{ xs: '2%', md: '1%' }} type='number' mt='2%' />
                </Box>

                <Box sx={{
                    width: '96%',
                    margin: '0 auto',
                }}>
                    <Content headingOne='Related' headingTwo='&nbsp;Posts' content='Blogs' lh='0%' />
                </Box>
                <Box sx={{
                    width: '86%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: { md: 'row', xs: 'column' },
                    marginTop: { md: '3%' }
                }}>
                    <Blog head='Your Daily Dose of Medical Wisdom' type='News' img={addition} />
                    <Blog head='Empowering Communities through Health Education...' type='News' img={addition} />
                    <Blog head='Empowering Communities through Health Education...' type='News' img={addition} />
                </Box>
            </Box>
        </>
    )
}

export default page