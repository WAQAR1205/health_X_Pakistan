import {Box , Typography} from '@mui/material'

export default function Content({headingOne , headingTwo , content}) {
    return( 
            <>
        <Box>
        <Typography sx={{
            // position: absolute;
            width: '656px',
            height: '52px',
            // left: 745px;
            // top: 1250px;
            
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '37px',
            lineHeight: '112%',
            /* or 52px */
            
          color: '#1F8B7B',

        }}>
          {headingOne}
          <Typography sx={{
              display: 'inline-block',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '37px',
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
            // position: absolute;
            width: '458px',
            height: '42px',
            // left: 745px;
            // top: 1317px;
            marginTop: '3%',
            fontStyle: 'normal',
            fontWeight: '275',
            fontSize: '30px',
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