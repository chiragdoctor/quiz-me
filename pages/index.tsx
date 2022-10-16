import type { NextPage } from 'next'
import HeroImage from '../components/HeroImage'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title='Quiz Me' description='This is a quiz app' keywords='quiz general knowledge'>
      <main className='flex mt-10 gap-4 content-center'>
        <div className='w-1/2 mt-10'>
          <div className='font-roboto font-light text-4xl leading-tight tracking-wide'>Learn  </div>
          <div className='font-roboto font-light text-4xl leading-tight tracking-wide'>new concepts</div>
          <div className='font-roboto font-light text-4xl leading-tight tracking-wide'>for each question</div>
          <div className='font-roboto font-extralight text-sm leading-tight tracking-wide mt-12'><span className='mr-4 text-xl'>| </span> We help you prepare for exams and quizes </div>
        </div>
        <div className='w-1/2'>
          <HeroImage />
        </div>
      </main>
    </Layout>
  )
}

export default Home
