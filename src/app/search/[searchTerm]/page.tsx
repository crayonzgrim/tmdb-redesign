import Results from '@/app/components/Results';
import React from 'react';

export default async function SearchPage({ params }: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${params.searchTerm}&language=ko-KR&include_adult=true`
  );

  if (!res.ok) {
    throw new Error('데이터를 가져오는데 실패했습니다...😭');
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.lenght === 0 && (
        <h1 className="text-center pt-6">결과 없음.</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
