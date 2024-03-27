import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Address({ img, Address = 'Address', mail }) {
    const [isHover, setIsHover] = useState(false);

    return (
        <Box
            sx={{
                textAlign: 'center',
                border: '1px solid #E9501D',
                height: {lg: '200px' , xs: '170px'},
                width: {md: '30%' , lg: '25%' , xs: '70%'},
                textJustify: 'center',
                background: isHover ? 'linear-gradient(80.65deg, rgba(233, 80, 29, 0.12) 5.4%, rgba(31, 139, 123, 0.12) 47.64%, rgba(235, 198, 98, 0.12) 97.13%)' : 'none',
                boxShadow: '0px 4px 20px 0px #0000000D',
                marginTop: '2%'
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Image src={img} alt="shazai" style={{ marginTop: '15%' }} />
            <Typography sx={{ fontWeight: '500', fontSize: {lg:'24px' , md: '21px' , xs: '18px'}, lineHeight: '112%', color: '#1F8B7B', marginTop: '2%' }}>
                {Address}
            </Typography>
            <Typography sx={{ fontWeight: '300', fontSize: {lg:'18px' , md: '15px' , xs: '12px'}, lineHeight: '112%', marginTop: '2%', color: '#253239' }}>
                {mail}
            </Typography>
        </Box>
    );
}
