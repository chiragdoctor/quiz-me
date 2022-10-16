
type ButtonProps = {
    text: string;
    handleOnClick?: () => void;
    disabled?: boolean;
}

const Button = ({ text, handleOnClick, disabled = false }: ButtonProps) => {
    let classes = disabled ? 'bg-gray-400 text-gray-200' : 'bg-yellow-400 text-white';
    classes = classes + ' shadow w-40 h-10 font-poppins'
    return (
        <button disabled={disabled} className={classes} onClick={handleOnClick}>
            {text}
        </button>
    )
}

export default Button