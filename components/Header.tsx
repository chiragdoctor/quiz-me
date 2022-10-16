import Link from 'next/link'
import { NextPage } from 'next'


const Header: NextPage = () => {
    return (
        <header className='bg-gray-900 text-gray-100 shadow w-full'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start'>
                <Link href='/'>
                    <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
                        <span className='ml-3 text-xl'>Quiz Me</span>
                    </a>
                </Link>
                <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>

                </nav>
            </div>
        </header>
    )
}

export default Header