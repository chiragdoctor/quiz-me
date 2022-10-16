import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '../../components/Button';
import Layout from '../../components/Layout'
import Option from '../../components/Options';
import Question from '../../components/Question';

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
    const [selectedOption, setSelectedOption] = useState<string[]>([])
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
    }




    const handleNextClick = () => {
        setCurrentQuestion(currentQuestion + 1)
        if (currentQuestion === questions.length - 1) {
            console.log('done')
            const answersArray = Object.values(answers);
            router.push(`/result?answers=${answersArray.join(',')}&categories=${categories.join(',')}`)
        }
    }

    const handlePreviousClick = () => {
        setCurrentQuestion(currentQuestion - 1)
    }

    console.log('answers', answers)
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
    console.log('query', query)
    const categories = query.categories.split(',')
    // fetch questions from api based on categories


    const questions = [{ question: 'An interface design application that runs in the browser with team-based collaborative design projects?', correctOption: 'Figma', options: ['Figma', 'Adobe XP', 'Sketch', 'Invasion'] },
    { question: 'In which Italian city can you find the Colosseum?', correctOption: 'Rome', options: ['Venice', 'Rome', 'Milan', 'Naples'] },
    {
        question: 'What is the capital of India?',
        correctOption: 'New Delhi',
        options: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai']
    }]
    return {
        props: { questions, categories },
    }
}

export default Quiz