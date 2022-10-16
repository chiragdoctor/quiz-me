import qs from 'qs';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '../../components/Button';
import Layout from '../../components/Layout'
import Option from '../../components/Options';
import Question from '../../components/Question';
import { API_URL, PER_PAGE } from '../../config';

type QuizProps = {
    questions: {
        question: string;
        correctOption: string;
        options: string[];
    }[];
    categories: string[]
}

type Answer = {
    [key: number]: string
}

const Quiz = ({ questions, categories }: QuizProps) => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('')
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [answers, setAnswers] = useState<Answer>({})

    useEffect(() => {
        const answersObject: Answer = {};
        questions.forEach((_, index) => {
            answersObject[index] = "NA"
        })
        setAnswers(answersObject)

    }, [questions])

    const verifyAnswer = (newSelectedOption: any) => {
        console.log('selectedOption', selectedOption)
        if (newSelectedOption === questions[currentQuestion].correctOption) {
            console.log('correct')
            return 'R'
        } else {
            console.log('wrong')
            return 'W'
        }
    }

    const handleOptionClick = (option: string = '') => {
        const newAnswers = { ...answers };
        const ans = verifyAnswer(option);
        newAnswers[currentQuestion] = ans;
        setAnswers(newAnswers);
        setSelectedOption(option);
    }

    const handleNextClick = () => {
        if (currentQuestion === questions.length - 1) {
            console.log('done')
            const answersArray = Object.values(answers);
            router.push(`/result?answers=${answersArray.join(',')}&categories=${categories.join(',')}`)
            return
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    const handlePreviousClick = () => {
        setCurrentQuestion(currentQuestion - 1)
    }

    return (
        <Layout title='Start Quiz' description='This is a quiz app' keywords='quiz general knowledge'>
            <div key={currentQuestion}>
                <Question text={questions[currentQuestion].question} />
                <div className='m-5 grid grid-cols-2 grid-flow-row mx-auto '>
                    {questions[currentQuestion].options.map((option, index) => {
                        return <Option key={index} text={option} selectedOption={selectedOption} handleClick={() => handleOptionClick(option)} />
                    })}
                </div>
            </div>
            <div className='flex flex-row justify-between m-10'>
                <Button disabled={currentQuestion === 0} text='Previous' handleOnClick={handlePreviousClick} />
                <Button text='Next' handleOnClick={handleNextClick} />
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


    console.log('data :>> ', data);
    const questions = data.map((question: any) => {
        const { attributes } = question;
        return {
            question: attributes.question,
            correctOption: attributes.correct_answer,
            options: attributes.options.split(',')
        }
    })

    console.log('questions :>> ', questions.length);

    return {
        props: { questions, categories },
    }
}

export default Quiz