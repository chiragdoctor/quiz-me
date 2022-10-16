import { useState } from 'react'
import { useRouter } from 'next/router';
import Button from '../../components/Button'
import Category from '../../components/Category'
import Layout from '../../components/Layout'

type CategoriesProps = {
    categories: string[]
}

const Categories = ({ categories }: CategoriesProps) => {
    const router = useRouter();
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [error, setError] = useState(false)

    const handleOnClick = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category))
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    const handleStartQuiz = () => {
        if (selectedCategories.length > 2) {
            setError(true)
        } else {
            setError(false);
            router.push(`/quiz?categories=${selectedCategories.join(',')}`)
        }
    }


    return (
        <Layout title='Select Categories' description='This is a quiz app' keywords='quiz general knowledge'>
            <div className='font-roboto font-bold text-3xl text-center m-4'>Choose your favorite topic</div>
            <div className='font-roboto font-light text-sm text-center m-6'>Select maximum of 2 topis</div>
            {error && <div className='font-roboto text-red-500 font-light text-lg text-center m-6 w-full/2 bg-gray-200 shadow-sm h-10 p-1.5'>Please select only 2 topics</div>}
            <div className='flex flex-row m-10 flex-wrap justify-around'>
                {
                    categories && categories.length > 0 && categories.map((category, index) => {
                        return (
                            <Category key={index} text={category} handleOnClick={handleOnClick} selectedCategories={selectedCategories} />
                        )
                    })
                }
            </div>
            <div className='w-full/2 m-5 mt-20 text-right'>
                <Button text='Start Quiz' handleOnClick={handleStartQuiz} />
            </div>

        </Layout>
    )
}



export async function getServerSideProps() {
    const categories = ['General Knowledge', 'Entertainment: Film', 'Sports', 'Politics', 'Entertainment: Books']

    return {
        props: { categories },
    }
}

export default Categories