import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'
import { IMovie } from '../../components/MovieList/MovieList'
import Image from 'next/image'

interface TProps{
    movie: IMovie
}

export const MovieDetailPage: NextPage<TProps> = ({movie}) => {
  return (
    <ApplicationWrapper 
    title={movie.Title}
    description='Movies of the rootlab movies website'>
      
      <div className='flex flex-col justify-center text-white '>
        <div className='flex flex-col justify-center text-white items-center'>
          <strong className='text-lg flex flex-col justify-center text-white '>
                {movie.Title}
          </strong>          
        </div>       
        <div className='flex flex-col justify-center items-center'>
        <Image className=''  
            src={movie.Poster} 
            alt={`${movie.Title} Poster`}
            width={300}
            height={400}/>
            <a className=' text-white text-right'>
              {movie.Title}
            </a>            
            <a className=' text-white text-right'>
              {movie['Major Genre']}
            </a>
                      
          
        </div>      
      </div>
              

    </ApplicationWrapper>

  )
}

export const getServerSideProps :  GetServerSideProps = async (context) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/movies/' + context.params?.id)
    const movie = await res.json()
    return {
      props: {movie}, // will be passed to the page component as props
    }
}

export default MovieDetailPage
