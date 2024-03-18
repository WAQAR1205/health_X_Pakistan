import {Box , Typography} from '@mui/material'

export default function Content({headingOne , headingTwo , content , mdfs = '33px' , xsfs = '30px' , mdfsc = '28px' , xsfsc = '20px' , md='100%' , mdc='120%' , lg='50px' , xl= '55px' , lgC='40px' , xlC='45px' , xlH='100%' , lgH='120%' , LgC='100%' , XlC='100%' , lh='40%'}) {
    return( 
            <>
        <Box>
        <Typography sx={{
            width: {md: md , lg: lgH , xl: xlH ,xs: '100%' , sm: '100%'},
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: {md: mdfs , xs: xsfs , lg: lg , xl: xl , sm: xsfs},
            lineHeight: '112%',
            /* or 52px */
            
          color: '#1F8B7B',
            marginTop : {xs: '3%'},
            // background: "red"
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
            width: {md: mdc , xs: '100%' , lg: LgC , xl: XlC , sm: '90%'},
            marginTop: '3%',
            fontStyle: 'normal',
            fontWeight: '275',
            fontSize: {md: mdfsc , xs: xsfsc , lg: lgC , xl: xlC , sm: xsfsc},
            lineHeight: lh,
            /* or 42px */
            
            color: '#1E1E1E',
        }}>
          {content}
        </Typography>
      </Box>
            </>
    )
}