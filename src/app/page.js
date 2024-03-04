'use client'
import { Box, Typography } from '@mui/material';
import Button from './Components/Button'
import reactangle from '../Images/Rectangle 7.png'
import Image from 'next/image';
import Reactangle8 from '../Images/Rectangle 8.png'
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
import Faq from './Components/homeComponents/FAQ'
import grp32 from '../Images/Group 32.png'
import grp33 from '../Images/Group 33.png'
import grp34 from '../Images/Group 34.png'
import grp35 from '../Images/Group 35.png'
import grp36 from '../Images/Group 36.png'
import shazai from '../Images/shazain 1.png'
import grp37 from '../Images/Group 28.png'
import grp38 from '../Images/Group 29.png'
import Link from 'next/link';
import model from '../Images/model.png'
import Navbar from './Components/navbar';

export default function Home() {
  return (
    <Box sx={{
      width: '100%',
      fontFamily: 'Poppins',
      // maxWidth: '100%',
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
        maxWidth: '90%',
        height: 'auto',
        borderRadius: '5%',
        margin: '0 auto'
      }}>
        <Navbar />

        <Box sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column-reverse' , sm: 'column-reverse'}, // Flex direction column for small screens
          justifyContent: 'space-evenly',
        }}>
        <Box sx={{
          marginTop: '25%',
          padding: '4%',
          width: { md: '50%', xs: '100%' },
        }}>
          <Box>
            {/* HealthX content */}
            <Box>
              <Box>
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
                  width: '125%',
                  height: '79px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: { md: '55px', xs: '30px' },
                  lineHeight: '112%',
                  /* identical to box height, or 79px */

                  color: '#E9501D',
                }}>
                  Healthcare with a&nbsp;
                  <Typography variant="body1" sx={{
                    color: '#1F8B7B', fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: { md: '55px', xs: '30px' },
                    lineHeight: '112%',
                    display: 'inline-block'
                  }}>
                    Heart
                  </Typography>
                </Typography>
              </Box>
              <Typography sx={{
                width: '100%',
                height: '69px',
                fontStyle: 'normal',
                fontWeight: '265',
                fontSize: { md: '40px', xs: '20px' },
                lineHeight: '112%',
                /* or 69px */

                color: '#1E1E1E',
              }}>
                Where Every Life Matters
              </Typography>
            </Box>
            {/* Contact Button */}
            <Box sx={{
              marginBottom: '5%',
              width: '40%',
              
            }}>
              <Link href='/ContactUs'>
              <Button
                width={{ md: '90%', xs: '70%' }}
                bg='#E9501D'
                height='40px'
                fontWeight='500'
                fs='18px'
                lineHeight='20px'
                color='#FFFFFF'
                br='5px'
                p='4%'
                title='contact us'
                />
                </Link>
            </Box>
          </Box>
        </Box>

        {/* Model  */}
        <Box sx={{
          flexBasis: { md: '45%', sm: '100%',  xs: '100%' }, // Width adjustment for small screens
          marginTop: { md: '-5%', xs: '5%' }, // Margin adjustment for small screens
        }}>
          <Image src={model} style={{
            width: '100%'
          }}/>
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

        marginTop: { md: '4%', sm: '5%', xs: '10%' },
        display: 'flex',
        flexWrap: { md: 'nowrap', sm: 'wrap', xs: 'wrap' },
        flexDirection: {md: 'row', sm: 'column' , xs: 'column'},
        justifyContent: 'space-around',
        alignItems: {md:'center' , sm: 'flex-start' , xs: 'flex-start'},
        width: '96%'
      }}>
        {/* active user */}
        <Box sx={{
          width: {md:'30%', sm: '100%' , xs: '100%'},
          height: '57px',
        }}>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: { xs: '14px', sm: '18px' },
            lineHeight: '27px',
            color: '#2D4755',
          }}>
            Trusted by more than <Typography variant="body1" sx={{
              color: '#E9501D', fontWeight: '800', fontSize: '19px', lineHeight: '27px', display: 'inline-block'
            }}>500,000+</Typography> active users across the globe
          </Typography>
        </Box>

            {/* <Box sx={{
              display: {sm:'flex' , xs: 'flex'},
              width: {md: '65%', sm:'100%' , xs: '100%'}
            }}> */}

        {/* User rating */}
        <Rating number='50K' content='Rating Users' contentWidth='30%' numberWidth='60%' />
        {/* experinced client */}
        <Rating number='95K' content='Experienced Clinics' contentWidth='30%' numberWidth='50%' />
        {/* satisfied and happy clent */}
        <Rating number='80%' content='Satisfied and Happy Clients' contentWidth='40%' numberWidth='40%' />
            {/* </Box> */}
      </Box>
            </Box>
      
      {/* About us */}
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexWrap: {md: 'nowarp' , xs:'warp' , sm: 'wrap'},
        flexDirection: {md: 'row' , xs: 'column' , xs: 'column'},
        justifyContent: "space-between",
        marginTop: { md: '5%', sm: '7%', xs: '25%' },
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
            marginTop: { md: '55%', xs: '20%' , sm: '20%'},
            width: {md: '100%' , sm: '40%' , sm: '40%'},
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
              width: { md: '475px', xs: '97%' , sm: '97%' },
              height: '108px',

              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: { md: '19px', xs: '14px' , sm: '14px'},
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
              fs='18px'
              p='1%'
              color='#FFFFFF'
              // border= 
              br='5px'
              width='161px'
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
          marginTop: {md: '0%' , sm: '15%' , xs: '15%'},
        }}>
          <Content headingOne='Healthcare ' headingTwo='Management for All' content='A Global Approach in Pakistan' />
          <Box>
            <Typography sx={{
              // position: 'absolute',
              width: { md: '900px', xs: '95%' , sm: '95%' },
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
            marginTop: {md: '13%' , sm: '15%' , xs: '15%'},
            width: { md: '98%', xs: '90%', xs: '90%' },
            height: { md: '450px', xs: '100px' },
          }}>
            <Image src={Reactangle8} style={{
              width: '100%',
              height: '100%',
              // position: absolute;
              // left: 745px;
              // top: 1569px;
              background: 'linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)',
              borderRadius: '20px',

            }} />
          </Box>
        </Box>
      </Box>

      {/* solution */}
      <Box sx={{
        width: { md: '95%', xs: '90%' , sm: '90%'},
        height: { md: '920px', xs: 'auto' , sm: 'auto'},
        margin: '0 auto',
        marginTop: '7%',
        background: '#253239',
      }}>
        <Box sx={{
          display: 'flex',
          flexWrap: { md: 'nowrap', xs: 'wrap' , sm: 'warp'},
          flexDirection: {md: 'row' , sm: 'column' , xs: 'column'},
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <Box>
            <Typography sx={{
              // background: 'red',
              width: { md: '105%', xs: '100%' , sm: '100%' },
              height: { md: '52px', xs: 'auto' , sm: 'auto'},
              // marginLeft: '8%',
              marginTop: '8%',

              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: { md: '47px', xs: '25px' , sm: '25px'},
              lineHeight: { md: '112%', xs: '90%' , sm: '90%'},
              /* or 52px */

              color: '#E9501D',
            }}>
              Bridging Gaps in Healthcare
            </Typography>

            <Typography sx={{
              // position: absolute;
              width: '100%',
              height: { md: '42px', xs: 'auto' , sm: 'auto'},
              // marginLeft: '8%',
              marginTop: {md: '2%' , sm: '7%' , xs: '7%'},
              fontStyle: 'normal',
              fontWeight: '275',
              fontSize: { md: '38px', xs: '19px' ,sm: '19px'},
              lineHeight: '112%',
              /* or 42px */

              color: '#FFFFFF',
              textAlign: {md: 'center' , sm: 'center' , xs: 'center'}
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
          flexDirection: {xs: 'column' , md: 'row' , sm: 'column'},
          justifyContent: 'space-evenly',
          margin: '0 auto',
          marginTop: '5%',
        }}>
          <Cart src={parents} heading={homePageData[1].cartOneHeading} content={homePageData[1].cartOneContent} />

          <Cart src={corporate} heading={homePageData[1].cartTwoHeading} content={homePageData[1].cartTwoContent} />

          <Cart src={parent} heading={homePageData[1].cartThreeHeading} content={homePageData[1].cartThreeContent} />

          <Cart src={govt} heading={homePageData[1].cartFourHeading} content={homePageData[1].cartFourContent} />
        </Box>

        <Box sx={{
        }}>
          <Typography sx={{
            width: { md: '96%', xs: '80%' },
            margin: '0 auto',
            // textAlign: 'center',
            marginTop: '5%',
            height: { md: '81px', xs: 'auto' },
            // top: 3143px;

            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: { md: '18px', sm: '12px' },
            lineHeight: '27px',

            color: '#FFFFFF',

          }}>
            {homePageData[1].solution}
          </Typography>
        </Box>
      </Box>

      {/* OUR TEAM */}


      {/* App Integration */}
      <Box sx={{
        width: '96%',
        margin: '0 auto',
        marginTop: '3%',
      }}>

        <Heading number='05' numberColor='#E9501D' heading='App Integrations' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' />

        <Box sx={{
          marginTop: '5%',
          display: 'flex',
          justifyContent: 'space-around',
          // flexDirection: {xs: 'column'}
        }}>
          <Box sx={{
            width: '45%',
            // height: '70px'
          }}>
            <Image src={mobile} height={500} />
          </Box>
          <Box sx={{
            width: '45%',
            marginLeft: '7%'
          }}>
            <Content headingOne='INTEGRATED ' headingTwo='HEALTHCARE' content='MANAGEMENT APPLICATION' />
            <Box sx={{
              marginTop: '7%',
              width: '100%',
              height: '20px',
            }}>
              <Point />
              <Button title='Download App' bg='#E9501D' border='1px solid' width='198px' height='52px' br='5px' fs='18px' fontWeight='500' lineHeight='21px' color='#FFFFFF' mt='10%' />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* FQA */}
      <Box sx={{
        margin: '0 auto',
        marginTop: '5%',
        width: '96%',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Box>
            <Content headingOne='Frequently' headingTwo=' Asked Question' />
          </Box>
          <Box>
            <Heading number='06' numberColor='#E9501D' heading='FAQ’s' headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' />
          </Box>
        </Box>

        <Box sx={{
          display: 'flex'
        }}>
          <Box sx={{
            flexBasis: '45%',
          }}>

            {/* <Box sx={{
              width:'100%',
              background: `linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)`,
              border: '1px solid #E9501D',
              display: 'flex',
              justifyContent: 'space-evenly',
              padding: '0'
            }}
            >
              <Typography sx={{
                width: '90%',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '22px',
                lineHeight: '33px',
                leadingTrim: 'both',
                textEdge: 'cap',
                marginTop: '2%',
                color: '#253239',
              }}>
              How do I install the Healthx app?
  
              <Typography sx={{
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '19px',
                lineHeight: '27px',
                marginTop: '4%',  
                color: '#2D4755',
              }}>
              The Healthx app is available on both the iOS App Store and Google Play Store for free, depending on your device.
              </Typography>
              </Typography>

              <Typography sx={{
                marginTop: '2%',
              }}>
                <Image src={arrowDown}/>
              </Typography>
            </Box> */}
            <Faq Question={homePageData[3].Question1} />
            <Faq Question={homePageData[3].Question1} mt='3%' />
            <Faq Question={homePageData[3].Question1} mt='3%' />
          </Box>
          <Box sx={{
            width: '45%',
            marginLeft: '2%',
          }}>
            <Faq Question={homePageData[3].Question2} />
            <Faq Question={homePageData[3].Question1} mt='3%' />
            <Faq Question={homePageData[3].Question1} mt='3%' />
          </Box>
        </Box>
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
          // alignItems: 'center',
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
            <Box sx={{
              marginTop: '3%'
            }}>
              <Image src={grp32} />
              <Image src={grp33} />
              <Image src={grp34} />
              <Image src={grp35} />
              <Image src={grp36} />
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '3%'
        }}>
          <Box sx={{
            width: '45%',
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
              width: '125%',
              height: '79px',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: { md: '55px', xs: '30px' },
              lineHeight: '112%',
              /* identical to box height, or 79px */

              color: '#E9501D',
              marginTop: '2%'
            }}>
              Healthcare Solution
            </Typography>
            <Typography sx={{
              width: '100%',
              height: '69px',
              fontStyle: 'normal',
              fontWeight: '265',
              fontSize: { md: '40px', xs: '20px' },
              lineHeight: '112%',
              /* or 69px */

              color: '#1E1E1E',
            }}>
              For All
            </Typography>
            <Typography sx={{

              width: '100%',

              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: '19px',
              lineHeight: '27px',

              color: '#2D4755',
            }}>
              {homePageData[4].solution}
            </Typography>
            <Box sx={{
            width: '90%',
            marginTop: '5%'
          }}>
            <Image src={grp37}/>
            <Image src={grp38}/>
          </Box>
          </Box>
          <Box sx={{
            width: '45%'
          }}>
            <Image src={shazai} height={400} />
          </Box>
        </Box>
      </Box>

          {/* BLog And News */}
          <Box>
            
          </Box>
    </Box >
  );
}