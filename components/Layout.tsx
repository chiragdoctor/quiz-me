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
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />
            <main className='container mx-auto my-7'>{children}</main>
        </div>
    )
}

export default Layout;