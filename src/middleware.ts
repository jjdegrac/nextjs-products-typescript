import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { IMovie } from "./components/MovieList/MovieList";

export async function middleware(request:NextRequest){
    console.log(request.nextUrl.pathname) 
    const urlitems = request.nextUrl.pathname.split('/').filter(Boolean)
    console.log(urlitems) 
    if (urlitems[0] === 'movies' && urlitems.length === 2){
        const movieID = urlitems[1]
        const movies: IMovie[] = await fetch(process.env.NEXT_PUBLIC_API_URL + '/movies/')
            .then(res => res.json())
            .then((data: IMovie[])=> data.slice(0,20))
            .catch((error)=> console.error(error)) as IMovie[]

        if(!movies.some((movie)=> movie.id === Number(movieID))){
            return NextResponse.redirect(new URL('/movies',request.url))
        }

        
    }


    //return NextResponse.redirect(new URL('/movies',request.url))
    return NextResponse.next()
    
}

export const config = {
    matcher: ['/movies/:id*' ]   
}