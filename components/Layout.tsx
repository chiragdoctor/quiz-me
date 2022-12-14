import Head from 'next/head'
import Header from './Header'

type LayoutProps = {
    title: string
    keywords: string
    description: string
    children: React.ReactNode
}




const Layout = ({ title, keywords, description, children }: LayoutProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />
            <main className='md:container md:mx-auto mt-10'>{children}</main>
        </div>
    )
}

export default Layout;