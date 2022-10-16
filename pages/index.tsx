import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import HeroImage from '../components/HeroImage'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const router = useRouter()

  const handleOnClick = () => {
    router.push('/categories')
  }
  return (
    <Layout title='Quiz Me' description='This is a quiz app' keywords='quiz general knowledge'>
      <main className='container flex flex-row justify-evenly content-center mx-auto'>
        <div className='w-1/2 mt-10'>
          <div className='font-roboto font-light text-4xl leading-tight tracking-wide'>Learn  </div>
          <div className='font-roboto font-light text-4xl leading-tight tracking-wide'>new concepts</div>
          <div className='font-roboto font-light text-4xl leading-tight tracking-wide'>for each question</div>
          <div className='font-roboto font-extralight text-sm leading-tight tracking-wide mt-12 align-middle'><span className='text-gray-400 text-3xl'>| </span>We help you prepare for exams and quizes</div>
          <div className="mt-10 content-start">
            <Button text='Start Solving' handleOnClick={handleOnClick} />
          </div>
        </div>
        <div className='w-1/2'>
          <HeroImage />
        </div>
      </main>
    </Layout>
  )
}

export default Home
