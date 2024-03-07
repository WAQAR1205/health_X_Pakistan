'use client'
import { Box } from "@mui/material"
import Content from '../Components/homeComponents/Content '
import Question from "../Components/Question"

export default function ContactUs() {
  return (
    <Box>
        <Box>
            <Box>
                <Content headingTwo='Get in Touch' content='Connecting for Care'/>
            </Box>
        </Box>
        <Box>
            <Question />
        </Box>
    </Box>
  )
}
