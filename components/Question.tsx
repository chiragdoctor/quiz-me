type QuestionProps = {
    text: string
}

const Question = ({ text }: QuestionProps) => {



    return (
        <div className="bg-yellow-400 text-white text-3xl p-8 py-12 tracking-normal leading-relaxed">
            {text}
        </div>
    )
}



export async function getServerSideProps({ query }: any) {
    console.log('query', query)
    const categories = query.categories.split(',')
    return {
        props: { categories },
    }
}

export default Question