
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import tick from '../../../Images/charm_tick-double.png';
import homePageData from "../../mockData/homePageData/homePage";

export default function Points() {
    return (
        <>
            {homePageData[2].appIntegration.map((content, index) => (
                <Box key={index} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: { sm: '100%', xs: '90%' },
                }}>
                    <Image src={tick} width={20} height={20} /> {/* Adjust the width and height of the tick image */}
                    <Typography sx={{ marginLeft: '10px' }}>{content}</Typography> {/* Adjust the margin as needed */}
                </Box>
            ))}
        </>
    );
}
