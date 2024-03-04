import {Box , Typography} from '@mui/material'

export default function Content({headingOne , headingTwo , content}) {
    return( 
            <>
        <Box>
        <Typography sx={{
            width: {sm: '656px' , xs: '90%'},
            height: '52px',
            
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: {sm: '37px' , xs: '25px'},
            lineHeight: '112%',
            /* or 52px */
            
          color: '#1F8B7B',
            marginTop : {xs: '3%'}
        }}>
          {headingOne}
          <Typography sx={{
              display: 'inline-block',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: {sm: '37px' , xs: '25px'},
              lineHeight: '112%',
              /* or 52px */
              
              color: '#E9501D',
            }}>
            {headingTwo}
          </Typography>
        </Typography>
      </Box>

      <Box>
        <Typography sx={{
            width: {sm: '458px' , xs: '90%'},
            height: '42px',
            marginTop: '3%',
            fontStyle: 'normal',
            fontWeight: '275',
            fontSize: {sm: '30px' , xs: '20px'},
            lineHeight: '112%',
            /* or 42px */
            
            color: '#1E1E1E',
            
        }}>
          {content}
        </Typography>
      </Box>
            </>
    )
}