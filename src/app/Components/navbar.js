'use client'
import { AppBar, Toolbar, Box, Select, MenuItem, Typography, List, ListItem, IconButton, Drawer } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import img from '../../Images/logo.webp';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Button from './Button';

function Navbar() {
    const [selectedValue, setSelectedValue] = useState('eng');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'inherit', boxShadow: 'none' }}>
                <Toolbar sx={{ marginTop: '2%' }}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',    
                    }}>
                        <Box sx={{
                            width: {md: '50%' , xs: '90%'}, 
                        }}>
                            <Link href='/'>
                                <Image
                                    src={img}
                                    alt="Example Image"
                                    style={{
                                    width: '100%',
                                    }}
                                    />
                            </Link>
                           </Box>

                        <Box sx={{ display: { xs: 'block', md: 'none' , sm: 'inline-block'} , width: '100%%' , height: 'auto'}}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="default"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <List sx={{
                            color: 'black',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            visibility: { md: 'visible', xs: 'hidden' , sm: 'hidden'},
                            
                        }}>
                            <ListItem sx={{
                                flexBasis: '8%', // Adjust width for different screen sizes
                                '& a': { // Apply styles to the anchor tag inside the ListItem
                                    color: 'black', // Change the color to black
                                    textDecoration: 'none', // Hide the underline
                                },
                            }}>
                                <Link href="/Individuals&Families">
                                    <Typography variant="body2" fontWeight="light" fontSize={{md: "10px" , lg: '16px' , xl: '20px'}}>
                                        Solution
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem sx={{
                                flexBasis: '8%',
                                '& a': { 
                                    color: 'black', 
                                    textDecoration: 'none', 
                                },
                            }}>
                                <Link href="/BlogPage">
                                    <Typography variant="body2" fontWeight="light" fontSize={{md: "10px" , lg: '16px' , xl: '20px'}}>
                                        Blog
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem sx={{
                                flexBasis: '15%',
                                '& a': { 
                                    color: 'black', 
                                    textDecoration: 'none',                                 },
                            }}>
                                <Link href="/AboutUs">
                                    <Typography variant="body2" fontWeight="light" fontSize={{md: "10px" , lg: '16px' , xl: '20px'}}>
                                        About us
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem sx={{
                                flexBasis: '10%',
                            }}>
                                <Select sx={{
                                    border: '1px solid grey !important',
                                    borderRadius: '8%',
                                    fontSize: {md: "10px" , lg: '16px' , xl: '20px'},
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
                                flexBasis: '35%',
                            }}>
                                <Button
                                    bg="#1F8B7B"
                                    fs={{md: "10px" , lg: '16px' , xl: '20px'}}
                                    p="1%"
                                    color="white"
                                    border="1px solid #1F8B7B"
                                    br="13"
                                    width="60%"
                                    height="38px"
                                    title="Download App"
                                />
                            </ListItem>
                        </List>

                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiIconButton-root': {
                        color: '#000000', // Black color for the toggle icon
                    },
                }}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                >
                    <List>
                        <ListItem>
                            <Link href="/Individuals&Families" style={{textDecoration: 'none'}}>
                                <Typography variant="body2" fontWeight="light" fontSize="18px">
                                    Solution
                                </Typography>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/BlogPage" style={{textDecoration: 'none'}}>
                                <Typography variant="body2" fontWeight="light" fontSize="18px">
                                    Blog
                                </Typography>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/AboutUs" style={{textDecoration: 'none'}}>
                                <Typography variant="body2" fontWeight="light" fontSize="18px">
                                    About us
                                </Typography>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Navbar;
