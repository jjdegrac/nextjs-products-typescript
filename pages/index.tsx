import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { setEnvironmentData } from 'worker_threads'

type HomeProps = {
  response: string
}

const Home: NextPage <HomeProps>= ({ response }) => {
  console.log(response) 
  return (
    <div className=''>
      <Head>
        <title>RootLab | NextJS Products (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the RootLab
        </h1>

        <p className=''>
          <code className=''>Typescript {response}</code>
        </p>
       
      </main>

      <footer className=''>
        <a
          href="https://rootstack.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className=''>
            RootStack
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const response = 'Message'
  return {
    props: {
      response
    } // will be passed to the page component as props
    
  }
}