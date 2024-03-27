import { Box } from "@mui/material";
import Image from "next/image";

export default function CardImage({img , marginTop}){
    return(
        <>
        <Box sx={{
            width: {md:'375px',sm:'210px',xs:"100%"},
            marginTop: marginTop,
        }}>

                    <Image src={img} style={{
                        width: '100%',
                        height:'100%',
                        objectFit: 'cover',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        overflow: 'hidden'
                    }} />
                
                
        </Box>
        </>
    )
}