

function Button({bg , fs, p, color , border , br , width , height , title , lineHeight, fontWeight , mt}) {
    return (
        <button style={{
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
            marginTop: mt
        }}>{title}
        </button>
    )
}

export default Button