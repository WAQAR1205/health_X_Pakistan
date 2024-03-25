import { Box, Typography } from "@mui/material";
import Image from "next/image";

function Doctor({ name, country, img, speciality, bg}) {
    return (
        <Box sx={{ margin: '0 auto', width: {md: '100%' , xs: '100%'} }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                <Image src={img} alt="shazai" style={{ width: '100%' }} />
                <Box sx={{
                    width: '15%',
                    background: bg,
                    height: '20px',
                    borderRadius: '29px',
                    padding: '1%',
                    textAlign: 'center',
                    marginTop: '14%',
                    marginLeft: '-30%'
                }}>
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '10px',
                        lineHeight: '27px',
                        color: '#FFFFFF',
                        // margin: '0 auto',
                        marginTop: '-4%',
                    }}>
                        {country}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h6" sx={{ color: '#253239' , marginLeft: '15%'}}>{name}</Typography>
                <Typography variant="body1" sx={{ color: '#253239' , marginLeft: '15%' }}>{speciality}</Typography>
            </Box>

        </Box>
    )
}

export default Doctor;