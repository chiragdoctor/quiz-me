import Layout from '../../components/Layout'
import Question from '../../components/Question';

type QuizProps = {
    questions: {
        question: string;
        correctOption: string;
        options: string[];
    }[]
}

const Quiz = ({ questions }: QuizProps) => {



    return (
        <Layout title='Start Quiz' description='This is a quiz app' keywords='quiz general knowledge'>
            {questions && questions.length > 0 && questions.map((question, index) => {
                return (
                    <Question key={index} text={question.question} />


                )
            })}
        </Layout>
    )
}



export async function getServerSideProps({ query }: any) {
    console.log('query', query)
    const categories = query.categories.split(',')
    // fetch questions from api based on categories
    const questions = [{ question: 'An interface design application that runs in the browser with team-based collaborative design projects?', correctOption: '1', options: ['Figma', 'Adobe XP', 'Sketch', 'Invasion'] }]
    return {
        props: { questions },
    }
}

export default Quiz