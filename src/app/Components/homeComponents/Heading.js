import {Box , Typography} from '@mui/material'
export default function Heading({number , heading , content , numberColor , headingColor , contentColor , flexFlow}){
    return(
        <Box sx={{
            /* Auto layout */
            // width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexFlow: flexFlow,
            flexDirection: 'row',
            gap: '10px', 
            width: {md:'394px' , xs:'100%' , sm: '90%'},
            marginTop: {md: '0' , xs: '4%'},
            // marginRight: '0',
            // background: "red",
          }}>
            <Typography sx={{
              width: {md: '58px' , xs: '5%'},
              // height: '33px',   
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: {md:'47px', xs: '36px' , sm: '30px'},
              lineHeight: '112.64%',
              /* or 52px */

              leadingTrim: 'both',
              textEdge: 'cap',
              color: numberColor,
              opacity: '0.1',
            }}>
              {number}
            </Typography>

            <Box sx={{
              width: {xs: '70%'}
            }}>
              <Typography sx={{
                width: {md: '150px' , xs: '50%' },
                // height: '13px',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: {md: '19px' , xs: '13px' , sm: '14px'},
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
                fontSize: {md: '19px' , xs: '13px' , sm: '14px'},
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