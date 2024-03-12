import { Button as MuiButton } from '@mui/material';

function Button({ bg, fs, p, color, border, br, width, height, title, lineHeight, fontWeight, mt , pt}) {
    return (
        <MuiButton
            sx={{
                background: bg,
                fontSize: fs,
                padding: p,
                color: color,
                border: border,
                borderRadius: br,
                width: width,
                height: height,
                lineHeight: lineHeight,
                fontWeight: fontWeight,
                marginTop: mt,
                paddingTop: pt
            }}
        >
            {title}
        </MuiButton>
    )
}

export default Button;
