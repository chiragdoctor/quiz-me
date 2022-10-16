
type ButtonProps = {
    text: string;
    handleOnClick?: () => void;
}

const Button = ({ text, handleOnClick }: ButtonProps) => {
    return (
        <button className='bg-yellow-400 text-white shadow w-40 h-10 font-poppins' onClick={handleOnClick}>
            {text}
        </button>
    )
}

export default Button