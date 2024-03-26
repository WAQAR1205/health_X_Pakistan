import { Box, Typography } from '@mui/material'
import Crasol from '../crasol'

export default function Team() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: { md: 'row', xs: 'column' },
        width: '98%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        margin: '0 auto',
      }}>
        <Box sx={{
          width: {md: '20%' , xs: '100%'},
          height: '200px',
        }}>

          <Typography sx={{
            fontWeight: '300',
            fontSize: {lg: '38px' , xs: '20px' , md: '30px'},
            lineHeight: '112%',
          /* or 42px */
          
          color: '#1E1E1E',
          }}>
            Visionaries of Health
          </Typography>
          <Typography sx={{
            fontWeight: '600',
            fontSize: {lg:'40px' , xs: '20px' , md: '30px'},
            lineHeight: '112%',
            /* or 52px */
            
            color: '#E9501D',
          }}>
            Your
            <span style={{color: '#1F8B7B',
            }}>
              &nbsp;Partners
            </span>
          </Typography>
          <Typography sx={{
            fontWeight: '600',
            fontSize: {lg: '40px' , xs: '20px' , md: '30px'},
            lineHeight: '112%',
            /* or 52px */
            
            color: '#E9501D',
          }}>
            in Health
          </Typography>
          <Typography sx={{
            fontWeight: '300',
            fontSize: {lg: '19px' , md: '14px' , xs: '14px'},
            lineHeight: '27px',
            
            color: '#2D4755',
          }}>
          As a multinational healthcare management company, we take pride in our team of experienced healthcare professionals who specialize in primary healthcare and patient management.
          </Typography>
        </Box>
        <Box sx={{
          width: {md: '75%' , xs: '100%'},
          marginTop: {md:'0' , xs: '10%'},
        }}>
          <Crasol />
        </Box>
      </Box>
    </>
  )
}