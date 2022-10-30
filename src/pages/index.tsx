import React, { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { setEnvironmentData } from 'worker_threads'
import {ApplicationWrapper} from '../components/layout/ApplicationWrapper'

type HomeProps = {
  response: string
}
  
const Home: NextPage <HomeProps>= ({ response }) => {
  console.log(response) 
  return (
      <ApplicationWrapper 
      title='Home' 
      description='Home of the rootlab movies website'
      >
        <div className="grow flex flex-col justify-center items-center bg-[url('/images/Zelda.jpg')]">
          <div className='grow bg-black w-full justify-center items-center flex opacity-50'>
            <h1 className="text-5xl font-bold underline text-white">
              Bienvenidos a Rootlab Movies!
            </h1>
          </div>
        </div>
      </ApplicationWrapper>    
  )
}

export default Home

