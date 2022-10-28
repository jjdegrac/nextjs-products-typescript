import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { setEnvironmentData } from 'worker_threads'

type OtherFooProps = {
  message: string
}

const OtherFoo: NextPage <OtherFooProps>= ({ message }) => {
  console.log(message) 
  return (
    <div className=''>
      <Head>
        <title>OtherFoo - RootLab | NextJS Products (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the RootLab | Rootstack -OtherFoo
        </h1>

        <p className=''>
          <code className=''>Typescript </code>
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

export default OtherFoo

export async function getServerSideProps() {
  const message = ['Message']
  return {
    props: {
      message
    } // will be passed to the page component as props
    
  }
}