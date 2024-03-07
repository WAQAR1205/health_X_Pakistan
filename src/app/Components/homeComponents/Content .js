import {Box , Typography} from '@mui/material'

export default function Content({headingOne , headingTwo , content , mdfs = '55px' , xsfs = '25px' , mdfsc = '50px' , xsfsc = '20px'}) {
    return( 
            <>
        <Box>
        <Typography sx={{
            width: {md: '120%' , lg: '100%' , xl: '120%' ,xs: '120%'},
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: {md: mdfs , xs: xsfs , lg: 'mdfs' , xl: 'mdfs'},
            lineHeight: '120%',
            /* or 52px */
            
          color: '#1F8B7B',
            marginTop : {xs: '3%'},
            
        }}>
          {headingOne}
          <span style={{
            color: '#E9501D'
          }}>
        {headingTwo}
          </span>
        </Typography>
          
      </Box>

      <Box>
        <Typography sx={{
            width: {md: '120%' , xs: '90%' , lg: '120%' , xl: '120%'},
            marginTop: '3%',
            fontStyle: 'normal',
            fontWeight: '275',
            fontSize: {md: mdfsc , xs: xsfsc , lg: mdfsc , xl: mdfsc},
            lineHeight: '50%',
            /* or 42px */
            
            color: '#1E1E1E',
        }}>
          {content}
        </Typography>
      </Box>
            </>
    )
}