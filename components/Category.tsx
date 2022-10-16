type CategoryProps = {
    text: string;
    selectedCategories: string[];
    handleOnClick: (c: string) => void;
}

const Category = ({ text, selectedCategories, handleOnClick }: CategoryProps) => {
    const isSelected = selectedCategories.includes(text)
    const classes = isSelected ? 'bg-yellow-400 text-white shadow font-poppins text-xs p-2.5 text-center m-2 mr-0' : 'bg-gray-400 text-black shadow h-10 font-poppins text-sm p-2.5 min-w-full text-center m-2'
    if (text === '') {
        return null
    }
    return (
        <button className="flex justify-center" onClick={() => handleOnClick(text)}>
            <span className={classes}>
                {text}
            </span>
            {isSelected && <span className="bg-black text-white text-center h-9 w-8 p-1.5 text-sm m-2 ml-0">X</span>}
        </button>

    )
}

export default Category