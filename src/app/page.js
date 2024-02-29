'use client'
import { Box, Typography } from '@mui/material';
import Button from './Components/Button'
import reactangle from '../Images/Rectangle 7.png'
import Image from 'next/image';
import Reactangle8 from '../Images/Rectangle 8.png'
import Cart from './Components/cart'
import parents from '../Images/parents-01 1.png'
import corporate from '../Images/corporate health-01 1.png'
import parent from '../Images/parents-01 2.png'
import govt from '../Images/govt-01 1.png'
import mobile from '../Images/mobile.png'
import homePageData from './mockData/homePageData/homePage'
import Heading from './Components/Heading'
import Content from './Components/Content '
import Point from './Components/Points'
import Rating from './Components/Rating'

export default function Home() {
  return (
    <Box sx={{
      width: '100%',
      fontFamily: 'Poppins',
      // maxWidth: '100%',
      alignItems: 'center'
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
  height: '500px',
  borderRadius: '5%',
  display: 'flex',
  flexDirection: { md: 'row', xs: 'column' }, // Flex direction column for small screens
  justifyContent: 'space-evenly',
  margin: '0 auto'
}}>
  <Box sx={{
    marginTop: '5%',
    padding: '4%',
    width: { md: '50%', xs: '100%' }, // Width adjustment for small screens
  }}>
    <Box>
      {/* HealthX content */}
      <Box>
        <Box>
          <Typography sx={{
            width: '100%', // Width adjustment for small screens
            height: '52px',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: { md: '47px', xs: '20px' }, // Font size adjustment for small screens
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
            width: '125%', // Width adjustment for small screens
            height: '79px',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: { md: '55px', xs: '30px' }, // Font size adjustment for small screens
            lineHeight: '112%',
            /* identical to box height, or 79px */

            color: '#E9501D',
          }}>
            Healthcare with a&nbsp;
            <Typography variant="body1" sx={{
              color: '#1F8B7B', fontStyle: 'normal',
              fontWeight: '600',
              fontSize: { md: '55px', xs: '30px' }, // Font size adjustment for small screens
              lineHeight: '112%', 
              display: 'inline-block'
            }}>
              Heart
            </Typography>
          </Typography>
        </Box>
        <Typography sx={{
          width: '100%', // Width adjustment for small screens
          height: '69px',
          fontStyle: 'normal',
          fontWeight: '265',
          fontSize: { md: '40px', xs: '20px' }, // Font size adjustment for small screens
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
        width: '100%', // Width adjustment for small screens
        display: 'flex',
        // justifyContent: 'center', // 
      }}>
        <Button
          width={{ md: '90%', xs: '70%' }} // Width adjustment for small screens
          bg='#E9501D'
          height='40px'
          fontWeight='500'
          fs='18px'
          lineHeight='20px'
          color='#FFFFFF'
          br='5px'
          p='1%'
          title='contact us'
        />
      </Box>
    </Box>
  </Box>

  {/* Model  */}
  <Box sx={{
    flexBasis: { md: '45%', xs: '100%' }, // Width adjustment for small screens
    marginTop: { md: '0', xs: '5%' }, // Margin adjustment for small screens
  }}>Model</Box>
</Box>


      {/* Rating */}
      <Box sx={{
        marginTop: '2%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        {/* active user */}
        <Box sx={{
          // position: absolute;
          width: '330px',
          height: '57px',
          // left: 0px;
          // top: 0px;
        }}>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '18.3125px',
            lineHeight: '27px',

            color: '#2D4755',
          }}>
            Trusted by more than <Typography variant="body1" sx={{
              color: '#E9501D', fontWeight: '800', fontSize: '19px', lineHeight: '27px', display: 'inline-block'
            }}>500,000+</Typography>active users across the globe
          </Typography>
        </Box>
        {/* User rating */}
        <Rating number='50K' content='Rating Users'/>
        {/* experinced client */}
        
        <Rating number='95K' content='Experienced Clinics'/>
        {/* satisfied and happy clent */}
        
      <Rating number='80%' content='Satisfied and Happy Clients'/>
      </Box>
      {/* About us */}
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: "space-between",
        marginTop: '5%',
      }}>

        {/* Box1 */}
        <Box sx={{
          marginLeft: '4%'
        }}>
          {/* 02  */}
          <Heading number='02' numberColor='#E9501D' heading='About Us'
            headingColor='#2D4755' content='We are committed to your Health' contentColor='#2D4755' />

          {/* Rectanglr */}
          <Box sx={{
            marginTop: '55%',
          }}>
            <Image src={reactangle}
              style={{
                // position: absolute;
                width: '496px',
                height: '348px',
                // left: 100px;
                // top: 1533px;

                background: 'linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%), url(pexels-artem-podrez-6824191 (Original).png)',
                borderRadius: '20px',
              }}
            />
          </Box>

          {/* data from home page Data index 1 name about */}
          <Box>
            <Typography sx={{
              // position: absolute;
              width: '475px',
              height: '108px',
              // left: 100px;
              // top: 1940px;
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: '19px',
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
          marginLeft: '5%'
        }}>
          <Content headingOne='Healthcare ' headingTwo='Management for All' content='A Global Approach in Pakistan'/>
          <Box>
            <Typography sx={{
              // position: 'absolute',
              width: '670px',
              height: '108px',
              // left: 745px;
              // top: 1402px;
              marginTop: '7%',
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: '17px',
              lineHeight: '27px',

              color: '#2D4755'
            }}>
              {homePageData[0].healthCareManagment}
            </Typography>
          </Box>

          <Box sx={{
            marginTop: '13%'
          }}>
            <Image src={Reactangle8} style={{
              // position: absolute;
              width: '1000px',
              height: '450px',
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
        width: { md: '95%', sm: '100%' },
        height: { md: '920px', sm: 'auto' },
        margin: '0 auto',
        marginTop: '7%',
        background: '#253239',
      }}>
        <Box sx={{
          display: 'flex',
          flexWrap: { md: 'nowrap', sm: 'wrap' },
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <Box>
            <Typography sx={{
              // background: 'red',
              width: { md: '105%', sm: '100%' },
              height: { md: '52px', sm: 'auto' },
              // marginLeft: '8%',
              marginTop: '8%',

              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: { md: '47px', sm: '35px' },
              lineHeight: { md: '112%', sm: '90%' },
              /* or 52px */

              color: '#E9501D',

            }}>
              Bridging Gaps in Healthcare
            </Typography>

            <Typography sx={{
              // position: absolute;
              width: '100%',
              height: { md: '42px', sm: 'auto' },
              // marginLeft: '8%',
              marginTop: '2%',
              fontStyle: 'normal',
              fontWeight: '275',
              fontSize: { md: '38px', sm: '29px' },
              lineHeight: '112%',
              /* or 42px */

              color: '#FFFFFF',

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
          flexWrap: { md: 'nowrap', sm: 'warp' },
          justifyContent: 'space-evenly',
          margin: '0 auto',
          marginTop: '5%'
        }}>
          <Cart src={parents} heading={homePageData[1].cartOneHeading} content={homePageData[1].cartOneContent} />

          <Cart src={corporate} heading={homePageData[1].cartTwoHeading} content={homePageData[1].cartTwoContent} />

          <Cart src={parent} heading={homePageData[1].cartThreeHeading} content={homePageData[1].cartThreeContent} />

          <Cart src={govt} heading={homePageData[1].cartFourHeading} content={homePageData[1].cartFourContent} />
        </Box>

        <Box sx={{
        }}>
          <Typography sx={{
            width: '96%',
            margin: '0 auto',
            // textAlign: 'center',
            marginTop: '5%',
            height: { md: '81px', sm: 'auto' },
            // top: 3143px;

            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: { md: '18px', sm: '14px' },
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

        }}>
          <Box sx={{
            width: '45%',
            // height: '70px'
          }}>
            <Image src={mobile} height={500}/>
          </Box>
          <Box sx={{
            width: '45%',
            marginLeft: '7%'
          }}>
          <Content headingOne='INTEGRATED ' headingTwo='HEALTHCARE' content='MANAGEMENT APPLICATION'/>
            <Box sx={{
              marginTop: '7%',
              width: '100%',
              height: '20px',
            }}>
              <Point />
            <Button title='Download App' bg='#E9501D' border='1px solid' width='198px' height='52px' br='5px' fs='18px' fontWeight='500' lineHeight='21px' color='#FFFFFF' mt='13%'/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  );
}


