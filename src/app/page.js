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
import Content from './Components/homeComponents/Content '
import Point from './Components/homeComponents/Points'
import Rating from './Components/homeComponents/Rating'
import grp32 from '../Images/Group 32.png';
import grp33 from '../Images/Group 33.png';
import grp34 from '../Images/Group 34.png';
import grp35 from '../Images/Group 35.png';
import grp36 from '../Images/Group 36.png';
import shazai from '../Images/shazain 1.png'
import grp37 from '../Images/Group 28.png'
import grp38 from '../Images/Group 29.png'
import Link from 'next/link';
import Navbar from './Components/navbar';
import Question from './Components/Question'
import Appp from './Components/homeComponents/model/Model'
import AppT from './Components/homeComponents/model/ModelT'
import Team from './Components/homeComponents/Team'
import Blog from './Components/Blog'

export default function Home() {
  return (

    <Box sx={{
      width: '100%',
      fontFamily: 'Poppins',
      alignItems: 'center',
      marginTop: '4%'
    }}>

      {/* hero section content */}
      <Box sx={{
        background: `linear-gradient(
    80.65deg,
    rgba(233, 80, 29, 0.12) 5.4%,
    rgba(31, 139, 123, 0.12) 47.64%,
    rgba(235, 198, 98, 0.12) 97.13%
    )`,
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '5px',
        margin: '0 auto'
      }}>
        <Navbar />

        <Box sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column-reverse', lg: 'row', xl: 'row' }, // Flex direction column for small screens
          justifyContent: 'space-between',
        }}>

          <Box sx={{
            marginTop: '25%',
            padding: '4%',
            width: { md: '50%', xs: '100%', lg: '50%', xl: '50%' },
          }}>
            <Box>
              {/* HealthX content */}

              <Box>
                <Typography sx={{
                  width: '100%',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: { md: '70px', xs: '20px', lg: '70px', xl: '70px' },
                  lineHeight: '100%',
                  /* or 52px */

                  background: `linear-gradient(90deg, #1F8B7B 0%, #E9501D 100%)`,
                  BackgroundClip: 'text',
                  Color: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                }}>
                  Healthx Pakistan
                </Typography>

                <Content headingOne='Healthcare with a&nbsp;' mdfs='70px' xsfs='30px' headingTwo='Heart' content='Where Every Life Matters' mdfsc='50px' xsfsc='20px' />

                <Link href='/ContactUs'>
                  <Button
                    width='30%'
                    bg='#E9501D'
                    fontWeight='500'
                    fs={{ md: '18px', lg: '18px', xl: '18px', xs: '13px' }}
                    lineHeight='100%'
                    color='#FFFFFF'
                    br='5px'
                    p='3%'
                    title='contact us'
                    mt='5%'
                  />
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Model  */}
          <Box sx={{
            flexBasis: { md: '50%', sm: '100%', xs: '100%' }, // Width adjustment for small screens
            marginTop: { md: '35%', xs: '0%' }, // Margin adjustment for small screens
            paddingLeft: '4%'
          }}>
            <Appp />
          </Box>

          {/* slider */}

          <Box sx={{
            visibility: { md: 'visible', xs: 'hidden' },
          }}>
            <Typography>01</Typography>
            <Typography>02</Typography>
            <Typography>03</Typography>
            <Typography>04</Typography>
            <Typography>05</Typography>
            <Typography>06</Typography>
            <Typography>07</Typography>
            <Typography>08</Typography>
          </Box>
        </Box>
      </Box>


      {/* Rating */}
      <Box sx={{
        marginTop: { xs: '10%', sm: '5%', md: '4%' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // On small screens, stack items vertically; on larger screens, arrange them horizontally
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
            width: { md: '60%', sm: '90%', xs: '90%' },
            height: '57px',
          }}>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: { xs: '14px', sm: '18px' },
              lineHeight: '27px',
              color: '#2D4755',
              width: '120%',
              // background: 'red',
            }}>
              Trusted by more than <span style={{
                color: '#E9501D', fontWeight: '800', fontSize: '19px', lineHeight: '27px', display: 'inline-block'
              }}>500,000+</span>
              &nbsp;active users across the globe
            </Typography>
          </Box>


          {/* User rating */}
          <Rating number='50K' content='Rating Users' contentWidth='10%' numberWidth='5%' />
          {/* experinced client */}
          <Rating number='95K' content='Experienced Clinics' contentWidth='10%' numberWidth='5%' />
          {/* satisfied and happy clent */}
          <Rating number='80%' content='Satisfied and Happy Clients' contentWidth='25%' numberWidth='15%' />

        </Box>
      </Box>

      {/* About us */}
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexWrap: { md: 'nowarp', xs: 'warp', sm: 'wrap' },
        flexDirection: { md: 'row', xs: 'column', xs: 'column' },
        justifyContent: "space-between",
        marginTop: '5%',
      }}>

        {/* Box1 */}
        <Box sx={{
          marginLeft: '4%'
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
            // width: {md: '100%' , sm: '40%' },
          }}>
            <Image src={reactangle}
              style={{
                width: '100%',
                // height: { md: '348px', xs: '10px' , sm: '10px'},

                background: 'linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%), url(pexels-artem-podrez-6824191 (Original).png)',
                borderRadius: '20px',
              }}
            />
          </Box>

          {/* data from home page Data index 1 name about */}
          <Box>
            <Typography sx={{
              width: { md: '475px', xs: '97%', sm: '97%' },
              height: '108px',

              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: { md: '19px', xs: '14px', sm: '14px' },
              lineHeight: '27px',
              marginTop: '10%',
              color: '#2D4755',

            }}>
              {homePageData[0].about}
            </Typography>
          </Box>

          <Box sx={{
            marginTop: '5%'
          }}>
            <Button
              bg='#1F8B7B'
              fs={{ md: '18px', xs: "14px" }}
              p='1%'
              color='#FFFFFF'
              br='5px'
              width={{ md: '161px', xs: '30%' }}
              height='52px'
              lineHeight='20px'
              fontWeight='500'
              title='Read more'
            />
          </Box>
        </Box>

        {/* healthcare managment */}
        <Box sx={{
          marginLeft: '5%',
          marginTop: { md: '0%', xs: '7%' },
        }}>
          <Content headingOne='Healthcare ' headingTwo='Management for All' content='A Global Approach in Pakistan' />
          <Box>
            <Typography sx={{
              // position: 'absolute',
              width: { md: '900px', xs: '95%', sm: '95%' },
              height: '108px',

              marginTop: { sm: '7%', xs: '3%' },
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: { sm: '17px', xs: '12px' },
              lineHeight: '27px',

              color: '#2D4755'
            }}>
              {homePageData[0].healthCareManagment}
            </Typography>
          </Box>

          <Box sx={{
            visibility: { md: 'visible', xs: 'hidden' },
            marginTop: { md: '13%', xs: '15%' },
            width: { md: '80%', xs: '90%' },
            height: { md: '450px', xs: '100px' },
            background: 'linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)',
            borderRadius: '20px',
          }}>
            <AppT />
          </Box>
        </Box>
      </Box>

      {/* solution */}
      <Box sx={{
        width: { md: '95%', xs: '90%', sm: '90%' },
        margin: '0 auto',
        marginTop: { md: '5%', xs: "-20%" },
        background: '#253239',
      }}>
        <Box sx={{
          display: 'flex',
          flexWrap: { md: 'nowrap', xs: 'wrap', sm: 'warp' },
          flexDirection: { md: 'row', sm: 'column', xs: 'column' },
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <Box sx={{
            textAlign: { xs: 'center' }
          }}>
            <Typography sx={{
              // background: 'red',
              width: { md: '105%', xs: '100%', sm: '100%' },
              height: { md: '52px', xs: 'auto', sm: 'auto' },
              // marginLeft: '8%',
              marginTop: '10%',

              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: { md: '47px', xs: '22px', sm: '25px' },
              lineHeight: { md: '112%', xs: '90%', sm: '90%' },
              /* or 52px */

              color: '#E9501D',
            }}>
              Bridging Gaps in Healthcare
            </Typography>

            <Typography sx={{
              // position: absolute;

              width: { md: '100%', xs: '100%' },
              height: { md: '42px', xs: '45px', sm: 'auto' },
              // marginLeft: '8%',
              marginTop: { md: '2%', sm: '7%', xs: '3%' },
              fontStyle: 'normal',
              fontWeight: '275',
              fontSize: { md: '38px', xs: '16px', sm: '19px' },
              lineHeight: '112%',
              /* or 42px */

              color: '#FFFFFF',
              textAlign: { md: 'center', sm: 'center', xs: 'center' }
            }}>
              Services for Individuals and Organizations
            </Typography>
          </Box>

          <Heading number='03' numberColorolor='#1F8B7B' heading='Our Solution'
            headingColor='#FFFFFF' content='We are committed to your Health' contentColor='#FFFFFF'
            flexFlow='row-reverse'
          />

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
            width: { md: '96%', xs: '80%' },
            margin: { xs: '0 auto' },

            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: { md: '18px', sm: '12px' },
            lineHeight: '27px',

            color: '#FFFFFF',
            padding: { xs: '5%' },
          }}>
            {homePageData[1].solution}
          </Typography>
        </Box>
      </Box>

      {/* our team */}

      <Box sx={{
        width: '96%',
        margin: '0 auto',
        marginTop: '3%',
      }}>

        <Box sx={{
          float: {md: 'right' , xs: 'right'},
          width: {md: '40%' , xs: '80%'},
          // background: 'red',
        }}>
          <Heading number='04' numberColor='#E9501D' heading='Our Team' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' />
        </Box>

        <Box sx={{
          marginTop : '3%',
        }}>
        <Team />
        </Box>
      </Box>

      {/* App Integration */}
      <Box sx={{
        width: '96%',
        margin: '0 auto',
        marginTop: { md: '3%', xs: '6%' },
      }}>

        <Heading number='05' numberColor='#E9501D' heading='App Integrations' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' />

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
            height: { md: '600px', xs: '250px' },
            marginTop: { md: '0', xs: '8%' },
            margin: '0 auto'
            // background: 'red'
          }}>
            <Image src={mobile} style={{
              width: '100%',
              height: '100%'
            }} />
          </Box>
          <Box sx={{
            marginLeft: '7%',
            width: { md: '100%', xs: '100%' },
          }}>
            <Content headingOne='INTEGRATED ' headingTwo='HEALTHCARE' content='MANAGEMENT APPLICATION' />
            <Box sx={{ marginTop: '10%' }}>
              <Point />
            </Box>
            <Box sx={{
              textAlign: { xs: 'center' },
            }}>
              <Button title='Download App' bg='#E9501D' border='1px solid' width={{ md: '30%', xs: '45%' }} br='5px' fs={{ md: '20px', xs: '14px' }} fontWeight='500' lineHeight='21px' color='#FFFFFF' mt='10%' p='2%' />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* FQA */}
      <Box sx={{
        marginTop: '5%',
        width: '96%',
        margin: '0 auto'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: { md: 'nowrap', xs: 'wrap' },
          flexDirection: { md: 'row', xs: 'column' },
        }}>
          <Box sx={{
            width: { md: '45%', xs: '90%' },
            margin: '0 auto',
            marginTop: '4%',
          }}>
            <Content headingOne='Frequently' headingTwo=' Asked Question' />
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

      <Box sx={{
        margin: '0 auto',
        marginTop: '4%',
        width: '96%',
        background: 'linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: { md: '0', xs: '5%' },
        }}>
          <Box sx={{
            width: '10%',
            marginTop: '3%'
          }}>
            <Heading number='07' numberColor='#E9501D' />
          </Box>

          <Box sx={{
            width: '100%',
            marginTop: '3%',
            textAlign: 'center'
          }}>
            <Typography sx={{
              width: '290px',
              height: '36px',
              marginLeft: `calc(50% - 290px/2)`,

              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '32px',
              lineHeight: '111.64%',
              /* identical to box height, or 36px */

              color: '#CFCFCF',

            }}>
              Strategic Partners
            </Typography>
          </Box>
        </Box>

        <Box sx={{
          width: '100%',
          margin: '0 auto',
          marginTop: '3%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}>

          <Box sx={{
            width: {md: '20%' , xs: '16%' }
          }}>
            <Image src={grp32} style={{
              width: '100%'
            }} />
          </Box>

          <Box sx={{
            width: { xs: '16%' }
          }} >
            <Image src={grp33} style={{
              width: '100%'
            }} />
          </Box>

          <Box sx={{
            width: { xs: '16%' }
          }}>
            <Image src={grp34} style={{
              width: '100%'
            }} />
          </Box>

          <Box sx={{
            width: { xs: '16%' }
          }}>
            <Image src={grp35} style={{
              width: '100%'
            }} />
          </Box>

          <Box sx={{
            width: { xs: '19%' }
          }}>
            <Image src={grp36} style={{
              width: '100%'
            }} />
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '3%',
          flexWrap: { md: 'nowrap', xs: 'warp' },
          flexDirection: { md: 'row', xs: 'column' },
          textAlign: 'center',
        }}>
          <Box sx={{
            width: { md: '45%', xs: '100%' },
          }}>
            <Typography sx={{
              width: '100%',
              height: '52px',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: { md: '47px', xs: '20px' },
              lineHeight: '111%',
              /* or 52px */
              background: `linear-gradient(90deg, #1F8B7B 0%, #E9501D 100%)`,
              BackgroundClip: 'text',
              Color: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}>
              Healthx Pakistan
            </Typography>
            <Typography sx={{
              width: { md: '125%', xs: '100%' },
              height: '79px',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: { md: '55px', xs: '30px' },
              lineHeight: '112%',
              /* identical to box height, or 79px */

              color: '#E9501D',
              marginTop: { md: '2%', xs: '-4%' },
            }}>
              Healthcare Solution
            </Typography>
            <Typography sx={{
              width: { md: '100%', xs: '80%' },
              // height: '69px',
              fontStyle: 'normal',
              fontWeight: '265',
              fontSize: { md: '40px', xs: '20px' },
              lineHeight: '112%',
              /* or 69px */
              marginTop: { md: '0', xs: '-8%' },
              color: '#1E1E1E',
              margin: '0 auto'
            }}>
              For All
            </Typography>

            <Typography sx={{
              width: { md: '100%', xs: '90%' },
              padding: { md: '0', xs: '2%' },
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: { md: '19px', xs: '14px' },
              lineHeight: '27px',

              color: '#2D4755',
            }}>
              {homePageData[4].solution}
            </Typography>

            <Box sx={{
              width: { md: '90%', xs: '70%' },
              marginTop: { md: '5%', xs: '5%' },
              display: { md: 'flex', xs: 'flex' },
              justifyContent: { md: 'space-evenly', xs: 'space-evenly' },
              margin: '0 auto',
              marginBottom: { xs: '4%' },
            }}>
              <Image src={grp37} style={{ width: '40%' }} />
              <Image src={grp38} style={{ width: '40%' }} />
            </Box>
          </Box>
          <Box sx={{
            width: { md: '45%', xs: '100%' },
            // marginTop: {md: '0' , xs : '29%'},
            margin: { xs: '0 auto' },
          }}>
            <Image src={shazai} height={400} />
          </Box>
        </Box>
      </Box>

          {/* Blog and News */}

          <Box sx={{
            width: '96%',
            margin: '0 auto',
            marginTop: '3%',
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Box>
              <Content headingOne='Blog' headingTwo='&nbsp;News &' content='Events'/>
              </Box>
              <Heading number='08' numberColor='#E9501D' heading='Blog' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755'/> 
            </Box>

            <Box>
              <Blog />             
            </Box>
          </Box>
    </Box >
  );
}