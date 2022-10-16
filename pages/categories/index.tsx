import type { NextPage } from 'next'
import Layout from '../../components/Layout'


const Home: NextPage = () => {
    return (
        <Layout title='Select Categories' description='This is a quiz app' keywords='quiz general knowledge'>
            <main className='flex mt-10 gap-4 content-center'>
                hello categories
            </main>
        </Layout>
    )
}

export default Home