import { Box, Typography } from "@mui/material";
import solutionModel from '../../../Images/solutionModel.png'
import Image from "next/image";
import HealthX from "../homeComponents/HealthX";
import Content from "../homeComponents/Content ";
import Button from '../Button'
import shazain from '../../../Images/shazain 1.png'

export default function MobileBox() {
    return (
        <Box sx={{
            background: 'linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)',
            marginTop: '4%'
        }}>
            <Box sx={{
                width: {md: '80%' , xs: '10%'},
                position: 'absolute',
                left: {md: '5%' , xs: '0'}
            }}>
                <Image src={solutionModel} alt="moidel" style={{width: '100%'}}/>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: {xs: 'column' , md: 'row'},
            }}>
                <Box sx={{
                    width: {md: '60%' , xs: '100%'},
                    marginTop: '17%',
                    marginLeft: {xs: '5%' , md: '0'}
                }}>
                    <HealthX />
                    <Content headingTwo='Curious to Learn More' content='Get in touch with us for more information' />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        width: {md:'70%' , xs: '100%'},
                        marginTop: '8%',
                        marginLeft: {xs: '-15%' , md: '0'}
                    }}>
                        <Button
                            width={{ xs: '23%', sm: '20%', md: '35%', lg: '30%', xl: '40%' }}
                            bg='#1F8B7B'
                            fontWeight='500'
                            fs={{ md: '16px', lg: '18px', xl: '30px', xs: '10px', sm: '12px' }}
                            lineHeight='21px'
                            color='#FFFFFF'
                            br='5px'
                            p='1%'
                            title='contact us'
                            mt='5%'
                            height='50px'
                        />

                        <Button
                            width={{ xs: '23%', sm: '25%', md: '45%', lg: '30%', xl: '40%' }}
                            bg='#E9501D'
                            fontWeight='500'
                            fs={{ md: '16px', lg: '18px', xl: '30px', xs: '10px', sm: '12px' }}
                            lineHeight='100%'
                            color='#FFFFFF'
                            br='5px'
                            title='Download App'
                            mt='5%'
                            height='50px'
                        />
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '15px',
                        lineHeight: '22px',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        marginTop: '5%',
                        color: '#000000',
                    }}>
                    7 days a week, 24 hours a day
                    </Typography>
                </Box>
                <Box sx={{
                    marginTop: '17%',
                    textAlign: 'center',
                }}>
                    <Image src={shazain} alt="image" height={400}/>
                </Box>
            </Box>
        </Box>
    )
}