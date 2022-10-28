import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useDeferredValue, useEffect } from 'react'


type PostProps = {
  post: string
}

const Post: NextPage <PostProps>= ({ post }) => {
  console.log(post) 
  /* const router = useRouter()
  const { pid } = router.query

  useEffect(()=>{
    //fetch del producto usando el id como clave primaria
  },[pid]) */

  return (
    <div className=''>
      <Head>
        <title>Post - RootLab | NextJS Products (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the RootLab | Rootstack -Post 
        </h1>

        <p className=''>
          <code className=''>Post: &quot;{post}&quot; </code>
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

export default Post

type ServerSidePropsType ={
  query:{
    pid: string
  }
}

export async function getServerSideProps({query}:ServerSidePropsType) {
  console.log(query.pid)
  const post = query.pid


  return {
    props: {
      post
    } // will be passed to the page component as props
    
  }
}