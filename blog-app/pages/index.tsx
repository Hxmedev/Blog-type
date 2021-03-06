import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Blog Cool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>The <span className='underline decoratiom-black decoration-4'>Blog</span> app</h1>
          <h2>It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Home
