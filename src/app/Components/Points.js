import { Typography } from "@mui/material"
import Image from "next/image"
import tick from '../../Images/charm_tick-double.png'
import homePageData from "../mockData/homePageData/homePage"

export default function Points(){
    return(
        <>
            {
            homePageData[2].appIntegration.map((content , index) =>(
        <Typography key={index} sx={{
            display: 'flex',
            width: '100%',
        }}>
            <Image src={tick}/>
                    <Typography sx={{
                        marginLeft: '1%',
                    }}>
                        {content}
                    </Typography>

        </Typography>
            ))
            }
        </>
    )
}