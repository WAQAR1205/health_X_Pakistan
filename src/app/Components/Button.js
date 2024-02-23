

function Button({bg , fs, p, color , border , br , width , height , title}) {
    return (
        <button style={{
            background: bg,
            fontSize: fs,
            padding: p,
            color: color,
            border: border,
            borderRadius: br,
            width: width,
            height: height
        }}>{title}
        </button>
    )
}

export default Button