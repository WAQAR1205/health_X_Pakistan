import {Box , Typography} from '@mui/material'
import Content from './homeComponents/Content'
import Heading from './homeComponents/Heading'
import homePageData from '../mockData/homePageData/homePage'
import Faq from './homeComponents/FAQ'

function Question() {
  return (
    <Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: {md: 'nowarp' , xs: 'wrap'},
          marginTop: {md: '0' , xs: '7%'}
        }}>
          <Box sx={{
            flexBasis: {md: '45%' , xs: '100%'},
          }}>
            <Faq Question={homePageData[3].Question1} Answer={homePageData[3].Answer1}/>
            <Faq Question={homePageData[3].Question1} mt='3%' Answer={homePageData[3].Answer2}/>
            <Faq Question={homePageData[3].Question1} mt='3%' />
          </Box>
          <Box sx={{
            marginTop: {md: '0' , xs: '3%'},
            width: {md: '45%' , xs: '100%'},
            marginLeft: {md: '2%' , xs: '0'},
            flexBasis: {md: '45%' , xs: '100%'},
          }}>
            <Faq Question={homePageData[3].Question2} />
            <Faq Question={homePageData[3].Question1} mt='3%' />
            <Faq Question={homePageData[3].Question1} mt='3%' />
          </Box>
        </Box>
      
    </Box>
  )
}

export default Question