import React, { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { setEnvironmentData } from 'worker_threads'
import {ApplicationWrapper} from '../../components/layout/ApplicationWrapper'
import { MovieList } from '../../components/MovieList/MovieList'

interface TProps {
  response: string
}

const Movies: NextPage <TProps>= ( ) => {  
  return (
      <ApplicationWrapper title='Movies' description='Movies of the rootlab movies website'>
      
      <MovieList/>    
      </ApplicationWrapper>    
  )
}

export default Movies
