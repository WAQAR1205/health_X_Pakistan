import {Box , Typography} from '@mui/material'

export default function Rating({number , content}){
    return(
        <>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <Box sx={{
            width: '90%',
            height: '80px',
          }}>
            <Typography variant="body1" sx={{
              fontStyle: 'normal',
              fontSize: '60px',
              fontWeight: '500',
              lineHeight: '90px',
              color: '#1F8B7B',
            }}>{number}
            </Typography>
          </Box >
          <Box sx={{
            width: '96px',
            height: '54px',
            // background: 'blue'
          }}>
            <Typography sx={{
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: '16px',
              lineHeight: '27px',

              color: '#2D4755',
            }}>
              {content}
            </Typography>
          </Box>
        </Box>
        </>
    )
}


{/* 
          <Box sx={{
            width: '70%',
            height: '80px',
            // background: 'red'
          }}>
            
          </Box >
          <Box sx={{
            width: '125px',
            height: '54px',
            // background: 'blue'
          }}>
            
          </Box>
        </Box> */}


// happy
{/* 
          <Box sx={{
            width: '70%',
            height: '80px',
            // background: 'red'
          }}>
          </Box >
          <Box sx={{
            width: '130px',
            height: '54px',
            // background: 'blue'
          }}>
          </Box>
        </Box>
      </Box> */}