import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { title } from 'process'
import React, { FC, PropsWithChildren } from 'react'
import { Nav } from '../common/Nav';

interface TProps{
    title: string;
    description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
  title, 
  description,
  children,
}) => {
  const displayTitle = `${title} | Rootlab Movies`

  return (
    <div className="bg-black min-h-screen flex flex-col">
        <Head>
            <title>{displayTitle}</title>
            {description && <meta name='description' content={description}/>}
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className=" bg-white h-20">
            <Nav/>
        </header>
        <main className='grow flex flex-col text-white'>{children}</main>
        <footer className='flex p-6 h-20 text-black bg-white items-center justify-center'>
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

