interface Params {
    style: string
    onClick: any
    text: string
}

export const Button = ({ style, onClick, text }: Params) => {
    return (
        <button className={style} onClick={() => onClick()}>
            {text}
        </button>
    )
}


