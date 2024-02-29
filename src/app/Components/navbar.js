'use client'
import { AppBar, Toolbar, Box, Select, MenuItem, Typography, Container, List, ListItem, } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import img from '../../Images/logo.webp'
import Link from 'next/link';
import Button from './Button'

function Navbar() {

    const [selectedValue, setSelectedValue] = useState('eng');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <Container>
            <AppBar position="static" sx={{ backgroundColor: 'inherit', boxShadow: 'none' }}>
                <Toolbar sx={{ marginTop: '2%' }}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Box sx={{
                            flexBasis: { xs: '40%', sm: '30%', md: '40%' }, // Adjust width for different screen sizes
                        }}>
                            <Link href='/'>
                                <Image
                                    src={img}
                                    alt="Example Image"
                                    width={'100%'}
                                    height={70}
                                />
                            </Link>
                        </Box>

                        <List sx={{
                            color: 'black',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap', // Allow items to wrap on smaller screens
                        }}>
                            <ListItem sx={{
                                flexBasis: { xs: '25%', sm: '20%', md: '10%' }, // Adjust width for different screen sizes
                            }}>
                                <Link href="/Solution">
                                    <Typography variant="body2" fontWeight="light" fontSize="12px">
                                        Solution
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem sx={{
                                flexBasis: { xs: '25%', sm: '20%', md: '10%' },
                            }}>
                                <Link href="#">
                                    <Typography variant="body2" fontWeight="light" fontSize="12px">
                                        Resources
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem sx={{
                                flexBasis: { xs: '100%', sm: '50%', md: '20%' },
                            }}>
                                <Link href="#">
                                    <Typography variant="body2" fontWeight="light" fontSize="12px">
                                        About us
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem sx={{
                                flexBasis: { xs: '100%', sm: '25%', md: '10%' },
                            }}>
                                <Select sx={{
                                    border: '1px solied grey !important',
                                    borderRadius: '8%',
                                    fontSize: '12px',
                                    width: '100%',
                                    height: '40%',
                                    padding: '0.6%',
                                }}
                                    value={selectedValue}
                                    onChange={handleChange}
                                    label="Select Language"
                                >
                                    <MenuItem value="eng">Eng</MenuItem>
                                    <MenuItem value="spa">Spa</MenuItem>
                                    <MenuItem value="fre">Fre</MenuItem>
                                </Select>
                            </ListItem>
                            <ListItem sx={{
                                flexBasis: { xs: '100%', sm: '100%', md: '35%' },
                            }}>
                                <Button
                                    bg="#1F8B7B"
                                    fs="15px"
                                    p="1%"
                                    color="white"
                                    border="1px solid #1F8B7B"
                                    br="13%"
                                    width="60%"
                                    height="38px"
                                    title="Download App"
                                />
                            </ListItem>
                        </List>

                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default Navbar;
{/* <List sx={{
    color: 'black',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
}}>
    <ListItem sx={{
        flexBasis: '10%'
    }}>
        <Link href="/Solution">
            <Typography variant="body2" fontWeight="light" fontSize="12px">
                Solution
            </Typography>
        </Link>
    </ListItem>
    <ListItem sx={{
        flexBasis: '10%'
    }}>
        <Link href="#">
            <Typography variant="body2" fontWeight="light" fontSize="12px">
                Resources
            </Typography>
        </Link>
    </ListItem>
    <ListItem sx={{
        flexBasis: '50%'
    }}>
        <Link href="#">
            <Typography variant="body2" fontWeight="light" fontSize="12px">
                About us
            </Typography>
        </Link>
    </ListItem>

    <ListItem sx={{
        flexBasis: '15%'
    }}>
        <Select sx={{
            border: '1px solied grey !important',
            borderRadius: '8%',
            fontSize: '12px',
            width: '100%',
            height: '40%',
            padding: '0.6%'
        }}
            value={selectedValue}
            onChange={handleChange}
            label="Select Language"
        >
            <MenuItem value="eng">Eng</MenuItem>
            <MenuItem value="spa">Spa</MenuItem>
            <MenuItem value="fre">Fre</MenuItem>
        </Select>
    </ListItem>

    <ListItem sx={{
        flexBasis: '80%'
    }}>

        <Button
            bg="#1F8B7B"
            fs="15px"
            p="1%"
            color="white"
            border="1px solid #1F8B7B"
            br="13%"
            width="60%"
            height="38px"
            title="Download App"
        />
    </ListItem>
</List> */}