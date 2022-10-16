type OptionProps = {
    text: string
    selectedOption: string[];
    handleClick: (option: string) => void;
}

const Option = ({ text, selectedOption, handleClick }: OptionProps) => {

    const isSelected = selectedOption.includes(text);

    const commonClasses = 'w-auto text-white font-dark text-xl mx-8 my-2 p-6 tracking-normal leading-relaxed w-1/2 flex flex-col justify-center items-center '
    const classes = isSelected ? 'bg-yellow-400' : 'bg-gray-400';

    return (
        <div className={commonClasses + classes} onClick={() => handleClick(text)}>
            {text}
        </div>
    )
}

export default Option