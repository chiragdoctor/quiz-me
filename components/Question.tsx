type QuestionProps = {
    text: string
}

const Question = ({ text }: QuestionProps) => {



    return (
        <div className="bg-yellow-400 text-white font-light text-3xl p-8 py-12 tracking-normal leading-relaxed">
            {text}
        </div>
    )
}

export default Question