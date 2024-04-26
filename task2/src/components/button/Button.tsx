interface Props {
    title: string;
    color: string;
    onClick?:any;
    hover?:any;
    background?:string;
}

const Button = (props: Props) => {
    return (
        <div className={`p-3 ${props.background} hover:${props.hover} hover:cursor-pointer mx-auto border-b-2 w-28 h-14 flex justify-center items-center rounded-lg font-sans text-sm`}>
            <button className={`${props.color} font-semibold onClick=${props.onClick}`}>
                {props.title}
            </button>
        </div>
    )
}

export default Button