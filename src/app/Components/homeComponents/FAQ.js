import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import arrowDown from '../../../Images/arrow-down.png';

export default function FAQ({ Question, mt, Answer }) {
    const [isClick, setIsClick] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const handleClick = () => {
        setIsClick(!isClick);
        toggleAnswer(); 
    };

    return (
        <Box sx={{
            width: '100%',
            background: isClick ? `linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)` : 'white',
            border: '1px solid #E9501D',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0',
            margin: '0 auto',
            marginTop: mt,
            borderRadius: '10px'
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
                    marginLeft: '2%',
                }}>
                    {Question}
                </Typography>
                {showAnswer && (
                    <Typography sx={{
                        width: '100%',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '19px',
                        lineHeight: '28px',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        marginTop: '2%',
                        color: '#2D4755',
                        marginLeft: '2%',
                    }}
                    >
                        {Answer}
                    </Typography>
                )}
            </Box>

            <Typography sx={{
                marginTop: '2%',
                width: '5%',
                marginRight: { xs: '8%', md: '2%' },
            }}>
                <Image alt="shazai" src={arrowDown} onClick={handleClick} />
            </Typography>

        </Box>
    );
}
