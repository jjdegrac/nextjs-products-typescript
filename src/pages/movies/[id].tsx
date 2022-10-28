import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'
import { IMovie } from '../../components/MovieList/MovieList'

interface TProps{
    movie: IMovie
}

export const MovieDetailPage: NextPage<TProps> = ({movie}) => {
  return (
    <ApplicationWrapper 
    title={movie.Title}
    description='Movies of the rootlab movies website'>
        <h1>{movie.Title}</h1>

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
