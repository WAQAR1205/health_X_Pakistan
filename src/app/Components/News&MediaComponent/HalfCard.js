import {Box,Typography} from '@mui/material'
export default function HalfCard({heading,content}){
    return(
        <>
        <Box sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            marginTop : '0px',
            width: '375px',
            boxShadow: 1,
            borderRadius : 1
            
        }}>
            <Box sx={{
                width:'100%',                
              textOverflow: 'ellipsis', // Add ellipsis for long text
            }}>
            <Typography sx={{justifyContent: 'flex-start',fontFamily: 'Poppins', fontStyle: 'normal',fontWeight: '500', fontSize:'13px', lineHeight: '25px', color: '#9E9E9E',}}>
                2 week ago
            </Typography>
            <Typography variant='h5' sx={{fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'bold', fontSize:'18px', lineHeight: '30px', color: '#2D4755', marginTop: '2%'}}>
                {heading}
            </Typography>
            <Typography sx={{fontFamily: 'Poppins', fontStyle: 'normal',fontWeight: 'light', fontSize:'10', lineHeight: '25px', color: '#2D4755', marginTop: '2%'}}>
                {content}
            </Typography>
            <Typography sx={{fontFamily: 'Poppins', fontStyle: 'normal',fontWeight: 'bold', fontSize:'15px', lineHeight: '27px', color: '#E9501D', marginTop: '2%'}}>
                Keep Reading
            </Typography>
            </Box>
        </Box>
        </>
    )
}