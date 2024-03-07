import {Box , Typography} from '@mui/material'

export default function Rating({number , content , numberWidth , contentWidth}){
    return(
        <>


<Box sx={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%'
}}>
      <Box sx={{
        width: {md: numberWidth , sm: '60%' , xs: '30%'},
        height: '80px',
      }}>
        <Typography variant="body1" sx={{
            fontStyle: 'normal',
          fontSize: { xs: '35px', sm: '50px', md: '60px' }, 
          fontWeight: '500',
          lineHeight: '90px',
          color: '#1F8B7B',
        }}>
          {number}
        </Typography>
      </Box >
      <Box sx={{
        width: {md: contentWidth , sm: '40%' , xs: '30%'},
        height: '54px',
      }}>
        <Typography sx={{
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          lineHeight: '27px',
          color: '#2D4755',
        }}>
          {content}
        </Typography>
      </Box>
    </Box>
    </>
  );
}