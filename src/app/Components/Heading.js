import {Box , Typography} from '@mui/material'
export default function Heading({number , heading , content , numberColor , headingColor , contentColor , flexFlow}){
    return(
        <Box sx={{
            /* Auto layout */
            display: 'flex',
            justifyContent: 'space-evenly',
            flexFlow: flexFlow,
            padding: '0px',
            gap: '33px',
            // marginLef
            // position: absolute; 
            width: '394px',
            height: '38px',
            // top: 1250px;

          }}>
            <Typography sx={{
              width: '58px',
              height: '33px',   
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '47px',
              lineHeight: '112.64%',
              /* or 52px */
              /* leading-trim and text-edge are draft CSS properties.
              
              Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
              */
              leadingTrim: 'both',
              textEdge: 'cap',
              color: numberColor,
              opacity: '0.1',
            }}>
              {number}
            </Typography>
            {/* and commited to your health */}
            <Box>
              <Typography sx={{
                width: '150px',
                height: '13px',

                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '19px',
                lineHeight: '27px',
                /* leading-trim and text-edge are draft CSS properties.
                
                Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
                */
                leadingTrim: 'both',
                textEdge: 'cap',

                color: headingColor,
              }}>
                {heading}
              </Typography>

              <Typography sx={{

                width: '303px',
                height: '13px',
                marginTop: '3%',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '19px',
                lineHeight: '27px',
                /* leading-trim and text-edge are draft CSS properties.
                
                Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
                */
                leadingTrim: 'both',
                textEdge: 'cap',

                color: contentColor,
              }}>
                {content}
              </Typography>
            </Box>
          </Box>
    )
}