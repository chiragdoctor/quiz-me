import { useState } from 'react'
import Category from '../../components/Category'
import Layout from '../../components/Layout'

type CategoriesProps = {
    categories: string[]
}

const Categories = ({ categories }: CategoriesProps) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const handleOnClick = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category))
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    return (
        <Layout title='Select Categories' description='This is a quiz app' keywords='quiz general knowledge'>

            <div className='flex flex-row m-10 flex-wrap justify-around'>
                {
                    categories && categories.length > 0 && categories.map((category, index) => {
                        return (
                            <Category key={index} text={category} handleOnClick={handleOnClick} selectedCategories={selectedCategories} />
                        )
                    })
                }
            </div>
        </Layout>
    )
}



export async function getServerSideProps() {
    const categories = ['General Knowledge', 'Entertainment: Books', 'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Musicals & Theatres', 'Entertainment: Television', 'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature', 'Science: Computers', 'Science: Mathematics', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Vehicles', 'Entertainment: Comics', 'Science: Gadgets', 'Entertainment: Japanese Anime & Manga', 'Entertainment: Cartoon & Animations']

    return {
        props: { categories }, // will be passed to the page component as props
    }
}

export default Categories