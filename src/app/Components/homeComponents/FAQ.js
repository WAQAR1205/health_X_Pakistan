import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import arrowDown from '../../../Images/arrow-down.png'

export default function FAQ({Question , mt}) {

    return (
        <>
            {/* {
                homePageData[3].FAQ.map((content, index) => ( */}
                    <Box sx={{
                        width: '100%',
                        background: `linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)`,
                        border: '1px solid #E9501D',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        padding: '0',
                        marginTop: mt
                    }}
                    >
                        <Typography sx={{
                            width: '90%',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '22px',
                            lineHeight: '33px',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            marginTop: '2%',
                            color: '#253239',
                        }}>
                            {Question}

                            {/* <Typography sx={{
                                fontStyle: 'normal',
                                fontWeight: '300',
                                fontSize: '19px',
                                lineHeight: '27px',
                                marginTop: '4%',
                                color: '#2D4755',
                            }}>
                                {Answer}
                            </Typography> */}
                        </Typography>

                        <Typography sx={{
                            marginTop: '2%',
                        }}>
                            <Image src={arrowDown} />
                        </Typography>
                    </Box>
                {/* ))
            } */}

        </>
    )
}
