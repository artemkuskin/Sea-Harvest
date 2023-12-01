interface Params {
    style: string,
    text: string
}

export const Paragraph = ({ style, text }: Params) => {
    return (
        <p className={style}>
            {text}
        </p>
    )
}