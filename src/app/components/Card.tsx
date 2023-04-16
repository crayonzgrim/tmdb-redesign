import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';

type CardProps = {
  result: Record<string, any>;
};

export default function Card(props: CardProps) {
  const {
    result: {
      id,
      backdrop_path,
      poster_path,
      overview,
      title,
      name,
      release_date,
      first_air_date,
      vote_count
    }
  } = props;

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            backdrop_path || poster_path
          }`}
          alt="tmdb backdrop"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />

        <div className="p-2">
          <p className="line-clamp-2">{overview}</p>
          <h2 className="truncate text-lg font-bold mt-1">{title || name}</h2>
          <p className="flex items-center">
            {release_date || first_air_date}
            <FaRegThumbsUp className={'h-5 mr-1 ml-3'} />
            {vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
