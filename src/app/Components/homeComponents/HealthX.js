import { Typography } from "@mui/material"

export default function HealthX({xs='80%' , md='100%' , mdc='38px' , lg= '100%' , lgc='41px' , xlc='44px' , margin='0 auto'}) {
    return(

<Typography sx={{
                        margin: margin,
                        width: { xs: xs, md: md , lg: lg},
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: { md: mdc , xs: '20px', lg: lgc, xl: xlc },
                        lineHeight: '120%',
                        /* or 52px */
                        background: `linear-gradient(90deg, #1F8B7B 0%, #E9501D 100%)`,
                        BackgroundClip: 'text',
                        Color: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                    }}>
                        Healthx Pakistan
                    </Typography>
    )
}