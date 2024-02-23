'use client'
import { AppBar, Toolbar, Box, Select, MenuItem, Typography, Container, List, ListItem, } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import img from '../../Images/logo.webp'
import Link from 'next/link';
import Button from '../Components/Button'

function Navbar() {

    const [selectedValue, setSelectedValue] = useState('eng');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <Container sx={{
            background: `linear-gradient(
              80.65deg,
              rgba(233, 80, 29, 0.12) 5.4%,
              rgba(31, 139, 123, 0.12) 47.64%,
              rgba(235, 198, 98, 0.12) 97.13%
            )`,
            maxWidth: 'lg',
            height: '987px',
            borderRadius: '20px',
            marginTop: '3%'
        }}>

            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none',}}>
                <Toolbar sx={{marginTop: '2%'}}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Box>
                            <Image
                                src={img}
                                alt="Example Image"
                            />
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexBasis: '50%',
                        }}>
                            {/* <Box sx={{
                                width: '60%',
                                color: 'black',
                            }}> */}
                            <List sx={{
                                color: 'black',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
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
                                        borderRadius: '18%',
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
                                        br="18%"
                                        width="80%"
                                        height="38px"
                                        title="Download App"
                                    />
                                </ListItem>
                            </List>

                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default Navbar;
