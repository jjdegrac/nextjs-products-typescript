import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { setEnvironmentData } from 'worker_threads'

type BlogProps = {
  posts: Array<string>
}

const Blog: NextPage <BlogProps>= ({ posts }) => {
  console.log(posts) 
  return (
    <div className=''>
      <Head>
        <title>Blog - RootLab | NextJS Products (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the RootLab | Rootstack -Blog
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

export default Blog

export async function getServerSideProps() {
  const posts = ['Posts']
  return {
    props: {
      posts
    } // will be passed to the page component as props
    
  }
}