import { Box, Typography } from "@mui/material";

function ScrollBar({ handleScroll }) {

    return (
            <Box
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    position: 'fixed',
                    top: '26%',
                    left: '95%',
                    // transform: 'translate(-50%, -50%)',
                    // width: '20px', // Adjust the width as needed
                    // Height: '100px', // Adjust the max height as needed
                    overflowY: 'auto', // Enable vertical scrollbar if content exceeds the container height
                    bgcolor: 'inherit', // Optional: set a background color with opacity
                    padding: '10px',
                    // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Optional: add shadow for better visibility
                    // borderRadius: '8px', // Optional: add border radius for rounded corners
                    zIndex: '-1000', // Optional: adjust the z-index to ensure it's above other content
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    gap: '30px',
                }}
            >
                
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '112%',
                    /* identical to box height, or 20px */
                    textAlign: 'right',
                    color: '#1F8B7B',
                }} >
                    01
                    <span style={{
                        border: '2px solid #E9501D',
                        marginLeft: '30%',
                        height: '200px'
                    }}>
                    </span>
                
                </Typography>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '112%',
                    /* identical to box height, or 20px */
                    textAlign: 'right',
                    color: '#1F8B7B',
                }} onClick={() => handleClick('two')}>
                    02
                    <span style={{
                    border: '2px solid #E9501D',
                    transform: 'rotate(90deg)',
                    marginLeft: '30%',
                    height: '200px'
                    }}>
                    </span>
                </Typography>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '112%',
                    /* identical to box height, or 20px */
                    textAlign: 'right',
                    color: '#1F8B7B',
                }} onClick={() => handleClick('three')}>
                    03
                    <span style={{
                    border: '2px solid #E9501D',
                    transform: 'rotate(90deg)',
                    marginLeft: '30%',
                    height: '200px'
                    }}>
                    </span>
                </Typography>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '112%',
                    /* identical to box height, or 20px */
                    textAlign: 'right',
                    color: '#1F8B7B',
                }} onClick={() => handleClick('four')}>
                    04
                    <span style={{
                    border: '2px solid #E9501D',
                    transform: 'rotate(90deg)',
                    marginLeft: '30%',
                    height: '200px'
                    }}>
                    </span>
                </Typography>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '112%',
                    /* identical to box height, or 20px */
                    textAlign: 'right',
                    color: '#1F8B7B',
                }} onClick={() => handleClick('five')}>
                    05
                    <span style={{
                    border: '2px solid #E9501D',
                    transform: 'rotate(90deg)',
                    marginLeft: '30%',
                    height: '200px'
                    }}>
                    </span>
                </Typography>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '112%',
                    /* identical to box height, or 20px */
                    textAlign: 'right',
                    color: '#1F8B7B',
                }} onClick={() => handleClick('six')}>
                    06
                    <span style={{
                    border: '2px solid #E9501D',
                    transform: 'rotate(90deg)',
                    marginLeft: '30%',
                    height: '200px'
                    }}>
                    </span>
                </Typography>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '112%',
                    /* identical to box height, or 20px */
                    textAlign: 'right',
                    color: '#1F8B7B',
                }} onClick={() => handleClick('seveen')}>
                    07
                    <span style={{
                    border: '2px solid #E9501D',
                    transform: 'rotate(90deg)',
                    marginLeft: '30%',
                    height: '200px'
                    }}>
                    </span>
                </Typography>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '112%',
                    /* identical to box height, or 20px */
                    textAlign: 'right',
                    color: '#1F8B7B',
                }} onClick={() => handleClick('eight')}>
                    08
                <span style={{
                    border: '2px solid #E9501D',
                    transform: 'rotate(90deg)',
                    marginLeft: '30%',
                    height: '200px'
                    }}>
                    </span>
                </Typography>
            </Box >
        );
}

export default ScrollBar;
