import {Box , Typography} from '@mui/material'
export default function Heading({number , heading , content , numberColor , headingColor , contentColor , flexFlow}){
    return(
        <Box sx={{
            /* Auto layout */
            display: 'flex',
            justifyContent: 'space-evenly',
            flexFlow: flexFlow,
            flexDirection: 'row',
            gap: '10px', 
            width: {md:'394px' , xs:'90%' , sm: '90%'},
            // height: '38px',
            // top: 1250px;

          }}>
            <Typography sx={{
              width: '58px',
              // height: '33px',   
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: {md:'47px', xs: '30px' , sm: '30px'},
              lineHeight: '112.64%',
              /* or 52px */

              leadingTrim: 'both',
              textEdge: 'cap',
              color: numberColor,
              opacity: '0.1',
            }}>
              {number}
            </Typography>

            <Box>
              <Typography sx={{
                width: {md: '150px' , xs: '30%' , sm: '30%'},
                // height: '13px',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: {md: '19px' , xs: '14px' , sm: '14px'},
                lineHeight: '27px',
                
                leadingTrim: 'both',
                textEdge: 'cap',
                
                color: headingColor,
              }}>
                {heading}
              </Typography>

              <Typography sx={{
                
                width: '303px',
                // height: '13px',
                marginTop: '3%',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: {md: '19px' , xs: '14px' , sm: '14px'},
                lineHeight: '27px',
                
                leadingTrim: 'both',
                textEdge: 'cap',
                
                color: contentColor,
                marginTop: {md: '0%' , sm: '-2' , xs: '-2%'},
              }}>
                {content}
              </Typography>
            </Box>
          </Box>
    )
}