import React, {GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { setEnvironmentData } from 'worker_threads'
import {ApplicationWrapper} from '../../components/layout/ApplicationWrapper'
import { IMovie, MovieList } from '../../components/MovieList/MovieList'

interface TProps {
  movies: IMovie[]
  response: string
}

const Movies: NextPage <TProps>= ({movies} ) => {  
  return (
      <ApplicationWrapper title='Movies' description='Movies of the rootlab movies website'>
      
      <MovieList movies={movies}/>    
      </ApplicationWrapper>    
  )
}

export default Movies

export const getStaticProps:  GetStaticProps = async (context) => {
  const movies = await fetch(process.env.NEXT_PUBLIC_API_URL + '/movies/')
    .then(res => res.json())
    .then((data: IMovie[])=> data.slice(0,20))
    .catch((error)=> console.error(error))

  return{
    props:{
      movies
    },
    revalidate: 10 
  }
}
