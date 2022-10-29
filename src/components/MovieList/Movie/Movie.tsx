import Link from 'next/link'
import React, { FC } from 'react'
import { IMovie } from '../MovieList'
import Image from 'next/image'

interface TProps {
    movie: IMovie
}

const Movie: FC<TProps> = ({movie}) => {
  return (
    <li >
        <strong className='text-lg flex flex-col justify-center text-white items-center'>
            {movie.Title}
        </strong>
        <Link href={`/movies/${movie.id}`}>
            <Image className='cursor-pointer flex flex-col justify-center items-center'
             src={movie.Poster} 
             alt={`${movie.Title} Poster`}
             width={500}
             height={700}/>
        </Link>
         
    </li>
  )
}

export default Movie