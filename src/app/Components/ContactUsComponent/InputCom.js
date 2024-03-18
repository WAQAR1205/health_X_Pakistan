import { Input } from "@mui/material"

export default function InputCom( {placeholder , Width , ml , type , mt , height='auto'}){
    return(
        <Input disableUnderline placeholder={placeholder} type={type} required sx={{
            fontWeight: '400',
            height: height,
            fontSize: '17px',
            lineHeight: '25px',
            color: '#253239',
            padding: '1%',
            width: Width,
            border: '1.46px solid #E9501D',
            borderRadius: '8px',
            marginLeft: ml,
            marginTop: mt
          }} />
    )
}