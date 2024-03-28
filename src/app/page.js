'use client'
import { Box, Typography } from '@mui/material';
import Button from './Components/Button'
import reactangle from '../Images/Rectangle 7.png'
import Image from 'next/image';
import Cart from './Components/homeComponents/cart'
import parents from '../Images/parents-01 1.png'
import corporate from '../Images/corporate health-01 1.png'
import parent from '../Images/parents-01 2.png'
import govt from '../Images/govt-01 1.png'
import mobile from '../Images/mobile.png'
import homePageData from './mockData/homePageData/homePage'
import Heading from './Components/homeComponents/Heading'
import Content from './Components/homeComponents/Content'
import Point from './Components/homeComponents/Points'
import Rating from './Components/homeComponents/Rating'
import Link from 'next/link';
import Navbar from './Components/navbar';
import Question from './Components/Question'
import Appp from './Components/homeComponents/model/Model'
import AppT from './Components/homeComponents/model/ModelT'
import Team from './Components/homeComponents/Team'
import BlogNnews from './Components/homeComponents/BlogNnews'
import ScrollBar from './Components/ScrollBar'
import Frequently from './Components/homeComponents/Frequently'
import HealthX from './Components/homeComponents/HealthX'

export default function Home() {

  return (

    <Box sx={{
      width: '99%',
      fontFamily: 'Poppins',
      alignItems: 'center',
      marginTop: '4%',
      overflow: 'hidden'
    }}>

  <ScrollBar />

      {/* hero section content */}
      <Box sx={{
        background: `linear-gradient(
    80.65deg,
    rgba(233, 80, 29, 0.12) 5.4%,
    rgba(31, 139, 123, 0.12) 47.64%,
    rgba(235, 198, 98, 0.12) 97.13%
    )`,
        maxWidth: '96%',
        borderRadius: '5px',
        margin: '0 auto'
      }}>
        <Navbar />

        
        <Box id='one' sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column-reverse', lg: 'row', xl: 'row' }, // Flex direction column for small screens
          justifyContent: 'space-between',
        }}>

          <Box sx={{
            marginTop: {md: '30%' , xs: '0'},
            padding: '4%',
            width: { md: '100%', xs: '100%', lg: '50%', xl: '50%' },
          }}>
            <Box>
              {/* HealthX content */}

              <Box>
              <HealthX md='160%' lg='170%' mdc='36px' lgc='50px' xlc='60px'/>

                <Content headingOne='Healthcare with a&nbsp;' mdfs='36px' xsfs='30px' mdfsc='25px' xsfsc='20px' headingTwo='Heart' content='Where Every Life Matters' md='240%' mdc='180%' lgH='240%' LgC='180%' xlH='240%' XlC='180%' lh='112%'/>

                <Link href='/ContactUs'>
                  <Button
                    width={{ xs: '30%', sm: '20%', md: '80%', lg: '90%', xl: '100%' }}
                    bg='#E9501D'
                    fontWeight='500'
                    fs={{ md: '16px', lg: '18px', xl: '30px', xs: '9px', sm: '12px' }}
                    lineHeight='100%'
                    color='#FFFFFF'
                    br='5px'
                    p='3%'
                    title='contact us'
                    mt='5%'
                    pt='5%'
                  />
                </Link>
              </Box>

            </Box>
          </Box>

          {/* Model  */}
          <Box sx={{
            flexBasis: { md: '40%', sm: '100%', xs: '100%' }, // Width adjustment for small screens
            marginTop: { md: '0', xs: '1%' }, // Margin adjustment for small screens
          }}>
            <Appp />
          </Box>


        </Box>
      </Box>
    
      {/* Rating */}
      <Box sx={{
        marginTop: { sm: '5%', md: '4%' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column' }, // On small screens, stack items vertically; on larger screens, arrange them horizontally
        justifyContent: 'space-around',
        alignItems: 'flex-start', // Align items at the start of the container
        flexWrap: 'wrap', // Allow items to wrap on smaller screens
      }}>
        {/* Active user */}
        <Box sx={{
          margin: '0 auto',
          marginTop: { md: '4%', sm: '5%', xs: '10%' },
          display: 'flex',
          flexWrap: { md: 'nowrap', sm: 'wrap', xs: 'wrap' },
          flexDirection: { md: 'row', sm: 'column', xs: 'column' },
          justifyContent: 'space-around',
          alignItems: { md: 'center', sm: 'flex-start', xs: 'flex-start' },
          width: { md: '96%', xs: '70%' }
        }}>
          {/* active user */}
          <Box sx={{
            width: { md: '130%', sm: '80%', xs: '80%', lg: '95%', xl: '75%' },
          }}>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: { xs: '13px', sm: '15px', md: '15px', lg: '18px', xl: '20px' },
              lineHeight: '27px',
              color: '#2D4755',
              width: '90%',
              // background: 'red',
            }}>
              Trusted by more than <span style={{
                color: '#E9501D', fontWeight: '800', fontSize: { xs: '15px', sm: '17px', md: '15px', lg: '18px', xl: '20%' }, lineHeight: '27px', display: 'inline-block'
              }}>500,000+</span>
              &nbsp;active users across the globe
            </Typography>
          </Box>

          {/* User rating */}
          <Rating number='50K' content='Rating Users' contentWidth='1%' numberWidth='40%' lg='20%' sm='20%' xsC='30%' xlC='10%' />
          {/* experinced client */}
          <Rating number='95K' content='Experienced Clinics' contentWidth='25%' numberWidth='50%' lg='40%' sm='26%' xsC='35%' />
          {/* satisfied and happy clent */}
          <Rating number='80%' content='Satisfied and Happy Clients' contentWidth='40%' numberWidth='70%' lg='40%' sm='30%' xsC='40%' />

        </Box>
      </Box>
      

      {/* About us */}
      <Box id='two' sx={{
        width: '100%',
        display: 'flex',
        // flexWrap: { md: 'nowarp', xs: 'warp', sm: 'wrap' },
        flexDirection: { md: 'row', xs: 'column', sm: 'column', lg: 'row', xl: 'row' },
        justifyContent: "space-evenly",
        marginTop: { md: '5%' },
      }}>

        {/* Box1 */}
        <Box sx={{
          // marginLeft: '4%',
        }}>
          {/* 02  */}
          <Heading
            number='02'
            numberColor='#E9501D'
            heading='About Us'
            headingColor='#2D4755'
            content='We are committed to your Health'
            contentColor='#2D4755'
          />
          {/* Rectanglr */}
          <Box sx={{
            marginTop: { md: '55%', xs: '10%' },
            width: { md: '100%', xs: '80%' },
            marginLeft: { xs: '5%', sm: '5%' }
          }}>
            <Image src={reactangle}
            alt="shazai"
              style={{
                width: '100%',
                background: 'linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%), url(pexels-artem-podrez-6824191 (Original).png)',
                borderRadius: '20px',
              }}
            />
          </Box>

          {/* data from home page Data index 1 name about */}
          <Box sx={{ marginLeft: { xs: '5%', sm: '5%' } }}>
            <Typography sx={{
              width: { md: '475px', xs: '97%', sm: '97%' },
              height: '108px',

              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: { md: '17px', xs: '12px', sm: '12px', lg: '19px', xl: '21px' },
              lineHeight: { xl: '35px', lg: '30px', md: '27px', xs: '32px' },
              marginTop: { xs: '10%' },
              color: '#2D4755',

            }}>
              {homePageData[0].about}
            </Typography>
          </Box>

          <Box sx={{
            marginTop: { md: '5%' },
            marginLeft: { xs: '5%', sm: '5%' }
          }}>
            <Button
              bg='#1F8B7B'
              fs={{ md: '18px', xs: "9px", sm: '12px', xl: '22px' }}
              p='2%'
              color='#FFFFFF'
              br='5px'
              width={{ md: '161px', xs: '30%', sm: '18%', xl: "40%" }}
              lineHeight='20px'
              fontWeight='500'
              title='Read more'
              mt={{ xl: '6%' , xs: '10%'}}
            />
          </Box>
        </Box>

        {/* healthcare managment */}
        <Box sx={{
          marginLeft: '5%',
          marginTop: { md: '0%', xs: '7%' },
          width: { md: '45%', xs: '100%' }
        }}>
          <Content headingOne='Healthcare ' headingTwo='Management for All' content='A Global Approach in Pakistan' mdfs='25px' xsfs='18px' mdfsc='24px' xsfsc='18px' md='100%' mdc='100%' lg='35px' lgC='30px' xl='45px' xlC='40' />
          <Box>
            <Typography sx={{
              // position: 'absolute',
              width: { md: '100%', xs: '95%', sm: '95%' },

              marginTop: { sm: '7%', xs: '3%' },
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: { md: '17px', xs: '12px', sm: '12px', lg: '19px', xl: '21px' },
              lineHeight: { xl: '35px', lg: '30px', md: '27px', xs: '32px' },

              color: '#2D4755'
            }}>
              {homePageData[0].healthCareManagment}
            </Typography>
          </Box>

          <Box sx={{
            visibility: { md: 'visible', xs: 'hidden' },
            marginTop: { md: '13%' },
            width: { md: '80%' },
            background: 'linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)',
            borderRadius: '20px',
          }}>
            <AppT />
          </Box>
        </Box>
      </Box>

      {/* solution */}
      <Box id='three' sx={{
        width: { md: '95%', xs: '90%', sm: '90%' },
        margin: '0 auto',
        marginTop: { xs: "-150%", sm: '-70%', md: '3%' },
        background: '#253239',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { md: 'row', sm: 'column', xs: 'column' },
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <Box sx={{
            textAlign: { xs: 'center' },
            width: { md: '50%', xs: '100%' }
          }}>
            <Typography sx={{
              width: { md: '105%', xs: '100%', sm: '100%' },
              marginTop: '10%',

              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: { md: '33px', xs: '18px', sm: '30px', lg: '35px', xl: '37px' },
              lineHeight: { md: '112%', xs: '90%', sm: '90%' },
              /* or 52px */

              color: '#E9501D',
            }}>
              Bridging Gaps in Healthcare
            </Typography>

            <Typography sx={{
              // position: absolute;

              width: { md: '100%', xs: '100%' },
              marginTop: { md: '2%', sm: '5%', xs: '3%' },
              fontStyle: 'normal',
              fontWeight: '275',
              fontSize: { md: '22px', xs: '16px', sm: '22px', xl: '26px', lg: '24px' },
              lineHeight: '112%',
              /* or 42px */

              color: '#FFFFFF',
              textAlign: { md: 'center', sm: 'center', xs: 'center' }
            }}>
              Services for Individuals and Organizations
            </Typography>
          </Box>

          <Box sx={{
            width: { md: '45%', xs: '110%' },
          }}>
            <Heading number='03' numberColorolor='#1F8B7B' heading='Our Solution'
              headingColor='#FFFFFF' content='We are committed to your Health' contentColor='#FFFFFF'
              flexFlow='row-reverse'
            />
          </Box>

        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row', sm: 'column' },
          justifyContent: 'space-evenly',
          margin: '0 auto',
          marginTop: '5%',
        }}>
          <Cart src={parents} heading={homePageData[1].cartOneHeading} content={homePageData[1].cartOneContent} />

          <Cart src={corporate} heading={homePageData[1].cartTwoHeading} content={homePageData[1].cartTwoContent} />

          <Cart src={parent} heading={homePageData[1].cartThreeHeading} content={homePageData[1].cartThreeContent} />

          <Cart src={govt} heading={homePageData[1].cartFourHeading} content={homePageData[1].cartFourContent} />
        </Box>

        <Box>
          <Typography sx={{
            width: { md: '90%', xs: '80%' },
            margin: { xs: '0 auto' },

            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: { md: '18px', xs: '12px', sm: '14px' },
            lineHeight: '27px',

            color: '#FFFFFF',
            padding: { xs: '5%' },
          }}>
            {homePageData[1].solution}
          </Typography>
        </Box>
      </Box>

      {/* our team */}

      <Box id='four' sx={{
        width: '96%',
        margin: '0 auto',
        marginTop: '3%',
      }}>

        <Box sx={{
          float: { md: 'right', xs: 'right' },
          width: { md: '40%', xs: '100%' },
        }}>
          <Heading number='04' numberColor='#E9501D' heading='Our Team' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' />
        </Box>

        <Box sx={{
          marginTop: '5%',
        }}>
          <Team />
        </Box>
      </Box>

      {/* App Integration */}
      <Box id='five' sx={{
        width: '96%',
        margin: '0 auto',
        marginTop: { md: '3%', xs: '6%' },
      }}>

        <Heading number='05' numberColor='#E9501D' heading='App Integrations' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' xs='100%' />

        <Box sx={{
          width: '90%',
          marginTop: '5%',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: { md: 'nowrap', xs: 'warp' },
          flexDirection: { md: 'row', xs: 'column-reverse' },

        }}>
          <Box sx={{
            width: { md: '100%', xs: '90%' },
            height: { md: '500px', xs: '250px' },
            marginTop: { md: '0', xs: '8%' },
            margin: '0 auto'
          }}>
            <Image src={mobile} alt="shazai" style={{
              width: '100%',
              height: '100%'
            }} />
          </Box>
          <Box sx={{
            marginLeft: '7%',
            width: { md: '100%', xs: '100%' },
          }}>
            <Content headingOne='INTEGRATED ' headingTwo='HEALTHCARE' content='MANAGEMENT APPLICATION' md='140%' lg='40px' lgC='35px' xl='40px' />
            <Box sx={{ marginTop: '10%' }}>
              <Point />
            </Box>
            <Box sx={{
              textAlign: { xs: 'center' },
            }}>
              <Button title='Download App' bg='#E9501D' border='1px solid' width={{ md: ' 36%', xs: '40%' }} br='5px' fs={{ md: '13px', xs: '9px', lg: '15px', xl: '18px' }} fontWeight='500' lineHeight='21px' color='#FFFFFF' mt='10%' p='2%' />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* FQA */}
      <Box id='six' sx={{
        marginTop: '5%',
        width: '98%',
        margin: '0 auto'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: { md: 'nowrap', xs: 'wrap' },
          flexDirection: { md: 'row', xs: 'column' },
        }}>
          <Box sx={{
            width: { md: '45%', xs: '100%' },
            margin: '0 auto',
            marginTop: {md: '4%' , xs: '10%'},
          }}>
            <Content headingOne='Frequently' headingTwo=' Asked Question' md='120%' xlH='120%' wxs='90%' />
          </Box>

          <Box sx={{
            marginTop: { md: '5%', xs: '0' },
            margin: '0 auto',
          }}>
            <Heading number='06' numberColor='#E9501D' heading='FAQ’s' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' />
          </Box>
        </Box>
        <Question />
      </Box>

      {/* Stratigic Planning? */}

      <Frequently />

      {/* Blog and News */}

      <Box id='eight' sx={{
        width: '96%',
        margin: '0 auto',
        marginTop: '3%',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { md: 'row', xs: 'column' },
          width: '98%',
          margin: '0 auto',
        }}>
          <Box>
            <Content headingOne='Blog' headingTwo='&nbsp;News &' content='Events' />
          </Box>
          <Box sx={{
            marginTop: '3%',
          }}>
            <Heading number='08' numberColor='#E9501D' heading='Blog' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' />
          </Box>
        </Box>

        <Box sx={{
          marginTop: { md: '3%', xs: '-10%' }
        }}>
          <BlogNnews />  
        </Box>
      </Box>
    </Box >
  );
}