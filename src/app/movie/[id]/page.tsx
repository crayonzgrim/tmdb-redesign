import React from 'react';
import Image from 'next/image';

async function getMovie(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=ko-KR`
  );

  return await res.json();
}

export default async function MoviePage({ params }: any) {
  const movieId = params.id;

  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Movie poster"
          width={500}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            maxWidth: '100%',
            height: '100%'
          }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg">
            <span className="text-bold font-semibold mr-1">
              [ Overview ] :{' '}
            </span>
            <span>{movie.overview}</span>
          </p>
          <p className="mb-3 mt-3">
            <span className="font-semibold mr-1">[ Date Released ] : </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3 mt-3">
            <span className="font-semibold mr-1">[ Rating ] : </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
