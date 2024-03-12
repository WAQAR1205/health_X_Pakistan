import {Box , Typography} from '@mui/material'

export default function Rating({number , content , numberWidth , contentWidth , lg = '35%' , sm = '40%' , xsC = '60%' , xlC='30%'}){
    return(
        <>


<Box sx={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: {md: '80%' , xs: '70%'}
}}>
      <Box sx={{
        width: {md: numberWidth , sm: '50%' , xs: '50%' , lg: '45%' , xl: '25%'},
        // height: '80px',
      }}>
        <Typography variant="body1" sx={{
            fontStyle: 'normal',
          fontSize: { xs: '35px', sm: '35px', md: '50px' , lg : '55px' }, 
          fontWeight: '500',
          lineHeight: '90px',
          color: '#1F8B7B',
        }}>
          {number}
        </Typography>
      </Box >
      <Box sx={{
        width: {md: contentWidth , sm: sm , xs: xsC, lg: lg , xl: xlC},
        // height: '54px',
      }}>
        <Typography sx={{
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: { xs: '12px', sm: '12px', md: '10px' , lg: '16px'},
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