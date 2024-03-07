import { useState } from 'react';
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import arrowDown from '../../../Images/arrow-down.png'

export default function FAQ({ Question, mt, Answer }) {

    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };
    return (
        <>

            <Box sx={{
                width: '100%',
                background: `linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)`,
                border: '1px solid #E9501D',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0',
                margin: '0 auto',
                marginTop: mt,
            }}
                
            >
                <Box>
                <Typography sx={{
                    width: '100%',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '22px',
                    lineHeight: '33px',
                    leadingTrim: 'both',
                    textEdge: 'cap',
                    marginTop: '2%',
                    color: '#253239',
                    marginLeft: '2%'
                }}>
                    {Question}

                </Typography >
                    {showAnswer && ( // Render answer section if showAnswer is true
                <Typography sx={{
                    width: '100%',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '22px',
                    lineHeight: '33px',
                    leadingTrim: 'both',
                    textEdge: 'cap',
                    marginTop: '2%',
                    color: '#253239',
                    marginLeft: '2%'
                }}
                >
                    {Answer}
                </Typography>
                )}
                </Box>

                <Typography sx={{
                    marginTop: '2%',
                    width: '5%',
                }}>
                    <Image src={arrowDown} onClick={toggleAnswer}/>
                </Typography>

            </Box>

        </>
    )
}