// <Box sx={{
//         background: `linear-gradient(
//           80.65deg,
//           rgba(233, 80, 29, 0.12) 5.4%,
//           rgba(31, 139, 123, 0.12) 47.64%,
//           rgba(235, 198, 98, 0.12) 97.13%
//           )`,
//         maxWidth: '90%',
//         height: '500px',
//         borderRadius: '5%',
//         display: 'flex',
//         justifyContent: 'space-evenly',
//         margin: '0 auto'
//       }}>
//         <Box sx={{
//           marginTop: '5%',
//           padding: '4%'
//         }}>
//           <Box>
//             {/* HealthX comtent */}
//             <Box>
//               <Box>
//                 <Typography sx={{
//                   width: '70%',
//                   height: '52px',
//                   fontStyle: 'normal',
//                   fontWeight: '400',
//                   fontSize: { md: '47px', sm: '20px' },
//                   lineHeight: '111%',
//                   /* or 52px */

//                   background: `linear-gradient(90deg, #1F8B7B 0%, #E9501D 100%)`,
//                   BackgroundClip: 'text',
//                   Color: 'transparent',
//                   backgroundClip: 'text',
//                   textFillColor: 'transparent',
//                 }}>
//                   Healthx Pakistan
//                 </Typography>

//                 <Typography sx={{
//                   width: '660px',
//                   height: '79px',
//                   fontStyle: 'normal',
//                   fontWeight: '600',
//                   fontSize: '55px',
//                   lineHeight: '112%',
//                   /* identical to box height, or 79px */

//                   color: '#E9501D',
//                 }}>
//                   Healthcare with a 
//                   <Typography variant="body1" sx={{
//                     color: '#1F8B7B', fontStyle: 'normal',
//                     fontWeight: '600',
//                     fontSize: '55px',
//                     lineHeight: '112%', display: 'inline-block'
//                   }}> Heart
//                   </Typography>
//                 </Typography>
//               </Box>
//               <Typography sx={{
//                 width: '600px',
//                 height: '69px',
//                 fontStyle: 'normal',
//                 fontWeight: '265',
//                 fontSize: '40px',
//                 lineHeight: '112%',
//                 /* or 69px */

//                 color: '#1E1E1E',

//               }}>
//                 Where Every Life Matters
//               </Typography>
//             </Box>
//             {/* Contact Button */}
//             <Box sx={{
//               marginBottom: '5%',
//               width: '195px',
//               height: '52px',
//             }}>
//               <Button
//                 width='90%'
//                 bg='#E9501D'
//                 height='40px'
//                 fontWeight='500'
//                 fs='18px'
//                 lineHeight='20px'
//                 color='#FFFFFF'
//                 br='5px'
//                 p='1%'
//                 title='contact us'
//               />
//             </Box>
//           </Box>
//         </Box>

//         {/* Model  */}
//         <Box sx={{
//           flexBasis: '45%',
//         }}>Model</Box>
//       </Box>