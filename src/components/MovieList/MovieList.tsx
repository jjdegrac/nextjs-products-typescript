import { error } from 'console'
import React, { useEffect, useState } from 'react'
import Movie from './Movie/Movie'

export interface IMovie{
  "Title": string
  "US Gross": number | null
  "Worldwide Gross": number | null
  "US DVD Sales": number | null
  "Production Budget": number | null
  "Release Date": string
  "MPAA Rating": string
  "Running Time min": number | null
  "Distributor": string
  "Source": number | null
  "Major Genre": string | null
  "Creative Type": string | null
  "Director": string | null
  "Rotten Tomatoes Rating": number | null
  "IMDB Rating": number | null
  "IMDB Votes": number | null
  "id": number 
  "Poster": string
}

interface Props {
  movies: IMovie[]
}

export const MovieList = ({movies}:Props) => {
  return (
    <div className=' flex flex-col justify-center text-white items-center'>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-6'>
            {movies.map((movie)=>(
                <Movie key={movie.id} movie={movie}/>
            ))}
        </ul>
    </div>
    
  )
}

