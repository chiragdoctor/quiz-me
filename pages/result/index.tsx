import qs from 'qs'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '../../components/Button';
import Layout from '../../components/Layout'
import { API_URL } from '../../config';


type Answer = {
    [key: number]: string
}

type ResultProps = {
    questions: {
        question: string;
        correctOption: string;
        options: string[];
    }[]
    result: Answer
}

type Feedback = {
    [key: number]: string;
}

const Result = ({ questions, result }: ResultProps) => {
    const router = useRouter();
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState<Feedback>({})

    useEffect(() => {

        // use reduce funtion to calculate no of correct answers and set score
        const score = Object.values(result).reduce((acc, curr) => {
            if (curr === 'R') {
                return acc + 1
            } else {
                return acc
            }
        }, 0)
        setScore(score)

        // loop through all the answers for all the result those were wrong and set feedback for them 
        const feedback: any = {}
        Object.keys(result).forEach((key: any) => {
            if (result[key] === 'W') {
                feedback[key] = questions[key].correctOption
            }
        }
        )
        setFeedback(feedback)
    }, [questions, result])


    const handlePlayAgain = () => {
        router.push('/')
    }

    return (
        <Layout title='Result' description='This is a quiz app' keywords='quiz general knowledge'>
            <div className='bg-yellow-400 w-80 h-80 rounded-full flex flex-col justify-evenly items-center mx-auto'>
                <div className='font-poppins font-bold text-5xl'>Score</div>
                <div className='font-poppins font-bold text-5xl'>{score} / {questions.length}</div>
            </div>
            <div className='flex flex-col justify-center m-20'>
                <div className='font-poppins text-2xl'>Feedback:</div>
                {
                    Object.keys(feedback).length > 0 ? Object.keys(feedback).map((key: any) => {
                        return (
                            <div className='mb-5' key={key}>

                                <div>Question: {questions[key].question}
                                </div>
                                <div>Correct Answer: {feedback[key]}</div>
                            </div>
                        )
                    }) :
                        <div className="flex justify-center font-poppins font-bold text-2xl">You have answered all the questions correctly</div>

                }
                <div className='mt-5 flex justify-end'>
                    <Button text='Complete' handleOnClick={handlePlayAgain} />
                </div>

            </div>

        </Layout>
    )
}



export async function getServerSideProps({ query }: any) {

    const categories = query.categories.split(',')
    const data = []

    if (categories.length >= 1) {
        for (let i = 0; i < categories.length; i++) {
            const res = await fetch(`${API_URL}/questions?filters[category][$eq]=${categories[i]}`)
            const { data: newData } = await res.json()
            data.push(...newData)
        }
    }


    const questions = data.map((question: any) => {
        const { attributes } = question;
        return {
            question: attributes.question,
            correctOption: attributes.correct_answer,
            options: attributes.options.split(',')
        }
    })
    const result = query.answers.split(',')
    // fetch questions from api based on categories

    return {
        props: { questions, result },
    }
}

export default Result